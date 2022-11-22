const cats = ["Milo", "Otis", "Garfield"];

// Write your solution here!

// This function should append a cat to the end of the array, destructively.
function destructivelyAppendCat(name) {
    cats.push(name);
  }
destructivelyAppendCat("Timi");

console.log(cats);
// this function should prepend a cat to the beginning of the cats array, destructively.
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat("Meow");
console.log(cats);

// this function should remove the last cat from the cats array, destructively.
function destructivelyRemoveLastCat() {
    cats.pop();
}

destructivelyRemoveLastCat();

console.log(cats);

// this function should remove the first cat from the cats array, destructively.
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// this function should append a cat to the cats array and return a new array, leaving the cats array unchanged
function appendCat(name) {
    return [...cats, name];
}

// this function should prepend a cat to the cats array and return a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, ...cats];
}

// this function should remove the last cat in the cats array and return a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(-1);
}

// this function should remove the first cat from the cats array and return a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(0,1);
}

console.log(cats);