const words = ["peach", "apple", "grape", "apricot", "kiwi", "orange", "banana", "ananas"];


const aWords = words.filter(word => word.startsWith('a'));
console.log("Words starting with 'a':", aWords);


const sortedWords = words.sort();
console.log("Sorted words:", sortedWords);


const longestWord = words.reduce((longest, word) => (word.length > longest.length ? word : longest), '');
console.log("Longest word:", longestWord);


const totalLength = words.reduce((total, word) => total + word.length, 0);
console.log("Total length of all words:", totalLength);


const newWord = prompt('Введите новое слово:');
if (newWord) {
    words.push(newWord);
}
console.log(newWord);

let num1 = [6, 18, 23, 3, 2, [22, 59]];
let num2 = [101, 4, 59, 89, 0, 7, 31, 12];
let mergedArray = [...num1, ...num2];
console.log("Merged Array:", mergedArray);


let sumOfNumbers = mergedArray.reduce((sum, num) => sum + num, 0);
console.log("Sum of numbers:", sumOfNumbers)
let numbers = [42, 'Alex', 'John', 18, 23, 100, 1];
let names = ['Tyler', 'Stark', 'Jake', 'Igor'];

let removedNames = numbers.filter(item => typeof item !== 'string');
console.log("Removed names from numbers:", removedNames);

names.push(...removedNames);
console.log("Names array after adding removed names:", names);

if (!names.includes('Constantin')) {
    names.push('Constantin');
}
console.log("Updated names array:", names);
