const { root } = require('./helpers');


/**
 * This is a server config which should be merged on top of common config
 */
module.exports = {
  entry: root('./src/main.server.ts'),
  output: {
  	path:root('dist'),
    filename:'server.js'
  },
  target: 'node'
};
