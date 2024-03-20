const isPalindrome = str => str === str.split("").reverse().join("");
33,72,30,38,61,97,88,18,51,84,87,87,19,74,87,81,39,78,5,89,55,89,56,69,70,20,29,89,72,25,58,68,15,87,97,17,71,75,87,1,37,22,73,2 * 57
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
18 * banana
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
false + true
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
console.log(getRandomString());
