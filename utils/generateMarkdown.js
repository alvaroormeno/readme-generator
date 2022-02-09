// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case 'None':
      return ''
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla-Public':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'None':
      return ''
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'Mozilla-Public':
      return '(https://opensource.org/licenses/MPL-2.0)';
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  

  

  #Table of Contents
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [license](#license)
  4. [Contribution](#Contribution)
  5. [Testing](#Testing)
  6. [Questions](#Questions)

  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}
  ${renderLicenseLink(data.license)}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Questions
  ${data.questions}
  ${data.email}
  ${data.github}


`;
}

module.exports = generateMarkdown;
