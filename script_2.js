// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
let str = sen.toLowerCase().match(/[a-z0-9]+/g);
// let longest = 0;
// for (let i =0; i < str.length; i++){
//   if (str[i].length > longest){
//     longest = str[i].length;
//   }
//   return str;

//Sort by Length
const sorted = str.sort((a,b)=> {
  return b.length - a.length;
});  

  // SOLUTION 2 - Return an array and include multiple words if they have the same length

const longest = sorted.filter((word)=>{
  return word.length === sorted[0].length;
});

  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  if(longest.length === 1){
    //Return the word
    return longest[0];
  } else {
    return longest;
  }

}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {

  // Solution 1
  // const chunkedArr = [];
  // let i = 0;

  // while(i < arr.length) {
  //   chunkedArr.push(arr.slice(i, i + len));
  //   i += len;
  // } 
  // return chunkedArr;

  // Solution 2

  const chunkedArr = [];

  arr.forEach((val)=>{
    const last = chunkedArr[chunkedArr.length -1];
    if(!last || last.length === len){
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}


// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    return arrays.reduce((acc, cur)=> acc.concat(cur));

    // Solution 2
    // return [].concat.apply([], arrays);

    // Solution 3
    // return [].concat(...arrays);
}



// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {

  function formatString(str){
    return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
  }

  return formatString(str1) === formatString(str2);

}



// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char)=>{
    if(char === 'z' || char === 'Z'){
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|0|u/gi, (vowel)=>{
    return vowel.toUpperCase();
  })

  return newStr;
}

console.log(letterChanges('hello there'));

// Call Function
// const output = longestWord('Hello, my name is Brad');

// console.log(output);