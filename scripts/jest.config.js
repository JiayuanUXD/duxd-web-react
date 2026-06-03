// allow IDE to configure Jest config
const config = require(require.resolve('ddmc-scripts/lib/config/jest/config.js')).default;

module.exports = config.client;
// module.exports = config.node;
