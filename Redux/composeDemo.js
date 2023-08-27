import { compose } from "redux";



function removeSaces(string) {
    return string.split(" ").join("");
}

//console.log(removeSaces("abc def ghi"));

function repeatString(string) {
    return string.repeat(2);  //otherwise string + string
}

//console.log(repeatString("abcd"))

function convertToUpper(string) {
    return string.toUpperCase();
}
//console.log(convertToUpper("abcd"))

const input = "abc def ghi"

// const output = convertToUpper(repeatString(removeSaces(input)))
// console.log(output);

const composeFunction = compose(removeSaces,repeatString,convertToUpper)
console.log(composeFunction(input));