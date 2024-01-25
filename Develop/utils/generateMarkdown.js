
// This is function that returns a license badge based on which license is passed in If there is no license will return to an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache 2.0") {
     return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GPL 3.0") {
     return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "BSD 3-Clause") {
     return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
     return "";
  }
 }
 
 // Render license TOC link
 function renderLicenseLink(license) {
  if (license) {
     return `\n* [License](#license)\n`;
  } else {
     return "";
  }
 }
 
 // function returns the license section of README If there is no license will return to an empty string
 function renderLicenseSection(license) {
  if (license) {
     return `## License
 
 This project is licensed under the ${license} License.
 
 Please visit [Choose a License](https://choosealicense.com) for more details about available open source licenses.
 `;
  } else {
     return "";
  }
 }
 
 // function to generate markdown for README
 function generateMarkdown(data) {
  return `# ${data.title}
 
 ${renderLicenseBadge(data.license)}
 
 ## Description
 
 ${data.description}
 
 ## Table of Contents
 
 * [Installation](#installation)
 * [Usage](#usage)
 ${renderLicenseLink(data.license)}
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
 
 ## Installation
 
 ${data.installation}
 
 ## Usage
 
 ${data.usage}
 
 ${renderLicenseSection(data.license)}
 
 ## Contributing
 
 ${data.contributing}
 
 ## Tests
 
 ${data.tests}
 
 ## Questions
 
 If you have any questions or need assistance, please contact me at:
 - [Email](mailto:${data.email})
 - [GitHub](https://github.com/${data.github})
 
 ---
 
 Copyright © 2022 ${data.name}. All rights reserved.
 
 `;
 }
 
 module.exports = generateMarkdown;