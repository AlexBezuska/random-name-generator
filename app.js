var fs = require('fs');

var prefixes = makeList("./lists/prefixes.txt");
var descriptives = makeList("./lists/descriptives.txt");
var places = makeList("./lists/places.txt");
var suffixes = makeList("./lists/suffixes.txt");

var titles = makeList("./lists/titles.txt");
var firstname = makeList("./lists/firstnames.txt");
var lastname = makeList("./lists/lastnames.txt");


var random = {
  "inRange": function(min, max) {
    return min + Math.random() * (max - min);
  },
  "from": function(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
};

function generateName(parts) {
  var names = [];
  for (var i = 0; i < parts.length; i++) {
    names.push(random.from(parts[i]));
  }
  return names.join(" ");
}

function makeList(file) {
  return fs.readFileSync(file).toString().trim().split("\n");
}
var results = 30;

console.log("Room possibilities: ", prefixes.length * descriptives.length * places.length * suffixes.length);
for (var i = 0; i < results; i++){
  console.log(generateName([prefixes, descriptives, places, suffixes]));
}
console.log("User possibilities: ", titles.length * firstname.length * lastname.length);
for (var i = 0; i < results; i++){
  console.log(generateName([titles, firstname, lastname]));
}
