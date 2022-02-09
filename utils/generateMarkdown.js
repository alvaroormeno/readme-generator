// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

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

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Questions
  ${data.questions}


`;
}

module.exports = generateMarkdown;