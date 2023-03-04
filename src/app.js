/* eslint-disable */
import "bootstrap";
import "./style.css";

const numero = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const clubs = "♣️";
const spades = "♠️";
const heart = "♥️";
const diamond = "♦️";

const simbolo = [clubs, spades, heart, diamond];
//const simboloDeColor = setColor(simbolo);
//const simboloParaMostrar = setColor(simbolo);
const getRandomNumber = arrlength => Math.floor(Math.random() * arrlength);
const getRandomItem = arr => arr[getRandomNumber(arr.length)];

//function setColor(simbolo) {
//if (simbolo.val == heart) {
//return simbolo.css("color", "red");
//} else if (simbolo.val == diamond) {
//  return simbolo.css("color", "red");
//} else if (simbolo.val == clubs) {
//  return simbolo.css("color", "black");
//} else {
//  return simbolo.css("color", "black");
//}
//}

window["getCard"] = () => {
  //declararcarta inicial
  //const card = { symbol: null, value: null };
  //const randomNumber = getRandomItem(numero);
  //const randomSymbolUp = getRandomItem(simbolo);
  //const randomSymbolDown = randomSymbolUp;
  const numToShow = `${getRandomItem(numero)}`;
  const symbUpToShow = `${getRandomItem(simbolo)}`;
  const symbDownToShow = `${symbUpToShow}`;
  document.querySelector("#number").innerHTML = numToShow;
  document.querySelector("#upSymbol").innerHTML = symbToShow;
  document.querySelector("#downSymbol").innerHTML = symbToShow;
};
