const promisify = (packageName, exportName, methodName) => {
  const callbackVersion = Package[packageName][exportName][methodName];
  Package[packageName][exportName][methodName] = (...args) => {
    const lastArgument = args.length ? [...args][args.length - 1] : null;
    if (typeof lastArgument === 'function') {
      return callbackVersion(...args);
    } else {
      return new Promise((resolve, reject) => {
        callbackVersion(...args, (err, res) => {
          if (err !== null && err !== undefined) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    }
  }
}

if (Package.meteor) {
  ['call', 'apply'].forEach((methodName) => {
    promisify('meteor', 'Meteor', methodName);
  });
}

if (Package.http) {
  ['call', 'get', 'post', 'put', 'del'].forEach((methodName) => {
    promisify('http', 'HTTP', methodName);
  });
}
