var fs = require('fs');

/* Location lists */
var locationPrefixes = makeList("./lists/location-prefixes.txt");
var adjectives = makeList("./lists/adjectives.txt");
var locations = makeList("./lists/locations.txt");
var locationSuffixes = makeList("./lists/location-suffixes.txt");

/* Username lists */
var titles = makeList("./lists/titles.txt");
titles = titles.concat(adjectives);
var firstnames = makeList("./lists/firstnames.txt");
var lastnames = makeList("./lists/lastnames.txt");

function makeList(file) {
  return fs.readFileSync(file).toString().trim().split("\n");
}

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


module.exports = {
  location: generateLocation,
  username: generateUsername
}

function generateLocation() {
    return generateName(
    [
      { list: locationPrefixes, probability: 0.5 },
      { list: adjectives, probability: 1 },
      { list: locations, probability: 1 },
      { list: locationSuffixes, probability: 0.2 }
    ]
  )
}

function generateUsername() {
    return generateName(
      [
        { list: titles, probability: 1 },
        { list: adjectives, probability: 0.5 },
        { list: firstnames, probability: 1 },
        { list: lastnames, probability: 1 }
      ]
    );
}



/* For testing purposes only
Logs a sample group of names to the console
*/
var results = 10;
console.log("Locations:\n```");
for (var i = 0; i < results; i++) {
  var locationName = generateName(
    [
      { list: locationPrefixes, probability: 0.5 },
      { list: adjectives, probability: 1 },
      { list: locations, probability: 1 },
      { list: locationSuffixes, probability: 0.2 }
    ]
  );
  console.log(locationName);
}

console.log("```\nUsers:\n```");

for (var i = 0; i < results; i++) {
  var userName = generateName(
    [
      { list: titles, probability: 1 },
      { list: adjectives, probability: 0.5 },
      { list: firstnames, probability: 1 },
      { list: lastnames, probability: 1 }
    ]
  );
  console.log(userName);
}
console.log("```");
