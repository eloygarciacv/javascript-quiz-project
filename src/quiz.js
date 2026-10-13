class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(question, timeLimit, timeRemaining) {
    this.questions = question; // array
    this.timeLimit = timeLimit; // number
    this.timeRemaining = timeRemaining; // number
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  // 4. shuffleQuestions()
  shuffleQuestions() {
    this.questions.sort(() => Math.random() - 0.5);
  }

  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    if (answer === this.getQuestion().answer) {
      this.correctAnswers++;
    }
  }

  // 6. hasEnded()
  hasEnded() {
    if (this.currentQuestionIndex === this.questions.length) {
      return true;
    } else {
      return false;
    }
  }

 filterQuestionsByDifficulty(difficulty) {
      if (
    typeof difficulty !== "number" ||
    difficulty < 1 ||
    difficulty > 3
  ) {
    return;
  }
  this.questions = this.questions.filter((question) => {
    return question.difficulty === difficulty;
    
  });
}
}

