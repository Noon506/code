const date = require('./src/dateFormat.js');
const escape = require('./src/htmlEscape.js');

module.exports = {
  ...date,
  ...escape
}
