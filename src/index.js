// src/index.js
const puppeteer = require('puppeteer');

async function getGroupImages(groupUrl, count) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(groupUrl);

  // Wait for the images to load (if necessary)
  await page.waitForSelector('img');

  // Extract image URLs using class names
  const imageClassNames = ['x1ey2m1c', 'xds687c', 'x5yr21d', 'x10l6tqk', 'x17qophe', 'x13vifvy', 'xh8yej3', 'xl1xv1r'];
  const imageUrls = await page.evaluate((classNames, limit) => {
    const images = Array.from(document.querySelectorAll('img'));
    const filteredImages = images.filter((img) =>
      classNames.some((className) => img.classList.contains(className))
    );

    const limitedImages = filteredImages.slice(0, limit);
    return limitedImages.map((img) => img.src);
  }, imageClassNames, count);

  await browser.close();
  // Remove the first two images from the response as they are group cover images
  const finalImageUrls = imageUrls.slice(2);
  return finalImageUrls;
}

module.exports = getGroupImages;
