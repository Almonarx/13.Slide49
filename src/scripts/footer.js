const builder = require('./elementBuilder');

module.exports = () => {
    const content = '<p>Easycode 20017 (c)</p>';

    return builder('footer', content, 'footer');
};