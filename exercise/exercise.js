/* ARGUMENTS SHOULD NOT BE MUTATED */

/*
Write a function which adds a class "highlight" to the introduction paragraph
*/
var highlightText = function(){

}

/*
Write a function which removes the class "highlight" from the introduction
paragraph
*/
var unHighlightText = function(){

}

/*
Write a function which, if the introduction paragraph has the class "highlight",
it will be removed; otherwise the class "highlight" is added.
*/
var toggleHighlight = function(){

}

/*
Write a function which returns all text content of the introduction paragraph
*/
var getText = function(){

}

/*
Write a function which returns the number of charachters in the introduction
paragraph
*/
var getNumChars = function(){

}

/*
Write a function which returns the number of words in the introduction paragraph
*/
var getNumWords = function(){

}

/*
Write a function which returns the number of sentences in the introduction
paragraph
*/
var getNumSentences = function(){

}

/*
Write a function which takes a string, and returns true if the introduction
paragraph contains that string, and false if it doesn't.
*/
var containsString = function(){

}

/*
Write a function which returns the value in the `firstName` text input
*/
var getFirstNameValue = function(){

}

/*
Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
var getValue = function(inputName){

}

/*
Write a function which takes an object,`formState`, and a string, `inputName`,
and returns a copy of the object, but with an `inputName` key on the object
whose value is taken from the input element with that name.
*/
var updateStateValue(formState, inputName){

}

/*
Write a function which takes an object,`formState`, and an array of string,
`inputNames`, and returns a copy of the object, which stores the values of each
input with name in `inputNames` array.
*/
var updateStateValues(formState, inputNames){

}

/*
Write a function which returns an **array** of values of inputs with a given class
*/
var getInputValues(className){

}

/*
Write a function which takes a className, and returns the number of elements in
the DOM with that className. If the function is passed an argument which doesn't
have type `string`, the function should return 0;
*/
var getNumElsOfClass = function(className){

}

/*
Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
var generateUl = function(array){

}

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
