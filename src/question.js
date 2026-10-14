class Question {
  // YOUR CODE HERE:

  // 1. constructor (text, choices, answer, difficulty)
  constructor(text, choices, answer, difficulty) {
    this.text = text; // string
    this.choices = choices; // array
    this.answer = answer; // string
    this.difficulty = difficulty; // number
  }

  // 2. shuffleChoices()
  shuffleChoices() {
    this.choices.sort(() => Math.random() - 0.5);
  }
}