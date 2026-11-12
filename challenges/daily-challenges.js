// WEEK 4 DAILY CHALLENGES — run and test these functions with your own examples.
// DAY 1: FizzBuzz
function fizzBuzz(limit){const output=[];for(let n=1;n<=limit;n++){if(n%3===0&&n%5===0)output.push("FizzBuzz");else if(n%3===0)output.push("Fizz");else if(n%5===0)output.push("Buzz");else output.push(n);}return output;}
console.log("Day 1:",fizzBuzz(15));

// DAY 2: Reverse a string
function reverseString(text){return text.split("").reverse().join("");}
console.log("Day 2:",reverseString("JavaScript"));

// DAY 3: Find the largest number in an array
function findLargest(numbers){if(numbers.length===0)return null;return Math.max(...numbers);}
console.log("Day 3:",findLargest([12,45,7,89,23]));

// DAY 4: Remove duplicates from an array
function removeDuplicates(items){return [...new Set(items)];}
console.log("Day 4:",removeDuplicates([1,2,2,3,4,4,5]));

// DAY 5: Palindrome checker (ignores spaces, punctuation, and letter case)
function isPalindrome(text){const clean=text.toLowerCase().replace(/[^a-z0-9]/g,"");return clean===clean.split("").reverse().join("");}
console.log("Day 5:",isPalindrome("Level"),isPalindrome("Hello"));