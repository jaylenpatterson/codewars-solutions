function possiblyPerfect(key, answers) {
  let possiblePerfectCorrect = true;
  let possibePerfectIncorrect = true;

  key.forEach((correctAnswer, index) => { 
    const STUDENT_ANSWER = answers[index];
    const BLANK_CORRECT_ANSWER = "_";

    // Answer key note is blank? Do nothing..
    if (correctAnswer === BLANK_CORRECT_ANSWER) {
      return;
    }
    
    // Student answer is correct? Perfect incorrect becomes impossible.
    if (correctAnswer === STUDENT_ANSWER) {
      possibePerfectIncorrect = false;
      return;
    }

    // Student answer incorrect? Perfect correct becomes impossible.
    possiblePerfectCorrect = false;
  });
  
  return possiblePerfectCorrect || possibePerfectIncorrect;
};