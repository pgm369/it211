// Pig Latin translation function
function translateToPigLatin(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const firstChar = word[0].toLowerCase();
  
    if (word.length === 0 || word.length === 1) {
      console.log("Input can't be translated.");
      return;
    }
  
    if (vowels.includes(firstChar)) {
      console.log(word + 'way');
    } else if (!vowels.includes(firstChar) && vowels.includes(word[1])) {
      console.log(word.slice(1) + firstChar + 'ay');
    } else {
      console.log(word.slice(2) + word[0] + word[1] + 'ay');
    }
  }
  
  // Pig Latin translation for a sentence
  function translateSentenceToPigLatin(sentence) {
    const words = sentence.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      translateToPigLatin(words[i]);
    }
  }
  
  // Example usage
  const input = prompt('Enter a sentence:'); // Prompt the user for input
  translateSentenceToPigLatin(input);
  