const dataJsonURL = 'http://localhost:3000/packages/local-test_mquandalle_promisify-core/tests/data.json';

Tinytest.addAsync('Meteor RPC - ES5', (test, next) => {
  Meteor.call('getTheAnswerToLife', (err, res) => {
    test.equal(res, 42);
    next();
  });
});

Tinytest.addAsync('Meteor RPC - ES6', (test, next) => {
  Meteor.call('getTheAnswerToLife').then((res) => {
    test.equal(res, 42);
    next();
  });
});

Tinytest.addAsync('Meteor RPC - ES7', async (test, next) => {
  const res = await Meteor.call('getTheAnswerToLife');
  test.equal(res, 42);
  next();
});

Tinytest.addAsync('HTTP API - call', (test, next) => {
  HTTP.call('get', dataJsonURL).then((res) => {
    test.equal(res.data.hello, 'world');
    next();
  });
});

Tinytest.addAsync('HTTP API - get', (test, next) => {
  // HTTP.get(dataJsonURL, (err, res) => {
  //   test.equal(res.data.hello, 'world');
  //   next();
  // });

  HTTP.get(dataJsonURL).then((res) => {
    test.equal(res.data.hello, 'world');
    next();
  });
});
