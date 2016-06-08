//Back-end logic
var word;
var sentenceArray;
var latinArray = [];

function sentenceSplit(input) {
  sentenceArray = input.toLowerCase().split(" ");
  return sentenceArray;
}

function translator(words) {
  words.forEach(function(word){
    //check to see if there is punctuation at end of word, store val in new var if yes
    if (word.charAt(word.length-1) === "," ||
        word.charAt(word.length-1) === "." ||
        word.charAt(word.length-1) === "!" ||
        word.charAt(word.length-1) === "?" ||
        word.charAt(word.length-1) === ":" ) {
      var punctuation = word.substr(word.length-1);
      word = word.slice(0,word.length-1);
    }
    //check to see if the words is a number
    if(isNaN(parseInt(word))) {
      //if no punctuation exists concat "", otherwise undefined
      if (!punctuation) {
        punctuation = "";
      }
      //check to see if word has no vowels
      if(word.search("a") === -1 &&
         word.search("e") === -1 &&
         word.search("i") === -1 &&
         word.search("o") === -1 &&
         word.search("u") === -1) {
        var piggedWord = word.concat("ay").concat(punctuation);
        latinArray.push(piggedWord);
      } else {
        //For words that start with consonant, move to end.
        while (word.charAt(0) !== "a" && word.charAt(0) !== "e" && word.charAt(0) !== "i" && word.charAt(0) !== "o" && word.charAt(0) !== "u") {
          //Check for qu combination
          if (word.charAt(0) === "q" && word.charAt(1) === "u") {
            var consonant = word.substr(0,2);
            word = word.slice(2,word.length).concat(consonant);
          } else {
            var consonant = word.substr(0,1);
            word = word.slice(1,word.length).concat(consonant);
          }
        }
        //For words that start with a vowel, add "ay" to the end.
        if(word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u") {
          var piggedWord = word.concat("ay").concat(punctuation);
          latinArray.push(piggedWord);
        }
      }
    } else {
        latinArray.push(word);
    }
  });
}

//Front-End logic
$(function() {
$("#translator").submit(function(event) {
    event.preventDefault();

    latinArray = [];
    var english = $("#english").val().trim();

    sentenceSplit(english);
    translator(sentenceArray);
    var piggedSentence = latinArray.join(" ");
    $("#display-result").text(piggedSentence);
    $("#translation").fadeIn();
  });
});
