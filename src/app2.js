const listaDeNumeros = [
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
  const listaDeSimbolos = ["♥️", "♠️", "♦️", "♣️"];
  
  
  const getRandomNumber = arrlength => Math.floor(Math.random() * arrlength);
  const getRandomItem = arr => arr[getRandomNumber(arr.length)];
  const randomNumber = getRandomItem(listaDeNumeros);
  const randomSymbol = getRandomItem(listaDeSimbolos);
  const card = { symbol: null, value: null }
  
 const showCard2  = (card) => {
  const getCardState = (card, randomSymbol, randomNumber) => {
    card.symbol = randomSymbol;
    card.value = randomNumber;
  };
    document.querySelector("#number").innerHTML = getCardState(card.value);
    document.querySelector("#upSymbol").innerHTML = getCardState(card.symbol);
    document.querySelector("#downSymbol").innerHTML = getCardState(card.symbol);
  };
 