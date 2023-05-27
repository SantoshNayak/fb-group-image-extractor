// index.js
const getGroupImages = require('./src/index');

module.exports = {
  getImagesFromGroup: (groupUrl, count) => getGroupImages(groupUrl, count),
};
