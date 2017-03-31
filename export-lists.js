var fs = require('fs');

function makeList(file) {
  return fs.readFileSync(file).toString().trim().split("\n");
}

var json = {};
json.locationPrefixes = makeList("./lists/location-prefixes.txt");
json.adjectives = makeList("./lists/adjectives.txt");
json.locations = makeList("./lists/locations.txt");
json.locationSuffixes = makeList("./lists/location-suffixes.txt");
json.prefixes = makeList("./lists/prefixes.txt").concat(json.adjectives);
json.firstnames = makeList("./lists/firstnames.txt");
json.nicknames = makeList("./lists/nicknames.txt");
json.lastnames = makeList("./lists/lastnames.txt");
json.suffixes = makeList("./lists/suffixes.txt");

fs.writeFileSync("word-lists.json", JSON.stringify(json, undefined, 2));

