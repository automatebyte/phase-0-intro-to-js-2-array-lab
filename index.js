// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name) {
  cats.push(name);
}

function prependCat(name) {
  return [name, ...cats];
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function appendCat(name) {
  return [...cats, name];
}
function prependCat(name) {
  return [name, ...cats];
}
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
function removeFirstCat() {
  return cats.slice(1);
}
