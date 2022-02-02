// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
 
  // const strArr = str.split('').reverse().join('');

  // or
   // let revString = "";
  // const strArr = str.split('') 
  // .forEach(char => 
  //   revString = char + revString);
  // return revString;

// let revString = '';
// for (let i =0; i < str.length; i++){
//   revString = str[i] + revString;}
// return revString

// or
let revString = '';
for (let char of str){
  revString = char + revString;
}
return revString;

}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

  // if(str.split('').reverse().join('')=== str){
  //   return "true";
  // } else {
  //   return "false";
  // }

  const revString = str.split('').reverse().join('');
  return revString === str;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {

const revString = int.toString().split('').reverse().join('');
return parseInt(revString) * Math.sign(int);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  const newArr = str.toLowerCase().split(" ");
  const result = newArr.map((letter)=> {
    return letter.replace(letter.charAt(0), letter.charAt(0).toUpperCase());
  })
  return result.join(" ");

  // or
  // const strArr = str.toLowerCase().split(' ');

  // for (let i =0; i < strArr.length; i++){
  //   strArr[i] = strArr[i].substring(0,1).toUpperCase() + 
  //   strArr[i].substring(1);
  // }
  // return strArr.join(' ');
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach((char)=>{
    if(charMap[char]){
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for(let char in charMap){
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
for(let i = 1; i <= 100; i++){
if (i % 3 === 0 && i % 5 === 0){
  console.log("FizzBuzz");
} else if(i % 3 === 0){
    console.log("Fizz")
  } else if( i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i);
  }
}

}


// Call Function
const output = fizzBuzz();

console.log(output);