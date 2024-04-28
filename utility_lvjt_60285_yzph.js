const getUniqueValues = array => [...new Set(array)];
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
kiwi

const multiply = (a, b) => a * b;
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
