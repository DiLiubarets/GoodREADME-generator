// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.projectTittle}
    ## Content
    * [User Name](#username)
    * [Project Tittle](#projectTittle)
    * [Project Description](#projectDescription)
    * [Installation](#installation)
    * [Instruction](#instruction)
    * [License](#license)
    * [Email](#email)
  
    ## User Name
    ${data.username}

    ## Project Tittle
    ${data.projectTittle}

    ## Project Description
    ${data.projectDescription}

    ## Installation
    ${data.installation}

    ## Instruction
    ${data.instruction}

    ##License
    ${data.license}

    ## Email
    ${data.email}

  `;
  }
  
  module.exports = generateMarkdown;