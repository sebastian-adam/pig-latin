//Back-end logic
var sentenceArray;

function sentenceSplit(input) {
  sentenceArray = input.toLowerCase().split(" ");
  return sentenceArray;
}

function translator(words) {
  words.forEach(function(word){
    console.log(word);
    vowelArray.forEach(function(vowel){
      if (word.charAt(0) === vowel) {
        var piggedWord = word.concat("ay");
        console.log(piggedWord);
      }
    });
  });
}

//For words that start with a vowel, add "ay" to the end.
var vowelArray = ["a", "e", "i", "o", "u"];





//Front-End logic
$(function() {
$("#translator").submit(function(event) {
    event.preventDefault();

    var english = $("#english").val();

    sentenceSplit(english);
    console.log(english);
    console.log(typeof english);
    console.log(sentenceArray);
    translator(sentenceArray);
  });
});
