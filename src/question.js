class Question {
    // YOUR CODE HERE:
   
    // 1. constructor (text, choices, answer, difficulty)
    constructor(text, choices, answer, difficulty){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }

    // 2. shuffleChoices()
    shuffleChoices() {
    const shuffledChoices = [this.choices];

    for (let index = shuffledChoices.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));

        [shuffledChoices[index], shuffledChoices[randomIndex]] =
            [shuffledChoices[randomIndex], shuffledChoices[index]];
    }

    this.choices = shuffledChoices;
}

}