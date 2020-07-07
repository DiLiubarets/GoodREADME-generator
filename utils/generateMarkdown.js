// function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.Title}
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

## Description
${data.Discription}

## Installation
${data.Install}

## Usage
${data.Usage}

## License
${data.License}

## Contributors
${data.Contributors}

## Test
${data.Test}

## Questions
Contact me:

Github:[${data.Github}](https://github.com/DiLiubarets)

Email:[${data.Email}](https://github.com/DiLiubarets)

`;}

module.exports = generateMarkdown
