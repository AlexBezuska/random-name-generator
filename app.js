var fs = require('fs');

var prefixes = makeList("./lists/prefixes.txt");
var descriptives = makeList("./lists/descriptives.txt");
var places = makeList("./lists/places.txt");
var suffixes = makeList("./lists/suffixes.txt");

var titles = makeList("./lists/titles.txt");
var firstnames = makeList("./lists/firstnames.txt");
var lastnames = makeList("./lists/lastnames.txt");


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
    if (parts[i].probability) {
      if (random.inRange(0, 1) < parts[i].probability) {
        names.push(random.from(parts[i].list));
      }
    } else {
      names.push(random.from(parts[i].list));
    }
  }
  return names.join(" ");
}

function makeList(file) {
  return fs.readFileSync(file).toString().trim().split("\n");
}
var results = 30;

console.log("Room possibilities: ", prefixes.length * descriptives.length * places.length * suffixes.length);
for (var i = 0; i < results; i++){
  var name = generateName(
    [
      { list: prefixes, probability: 0.5 },
      { list: descriptives, probability: 1 },
      { list: places, probability: 1 },
      { list: suffixes, probability: 0.2}
    ]
  );
  console.log(name);

}
console.log("User possibilities: ", titles.length * firstnames.length * lastnames.length);
for (var i = 0; i < results; i++){
  var name = generateName(
    [
      { list: titles, probability: 1 },
      { list: firstnames, probability: 1 },
      { list: lastnames, probability: 1 }
    ]
  );
  console.log(name);
}
