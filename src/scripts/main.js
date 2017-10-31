const builder = require('./elementBuilder');

module.exports = () => {
    const date = new Date();
    const content = `<h2>Current date:</h2><p><strong>${date.toLocaleString()}</strong></p>`;

    return builder('main', content, 'main');
};