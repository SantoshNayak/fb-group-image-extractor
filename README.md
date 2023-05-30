
# fb-group-image-extractor
Extract the recently posted images from a facebook group


## Installation

Install  package with npm

```bash
  npm i fb-group-image-extractor

```
# Example
```
const { getImagesFromGroup } = require('fb-group-image-extractor');
const groupUrl = 'https://www.facebook.com/groups/1246116909252645';
const count = 10;

getImagesFromGroup(groupUrl, count)
  .then((imageUrls) => {
    console.log('Image URLs:', imageUrls);
    // Add further assertions or processing as needed
  })
  .catch((error) => {
    console.error('Error:', error);
  });

```
## Authors

- [@santoshnayak](https://github.com/santoshnayak/)

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://twitter.com/hey_santosh" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="hey_santosh" height="30" width="40" /></a>
<a href="https://linkedin.com/in/santoshnayak1996" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="santoshnayak1996" height="30" width="40" /></a>
<a href="https://stackoverflow.com/users/9339400" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="9339400" height="30" width="40" /></a>
<a href="https://fb.com/santoshnayak1996" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="santoshnayak1996" height="30" width="40" /></a>
<a href="https://instagram.com/iamsantoshnayak" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="iamsantoshnayak" height="30" width="40" /></a>
<a href="https://medium.com/@santoshnayak1996" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="@santoshnayak1996" height="30" width="40" /></a>
<a href="https://www.youtube.com/c/the ui guy" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="the ui guy" height="30" width="40" /></a>
</p>
