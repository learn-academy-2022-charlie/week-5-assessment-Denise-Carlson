// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

//const { array, describe } = require("yargs")

//const { describe } = require("yargs")

//const { findSourceMap } = require("module")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
//Pseudocode**
// I am starting with a string input that contains the vowels a, e, i, o in a word. The function needs to take all the aeio letters and return them as a number. a is returned as 4. e is returned as 3, i is returned as 1 and o returns as zero. In order to do this I have to first find a way to go through the string and figure out which letters are contained in the string. My next step would be to then group those letters and assign them a number based on the idea above where a is 4, e is 3 , i is 2 etc. finally I need to return the string with the numbers in place of the selected vowel letters. use charAt()to create a conditional statement for each vowel. Return a number if charAt finds the selected vowel in the string. 

// a) Create a test with expect statements using the variables provided.
// describe("addGranola", () => {
//     let groceryList = ["apples", "carrots", "oatmeal"]
//     let result = ["apples", "carrots", "oatmeal", "granola"]
//     it("adds granola to the end of an array", () => {
//       expect(addGranola(groceryList)).toEqual(result)
//     })
//   })
describe("numvow", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    it("returns the string with numbers for the selected letters", () => {
        expect(numvow(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(numvow(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(numvow(secretCodeWord3)).toEqual("3cc3ntr1c")
   })     
})
// FAIL  ./code-challenges.test.js
// numvow
// ✕ returns the string with numbers for the selected letters

// ● numvow › returns the string with numbers for the selected letters

// ReferenceError: numvow is not defined - good fail red 
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"
const numvow = (string) => {
//     const find = /[a][e][i][o]/gi
//     console.log(find)
//     let result = find.replace("a,e,i,o","4,3,1,0")
//     return result
// }
// numvow(secretCodeWord1)
    
    // finds any matches to aeio both lowercase and uppercase
     let newString = string.replace(/a/gi,"4")  
    //if string has an a replace with 4 if not move to next letter
    newString = newString.replace(/e/gi,"3") 
    newString = newString.replace(/i/gi,"1")
    newString = newString.replace(/o/gi,"0")
    return newString
}
//Test Suites: 1 passed, 1 total
// b) Create the function that makes the test pass.
// I'm receiving an undefined error 


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.
//Pseudocode
// First my input is an array. It is going to have to search the array containing words. In the first array it needs to look for words that contain an a. This array has both lowercase and uppercase letter so it needs to be able to search for both of them.The first step in the process is to search through the array and figure out which of the words contains at least one a or multiple a's in the word searching both lowercase and uppercase. The new array output  needs to only contain the words that had at least one a in them. The function then needs to look at new array of words to see if they contain the letter e in either lowercase or uppercase. If it finds a word containing an E or e it will return that word in the new output array. 

// a) Create a test with expects statement using the variable provided.
describe("hasLetter",() => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("returns an array that has words containing the letter", () => {
        expect(hasLetter(arrayOfWords1, letterA)).toEqual["Apple", "Banana", "Orange"]
        expect(hasLetter(arrayOfWords2, letterE)).toEqual["Cherry", "Blueberry", "Peach"]
})
})
// FAIL  ./code-challenges.test.js

//  ReferenceError: hasLetter is not defined - good fail 
// b) Create the function that makes the test pass.
const hasLetter = (array,letter) => {
    return array.filter =(word) =>{
        word.includes(letter ||letter.uppercase)
    }
}
    //hasLetter
    //✓ returns an array that has words containing the letter
    //1 passed,
    
//let regex =/[a]i/
//if (array) includes(regex)
//return arrayOfWords1
    
// const onlyEven = (array) => {
//     return array.filter(value => value % 2 === 0) this was an example so I could see the syntax needed.
  //}
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
// Pseudocode**
//Given an output of 5 numbers determine if any of those five contain either a duplicate  two of the same number or 3 of the same number. If it contains that, the other 2 numbers must also be the same if a triplicate or match the other number to create 3 of the same number. Each full house array must have a pair of numbers and also number with 3 of the same in the array of 5 total numbers. A false array won't contain both pairs of the same number and a list of 3 of the same number. It can have a pair,two pairs  or a triple but not both. First step would be to go through array and see if any are duplicates if no duplicates - false no full house. If duplicate number exist in array, then check to see if any 3 numbers are the same. If there are 3 of the same numbers in the array, does the array also contain a set of duplicate numbers in addition to the set of three numbers. If the answer is true the array is a full house array.  

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    it("outputs a five number array and determines if the array has 2 numbers the same and 3  different numbers the same",() => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
})
})
//  ReferenceError: fullHouse is not defined - this is good fail red

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
// b) Create the function that makes the test pass.
const fullHouse = ([num1,num2,num3, num4, num5]) => {
    if (num1 === num2 && num3 === num4 && num3 === num5){
        return true
    }
    if (num1 !== num2 && num1 === num3 && num2 ===4 && num3 === num5){
        return true
    }
    if (num1 !== num3 && num1 === num4 && num2 === num3 && num3 === num5){
        return true
    }
    if (num1 === num5 && num2 === num3 && num2 == num4) 
        return true
        {
    if (num1 === num3 && num2 === num3 && num4 === num5){
        return true
    } else {
    return false
}}}

// 1 passed,- green 

//adding some stuff