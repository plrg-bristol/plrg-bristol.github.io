const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function override(config) {
  // Add in some polyfills:
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
    process: require.resolve("process/browser"),
  });
  config.resolve.fallback = fallback;

  // Add in some polyfills:
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
    // Include the docs folder files in the build so it shows up on the compiled branch:
    new CopyWebpackPlugin({
      patterns: [{ from: "docs" }],
    }),
  ]);

  /*
  Fix from: https://github.com/facebookresearch/segment-anything/issues/678#issuecomment-1927634108
  Original error:
    Module not found: Error: Can't resolve 'process/browser' in './node_modules/axios/lib'
    Did you mean 'browser.js'?
    BREAKING CHANGE: The request 'process/browser' failed to resolve only because it was resolved as fully specified
    (probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file,
    or a '*.js' file where the package.json contains '"type": "module"').
*/
  // Add a new rule onto the end of the current list of rules
  config.module.rules.push({
    test: /\.m?js/, // Only apply this rule to .mjs files
    resolve: {
      // Documentation: https://webpack.js.org/configuration/resolve/#resolvefullyspecified
      fullySpecified: false, // Don't assume the modules are fully specified when resolving
    },
  });

  return config;
};
