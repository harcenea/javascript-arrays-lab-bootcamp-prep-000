const app = "I don't do much." ;
var kittens = ["Milo", "Otis", "Garfield"];
var kitten = "Ralph";

function destructivelyAppendKitten(name) { var name = kitten; kittens.push(kitten);}

function destructivelyPrependKitten(name) { var name = kitten;
var kitten = "Bob"; kittens.unshift(name);}