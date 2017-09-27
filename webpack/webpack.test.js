var nodeExternals = require('webpack-node-externals');

module.exports = {
 target: 'node', // in order to ignore built-in modules like path, fs, etc. 
 externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
 resolve: {
  extensions: ['.ts','.tsx','.js']
},
module: {
  rules: [
    { test: /\.tsx?$/, loader: 'ts-loader' },
    { test: /\.css$/, loader: 'raw-loader' },
    { test: /\.html$/, loader: 'raw-loader' }
  ]
}

};