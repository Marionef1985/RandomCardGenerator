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
const simbolo = ["♥️", "♠️", "♦️", "♣️"];
const getRandomNumber = arrlength => Math.floor(Math.random() * arrlength);
const getRandomItem = arr => arr[getRandomNumber(arr.length)];

window["getCard"] = () => {
  //declararcarta inicial
  //const card = { symbol: null, value: null };
  //const randomNumber = getRandomItem(numero);
  //const randomSymbolUp = getRandomItem(simbolo);
  //const randomSymbolDown = randomSymbolUp;
  const numToShow = `${getRandomItem(numero)}`;
  const symbToShow = `${getRandomItem(simbolo)}`;
  document.querySelector("#number").innerHTML = numToShow;
  document.querySelector("#upSymbol").innerHTML = symbToShow;
  document.querySelector("#downSymbol").innerHTML = symbToShow;
};
