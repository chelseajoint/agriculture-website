const path = require('path');

module.exports = function override(config, env) {
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];

  return config;
};
