// Define the Card object
function Card(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  
  // Create the deck of cards
  const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
  const faceCards = { 1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King' };
  let deck = createDeck();
  
  function createDeck() {
    const deck = [];
    for (let suit of suits) {
      for (let value = 2; value <= 13; value++) {
        deck.push(new Card(value, suit));
      }
    }
    return deck;
  }
  
  // Create function to randomly select 5 cards
  function getRandomCard() {
    if (deck.length < 5) {
      // If there are not enough cards left in the deck, recreate it.
      deck = createDeck();
    }
  
    const hand = [];
    const usedIndices = new Set();
  
    while (hand.length < 5) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        hand.push(deck[randomIndex]);
        // Remove the card from the deck after it has been drawn.
        deck.splice(randomIndex, 1);
      }
    }
  
    return hand;
  }
  
  // Create function to display the hand on the HTML page
  function displayHand() {
    const hand = getRandomCard();
    const handList = document.getElementById('hand-list');
  
    // Clear the currently displayed hand.
    handList.innerHTML = '';
  
    for (let card of hand) {
      const listItem = document.createElement('li');
      listItem.textContent = (card.value in faceCards) ? `${faceCards[card.value]} of ${card.suit}` : `${card.value} of ${card.suit}`;
      handList.appendChild(listItem);
    }
  }
  