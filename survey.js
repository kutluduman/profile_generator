const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyObj = {};

rl.question('What is your name? Nicknames are also acceptable :)', (answer) => {
  surveyObj.name = answer;

  rl.question('What is an activity you like doing?', (answer) => {
    surveyObj.activity = answer;

    rl.question('What do you listen to while doing that?', (answer) => {
      surveyObj.music = answer;

      rl.question('Which meal is your favourite', (answer) => {
        surveyObj.meal = answer;

        rl.question('What is your favourite thing to eat for that meal?', (answer) => {
          surveyObj.food = answer;

          rl.question('Which sport is your absolute favourite?', (answer) => {
            surveyObj.sport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              surveyObj.superpower = answer;

              console.log(surveyObj);

              rl.close();

            });
          });
        });
      });
    });
  });
});