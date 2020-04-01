/*
! The map() Method
*/
var numbers = [1, 2, 3, 4];
let squared = numbers.map(number => number * number);
console.log(squared);

var numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled);

cities = [
  {
    Rank: 1,
    City: 'San Antonio ',
    State: 'Texas',
    Increase_from_2016: '24208',
    population: '1511946'
  },
  {
    Rank: 2,
    City: 'Phoenix ',
    State: 'Arizona',
    Increase_from_2016: '24036',
    population: '1626078'
  },
  {
    Rank: 3,
    City: 'Dallas',
    State: 'Texas',
    Increase_from_2016: '18935',
    population: '1341075'
  }
];

cityNames = cities.map(function(city) {
  return city.City;
});
console.log(cityNames);

cityPop = cities.map(function(population) {
  return population.population;
});
console.log(cityPop);

/* 
! Codes in lines 40 and 47 return the same array. Line 40 uses function/return,
! whereas line 47 uses the fat arrow.
*/

cityPop = cities.map(population => population.population);
console.log(cityPop);

var numbers = [0, 2, 4, 6, 8];
let sum = numbers.map(function(add) {
  return add + 5;
});
console.log(sum);

/*
! The filter() Method
*/

var numbers = [1, 2, 3, 4, 5];
let larger = numbers.filter(function(num) {
  return num > 1;
});
console.log(larger);

let bigger = numbers.filter(num => num > 1);
console.log(bigger);

var familyAge = [2, 3, 39, 37, 9];
var olderThanFive = familyAge.filter(function(age) {
  return age > 5;
});
console.log(olderThanFive);

/* 
! Identify animals that start with the letter "S"
*/
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
animalsWithS = words.filter(function(S) {
  return S.startsWith('s');
});
console.log(animalsWithS);
/*
! Option 2 using indexing...
*/
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var animalsWithS = words.filter(function(word) {
  return word[0] == 's';
});
console.log(animalsWithS);

/*
! The fat arrow =>
*/
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
newAnimals = words.filter(word => word.startsWith('s'));
console.log(newAnimals);
/*
! Option 2 using the fat arrow and indexing...
*/
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
newAnimals = words.filter(word => word[0] == 's');
console.log(newAnimals);

/*
! The sort() and reverse() Methods
* Using the .sort() method sorts elements in ascending order
*/

var familyAge = [3, 2, 39, 37, 9];
sortedAge = familyAge.sort((a, b) => a - b);
console.log(sortedAge);

var familyAge = [3, 2, 39, 37, 9];
sortedAge = familyAge.sort((anElement, nextElement) => anElement - nextElement);
console.log(sortedAge);

/*
 * Using the .reverse() method sorts elements in descending order
 */
var familyAge = [3, 2, 39, 37, 9];
sortedAge = familyAge.reverse((a, b) => a - b);
console.log(sortedAge);

var familyAge = [3, 2, 39, 37, 9];
sortedAge = familyAge.reverse(
  (anElement, nextElement) => anElement - nextElement
);
console.log(sortedAge);

/*
! The slice() Method
*/
var integers = [0, 1, 2, 3, 4, 5];
slice1 = integers.slice(0, 2);
console.log(slice1);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
sliceWords = words.slice(0, 3);
console.log(sliceWords);

/*
 * To slice to the end of an array, you can omit the second argument (3, 0):
 */

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3);
