import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      name: 'Q1',
      message: 'Qual é a sua primeira nota?',
    },
    {
      name: 'Q2',
      message: 'Qual é a sua segunda nota?',
    },
  ])
  .then((answers) => {
    console.log(answers);
    const media = (parseInt(answers.Q1) + parseInt(answers.Q2)) / 2
    console.log(`A sua média é ${media}`)
  })
  .catch((err) => console.log(err));
