import "bootstrap";
import "./style.css";

const number = [
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
  "K",
];

//const clubs = "♣️";
//const spades = "♠️";
//const heart = "♥️";
//const diamond = "♦️";

const symbolArray = ["♥️", "♦️", "♣️", "♠️"];

const getRandomNumber = (arrlength) => Math.floor(Math.random() * arrlength);
const getRandomItem = (arr) => arr[getRandomNumber(arr.length)];

window["getSymbolColor"] = () => {
    const numToShow = `${getRandomItem(number)}`;
    const symbToShow = `${getRandomItem(symbolArray)}`;
    let symbolToShowWithColorTest = () => {
        return((symbToShow == "♥️" || "♦️") ? "red" : "black")
        }
    document.getElementById("#upSymbol").style.color = symbolToShowWithColorTest(symbToShow);
    document.querySelector("#number").innerHTML = numToShow;
    document.getElementById("#downSymbol").style.color = symbolToShowWithColorTest(symbToShow);
}

//window["getCardColor"] = () => {
  //const numToShow = `${getRandomItem(number)}`;
  //const symbToShow = `${getRandomItem(symbolArray)}`;
 
//  document.querySelector("#number").innerHTML = numToShow;
  //document.getElementById("#upSymbol").style.color = symbolToShowWithColorTest;
  
//};
