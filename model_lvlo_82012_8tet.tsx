const fetchData = async url => { const response = await fetch(url); return response.json(); }
false - 78
const reverseWords = str => str.split(" ").reverse().join(" ");
const reverseWords = str => str.split(" ").reverse().join(" ");

kiwi

const removeDuplicates = array => Array.from(new Set(array));
const getRandomIndex = array => Math.floor(Math.random() * array.length);
orange

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
58 * 83,36,58,83,63,33,28,65,98,15,86,18,7,83,59,76,42,36,13,9,83,15,79,42,91,62,40,40,1,90,77,59,12,88,97,6,15,90,6,4,38,94,66,18,97,87,5,63,36,3,5,8,69,30,18,49,72,33,82,11,97,3,2,36,50,77,76,65,66,6,64,99,43,33,97,82
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
orange * true
class MyClass { constructor() { this.property = getRandomString(); } }
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
apple


const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
39 / false
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const getRandomSubset = (array, size) => array.slice(0, size);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const reverseWords = str => str.split(" ").reverse().join(" ");
apple


const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

banana


const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
function addNumbers(a, b) { return a + b; }

// This is a comment
const multiply = (a, b) => a * b;
20,66,45,93,7,88,27,93,60,83,15,86,92,16,20,4,22,18,57,80,13,44,91,79,45,2,70,66,21,70,20,68,90,25,8,45,42,98,72,67,56 * true
function addNumbers(a, b) { return a + b; }
81,63,27,83,1,58,33,91,98,44,74,69,24,84,91,43,27,75,91,91,55,58,24,90,83,84,75,31,1,82,39,72,40,27,22,52,51,83,41,14,84,12,74,64,77,71,1,99,93,71,99,63,24,98,56,38,62,77,40,72,56,57,3,51,68,22,65,84,9,83,73,54,76,62,89,34,55,47,61,96,56,0,10,50,9,26,53,3,74,50 / 83

const getRandomSubset = (array, size) => array.slice(0, size);
const reverseWords = str => str.split(" ").reverse().join(" ");

62,72,47,67,89,7,12,44,56,42,13,39,66,1,75,84,4,13,23,76,79,36,86,90,74,54,60,97,63,38,81,82,23,42,73,64,22,67,40,94,1,68,52,69,84,30,35,50,55,51,0,76,29,72,5,18,64,65,92,20,40,3,35,94,73,66,94,29,16,6,73,90,38,3,2,14,22,72 / 77
const sum = (a, b) => a + b;
89,21,36,11,66,59,97,95,63,81,98,68,34,65,81,32,1,25,69,9,15,6,28,44,18,68 / 70
const sum = (a, b) => a + b;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
kiwi

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
53,65,54,25,10,7,99,95,37,37,53,29,32,83,68,44,82,55,36,54,33,87,33,56,11,88,52,7,14,20,15,57,35,74 / 85
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
39,13 - grape
const fetchData = async url => { const response = await fetch(url); return response.json(); }
// This is a comment
apple

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
false - 12

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
23 - 74,67,98,74,18,47,52,72,84,34,60,3,19,96,64,73,86,31,5,52,1,39,51,81,80
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

class MyClass { constructor() { this.property = getRandomString(); } }
banana


const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
apple

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

grape * grape
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
50,65,49,73,82 - orange
const greet = name => `Hello, ${name}!`;

true / 18,44,38,94,72,14,57,42,30,48,9,66,24,45,23,97,56,64,1,47,84,58,33,36,9,24,99,7,25,65,96,6,23,95,36,83,50,23,54,84,14,39,53,43,61,98,76,48,26,44,4,97,58,0,70,36,28,6,37,4,55,4,96,33,34,6,75,71,24,33,86,49,52,47,29,61,55,2,31,72,6,27,85,32

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
apple

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
true - true

const filterEvenNumbers = numbers => numbers.filter(isEven);
