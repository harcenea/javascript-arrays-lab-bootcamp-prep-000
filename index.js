const app = "I don't do much." ;
var kittens = ["Milo", "Otis", "Garfield"];
var kitten = "Ralph";

function destructivelyAppendKitten(kitten) { var name = kitten; kittens.push(kitten);}

function destructivelyPrependKitten(kitten) { var name = kitten;
var kitten = "Bob"; kittens.unshift(kitten);}

function destructivelyRemoveLastKitten(kitten)
{kittens.pop();}

function destructivelyRemoveFirstKitten(kitten)
{kittens.shift();}

function appendKitten(kitten)
{
kitten = "Broom"; 
var appKittArr = [kittens.push("Broom")];
  return appKittArr;}


