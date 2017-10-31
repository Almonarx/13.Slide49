const $ = require('jquery');

module.exports = (tag = 'div', content = '', className = 'box') => $(`<${tag}>${content}</${tag}>`).addClass(className);