//Convert string to camel case

function toCamelCase(str){

  let arrayOfWords = str.split(/-|_/);
  return arrayOfWords[0] + arrayOfWords
    .slice(1)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

}

//Firstly, I divide string into array of words, using regExp to find '-' and '_' symbols. 
//Then function return first word without any changes and the rest of the words, but with first letters in upper case.

console.log(toCamelCase("the_stealth_warrior")); //Result is "theStealthWarrior"
