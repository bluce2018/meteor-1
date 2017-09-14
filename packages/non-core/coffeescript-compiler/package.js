Package.describe({
  name: 'coffeescript-compiler',
  summary: 'Compiler for CoffeeScript code, supporting the coffeescript package',
  // This version of NPM `coffeescript` module, with _1, _2 etc.
  // If you change this, make sure to also update ../coffeescript/package.js to match.
  version: '1.12.7_2'
});

Npm.depends({
  'coffeescript': '1.12.7',
  'source-map': '0.5.6'
});

Package.onUse(function (api) {
  api.use('babel-compiler@7.0.0');
  api.use('ecmascript@0.8.2');

  api.mainModule('coffeescript-compiler.js', 'server');

  api.export('CoffeeScriptCompiler', 'server');
});

// See `coffeescript` package for tests.
