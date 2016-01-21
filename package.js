Package.describe({
  name: 'mquandalle:promisify-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('http', { weak: true });
  api.addFiles('promisify-core.js', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mquandalle:promisify-core');
  api.use('http');
  api.use('meteor-base');
  api.addFiles('promisify-core-tests.js', ['client', 'server']);
  api.addFiles('tests/rpc.js', 'server');
  api.addAssets('tests/data.json', 'client');
});
