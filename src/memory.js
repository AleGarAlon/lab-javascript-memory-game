class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined
    }
    
    const shuffledCards = this.cards;
    for (let i = shuffledCards.length - 1; i > 0; i -= 1) {
      const y = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[y]] = [shuffledCards[y], shuffledCards[i]];
    }

    return shuffledCards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
      
    }
    else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if ( this.pairsGuessed === this.cards.length/2) {
      return true
    }
    else {
      return false
    }
  }
}
