var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec",
  "batch",
  "Cinderalla Book",
  "Dr. Fred Mbogo",
  "eat flaming death",
  "fandango on core",
  "Foonly",
  "goat file",
  "Halloween Documents",
  "I see no X here",
  "Imminent Death Of The Net Predicted!",
  "jibble",
  "kilogoogle",
  "larval stage",
  "maximum Maytag mode",
  "nybble",
  "octal forty",
  "pico-",
  "quantum bogodynamics",
  "rubber-hose cryptanalysis",
  "sigmonster",
  "tail recursion",
  "unswizzle",
  "VAXen",
  "webmaster",
  "XEROX PARC",
  "yak shaving",
  "Zero-One-Infinity Rule"
];

// Sort the people by 'uid'

console.table(
  _.sortBy(people, 'uid')
);

// Group the random words by the lower case version of their first letter

console.log(
  _.groupBy(words, function(word){
    var letter = word.toLowerCase
    return letter[0]
  })
);

// Check to see if all the words have more than 3 characters

console.log(
  _.every(words, function(word) {
    if (word.lenght > 3) {
      return true
    }
  })
);

// Check if some words are over twenty characters long

console.log(
  _.some(words, function(word) {
    if (word.lenght > 20) {
      return true
    }
  })
);

// Get an array of all of the uids in people

console.log(
  _.map(people, function(person) {
    return person.uid;
  })
);

// Find the person with the highest uid

console.log(
  _.max(people, function(person) {
    return person.uid;
  })
);

// Return an object that says how many even numbers and how many odd numbers there are in numbers

console.log(
  _.countBy(numbers, function(number) {
    return number % 2 == 0 ? 'even': 'odd';
  })
);

// Get three random numbers out of numbers
console.log(
  _.sample(numbers, 3)
);
