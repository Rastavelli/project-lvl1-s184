import readlineSync from 'readline-sync';

const gameFlow = (gameRules, questionAndAnswerGenerator) => {
  console.log('Welcome to the Brain Games!');

  console.log(gameRules);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);

  const askQuestion = (count) => {
    if (!count) {
      console.log(`Congratulations, ${playerName}!`);
      return true;
    }

    const [question, rightAnswer] = questionAndAnswerGenerator();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${playerName}!`);
      return false;
    }
    return askQuestion(count - 1);
  };

  askQuestion(3);
};

export default gameFlow;
