const { override, addWebpackAlias, addWebpackPlugin, babelInclude } = require('customize-cra');
const path = require('path');
const webpack = require('webpack');

module.exports = override(
  // Add aliases for problematic imports
  addWebpackAlias({
    'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react/jsx-runtime.js'),
    'react/jsx-dev-runtime': path.resolve(__dirname, 'node_modules/react/jsx-dev-runtime.js'),
  }),
  
  // Add additional include paths for babel processing
  babelInclude([
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules/react-pdf'),
    path.resolve(__dirname, 'node_modules/@react-pdf')
  ]),
  
  // Add a plugin to handle fallback for module resolution
  addWebpackPlugin(
    new webpack.NormalModuleReplacementPlugin(
      /^react\/jsx-runtime$/,
      (resource) => {
        resource.request = 'react/jsx-runtime.js';
      }
    )
  ),
  addWebpackPlugin(
    new webpack.NormalModuleReplacementPlugin(
      /^react\/jsx-dev-runtime$/,
      (resource) => {
        resource.request = 'react/jsx-dev-runtime.js';
      }
    )
  )
);
