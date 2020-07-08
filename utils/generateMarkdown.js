// function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.Title}



## Table of Contents
* [Description](#description)
* [Installation instructions](#installation)
* [Usage information](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

## Description
${data.Description}

## Installation instructions
${data.Installation}

## Usage information
${data.Usage}

## License
${data.License}

## Contributors
${data.Contributors}

## Test
${data.Test}

## Questions
Contact me:

Github:[${data.Username}](https://github.com/DiLiubarets)

Email:[${data.Email}](https://github.com/DiLiubarets)

`;}

module.exports = generateMarkdown
