document.addEventListener("DOMContentLoaded", function () {
  const converter = new showdown.Converter();

  // Fetch the README.md file
  fetch('README.md')
    .then(response => response.text())
    .then(data => {
      const htmlContent = converter.makeHtml(data);
      const readmeDiv = document.getElementById('readme-content');
      readmeDiv.innerHTML = htmlContent;
    })
    .catch(error => {
      console.error('Error fetching README.md:', error);
    });

  // Prompt the user for the input
  const input = prompt("Enter a sentence or a word:");

  // Check if input is not empty or a single-letter word
  if (input.trim() === "" || input.trim().length === 1) {
    alert("Input can't be translated.");
  } else {
    const words = input.split(" ");
    const translatedWords = [];

    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();

      if (lowerCaseWord[0].match(/[aeiou]/)) {
        translatedWords.push(word + "way");
      } else if (lowerCaseWord[0].match(/[bcdfghjklmnpqrstvwxyz]/)) {
        if (lowerCaseWord[1].match(/[bcdfghjklmnpqrstvwxyz]/)) {
          translatedWords.push(word.slice(2) + word.slice(0, 2) + "ay");
        } else {
          translatedWords.push(word.slice(1) + word[0] + "ay");
        }
      }
    }

    const translatedSentence = translatedWords.join(" ");
    const translationResult = document.getElementById('translation-result');
    translationResult.textContent = "Translated sentence: " + translatedSentence;
  }
});
