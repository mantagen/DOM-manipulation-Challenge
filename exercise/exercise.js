/*
Disclaimer: some of these functions are very specific, and in real life
might be generalised to be more useful.
*/


/* EXERCISES */

/*
Write a function which adds a class "highlight" to the introduction paragraph
*/
var highlightText = function(){
  document.querySelector(".introduction").classList.add("highlight");
};

/*
Write a function which removes the class "highlight" from the introduction
paragraph
*/
var unHighlightIntroText = function(){
 document.querySelector(".introduction").classList.remove("highlight");
};

/*
Write a function which, if the introduction paragraph has the class "highlight",
it will be removed; otherwise the class "highlight" is added.
*/
var toggleHighlight = function(){
  document.querySelector(".introduction").classList.toggle("highlight");
}

/*
Write a function which returns all text content of the introduction paragraph
*/
var getText = function(){
  return document.querySelector(".introduction").innerText;
}

/*
Write a function which returns the number of charachters in the introduction
paragraph
*/
var getNumChars = function(){
  return getText().length;
}

/*
Write a function which returns the number of words in the introduction paragraph
*/
var getNumWords = function(){
  return getText().split(" ").length;
}

/*
Write a function which returns the number of sentences in the introduction
paragraph
*/
var getNumSentences = function(){
  return getText().split(".").length;
}

/*
Write a function which returns the average number of words per sentence
*/
var getWordsPerSentece = function(){
  return getNumSentences()/getNumWords();
}

/*
Write a function which returns the average number of letters per word
*/
var getLettersPerWord = function(){
  return getNumChars()/getNumWords();
}

/*
Write a function which takes a string, and returns true if the introduction
paragraph contains that string, and false if it doesn't.
*/
var containsString = function(string){
  return document.querySelector(".introduction").indexOf(string) === -1 ? false : true;
}

/*
Write a function which returns the value in the `firstName` text input
*/
var getFirstNameValue = function(){
  return document.querySelector("input[name='firstName']").value;
}

/*
Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
var getValue = function(inputName){
  return document.querySelector("input[name='"+inputName+"']").value;
}

/*
Write a function which takes an object,`formState`, and a string, `inputName`,
and returns a copy of the object, but with an `inputName` key on the object
whose value is taken from the input element with that name.
*/
var updateStateValue(formState, inputName){
  // return Object.assign({}, formState, {inputName: getValue(inputName)});
  var stateCopy = Object.keys(formState).reduce(function(accumulator, key){
    accumulator[key] = formState[key];
  },{});
  stateCopy[inputName] = getValue(inputName);

}

/*
Write a function which takes an object,`formState`, and an array of string,
`inputNames`, and returns a copy of the object, which stores the values of each
input with name in `inputNames` array.
*/
var updateStateValues(formState, inputNames){
  var stateToAdd = inputNames.reduce(function(acc, inputName){
    acc[inputName] = getValue(inputName);
    return acc;
  },{});
  var stateCopy = Object.keys(formState).reduce(function(accumulator, key){
    accumulator[key] = formState[key];
  },{});
  var newState = Object.keys(stateToAdd).reduce(function(accumulator, key){
    accumulator[key] = formState[key];
  },stateCopy);
  return newState;
};

/*
Write a function which returns an **array** of values of all input elements
with a given class
*/
var getInputValues(className){
  Array.prototype.slice.call(document.querySelectorAll("input."className));
};

/*
Write a function which takes a className, and returns the number of elements in
the DOM with that className. If the function is passed an argument which doesn't
have type `string`, the function should return 0;
*/
var getNumElsOfClass = function(className){
  return document.querySelectorAll(className).length;
};

/*
Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
var generateUl = function(arr){
  var ulNode = document.createElement("ul");
  var liNode;
  var textNode;
  arr.forEach(elem, function(){
    if(typeof elem === "string" || typeof elem === "integer");
    liNode = document.createElement("li");
    textNode = document.createTextNode(elem);
    liNode.appendChild(textNode);
    ulNode.appendChild(liNode);
  });
  return ulNode;
};

/*
Write a function, `generateNestedUl`, which takes array whose elements can be
either strings or arrays of strings, and which returns a `ul` htmlElement
containing `li` elements for each array element. Each `li` should contain the
value of the array element if is a string, or a `ul` containing `li` elements
of the array if element is an array.
*/
var generateNestedUl = function(array) {

}

/*
Using the above functions, write a function which takes a filter function,
which returns a function that takes an array, that generates a `ul` as above
but with filtered elements.
*/
