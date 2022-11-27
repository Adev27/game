
//formulaire 1 

let submit = (event) => {
  j1.innerHTML = `${pseudo.value}`;
  pseudo1Check = true;
  j2.innerHTML = `${pseudo2.value}`;
  pseudo2Check = true;
  event.preventDefault();
};

const form = document.getElementById('form');
let j1 = document.getElementById('j1');
let pseudo = document.getElementById('pseudo');
let joueur1 = pseudo.value
let j2 = document.getElementById('j2');
let pseudo2 = document.getElementById('pseudo2');
let joueur2 = pseudo2.value

form.addEventListener('submit', submit);



// //formulaire 2 


// // let submit2 = (event) => {
// //   j2.innerHTML = `${pseudo2.value}`;
// //   pseudo2Check = true;
// //   event.preventDefault();
// // };

// const form2 = document.getElementById('form2');
// // let j2 = document.getElementById('j2');
// // let pseudo2 = document.getElementById('pseudo2');
// // let joueur2 = pseudo2.value

// form2.addEventListener('submit', submit2);



// bouton start 
let pseudo1Check = false;
let pseudo2Check = false;
let bloc1 = document.getElementById('container1');
let bloc1Form = document.getElementById('blocForm')
let startBtn = document.getElementById('start');

let start = () => {
  if (pseudo1Check === false || pseudo2Check === false) {
    alert(`please, enter a "pseudo"`)
    pseudo.style.border = '5px solid red';;
    pseudo2.style.border = '5px solid red';
  } else {
    bloc1.removeChild(bloc1Form)
    showNumbers();
    playerNumber();
  }
};

startBtn.addEventListener('click', start);

//Apparition numéros mises 

let showNumbers = () => {
  document.getElementById('blocBet').classList.remove('none');
};

let playerNumber = () => {
  document.getElementById('betTitle').classList.add('chooseYourBet1');
  document.getElementById('j1').classList.add('player1Select');
};

//selection de la mise 

let j1Bet = 0;
let j2Bet = 0;
let betCheck = true;

let BetSelect1 = () => {
  document.getElementById('number1').classList.add('numberSelect');
  document.getElementById('number2').classList.remove('numberSelect');
  document.getElementById('number3').classList.remove('numberSelect');
  document.getElementById('number4').classList.remove('numberSelect');
  document.getElementById('number5').classList.remove('numberSelect');
  if (betCheck) {
    j1Bet = 1;
  } else {
    j2Bet = 1;
    betCheck = true;
  }
};

let BetSelect2 = () => {
  document.getElementById('number2').classList.add('numberSelect');
  document.getElementById('number1').classList.remove('numberSelect');
  document.getElementById('number3').classList.remove('numberSelect');
  document.getElementById('number4').classList.remove('numberSelect');
  document.getElementById('number5').classList.remove('numberSelect');
  if (betCheck) {
    j1Bet = 2;
  } else {
    j2Bet = 2;
    betCheck = true;
  }
};

let BetSelect3 = () => {
  document.getElementById('number3').classList.add('numberSelect');
  document.getElementById('number2').classList.remove('numberSelect');
  document.getElementById('number1').classList.remove('numberSelect');
  document.getElementById('number4').classList.remove('numberSelect');
  document.getElementById('number5').classList.remove('numberSelect');
  if (betCheck) {
    j1Bet = 3;
  } else {
    j2Bet = 3;
    betCheck = true;
  }
};

let BetSelect4 = () => {
  document.getElementById('number4').classList.add('numberSelect');
  document.getElementById('number2').classList.remove('numberSelect');
  document.getElementById('number1').classList.remove('numberSelect');
  document.getElementById('number3').classList.remove('numberSelect');
  document.getElementById('number5').classList.remove('numberSelect');
  if (betCheck) {
    j1Bet = 4;
  } else {
    j2Bet = 4;
    betCheck = true;
  }
};

let BetSelect5 = () => {
  document.getElementById('number5').classList.add('numberSelect');
  document.getElementById('number2').classList.remove('numberSelect');
  document.getElementById('number1').classList.remove('numberSelect');
  document.getElementById('number4').classList.remove('numberSelect');
  document.getElementById('number3').classList.remove('numberSelect');
  if (betCheck) {
    j1Bet = 5;
  } else {
    j2Bet = 5;
    betCheck = true;
  }
};

document.getElementById('number1').addEventListener('click', (BetSelect1));
document.getElementById('number2').addEventListener('click', (BetSelect2));
document.getElementById('number3').addEventListener('click', (BetSelect3));
document.getElementById('number4').addEventListener('click', (BetSelect4));
document.getElementById('number5').addEventListener('click', (BetSelect5));


//validation mise 


let validationBet = () => {
  document.getElementById('number1').classList.remove('numberSelect');
  document.getElementById('number2').classList.remove('numberSelect');
  document.getElementById('number3').classList.remove('numberSelect');
  document.getElementById('number4').classList.remove('numberSelect');
  document.getElementById('number5').classList.remove('numberSelect');
  document.getElementById('betTitle').classList.replace('chooseYourBet1', 'chooseYourBet2')
  document.getElementById('j1').classList.remove('player1Select');
  document.getElementById('j2').classList.add('player2Select');
  betCheck = false;
  document.getElementById('validateBtn').classList.add('none');
  document.getElementById('validateBtn2').classList.remove('none');
};

let validationBet2 = () => {
  document.getElementById('blocBet').classList.add('none');
  document.getElementById('j2').classList.remove('player2Select');
  showBet();
  randomPlayer();

}


document.getElementById('validateBtn').addEventListener('click', (validationBet));
document.getElementById('validateBtn2').addEventListener('click', (validationBet2));



// jeu


let showBet = () => {
  document.getElementById('showBet').classList.remove('none');
  document.getElementById('betj1').innerHTML = `${j1Bet}`;
  document.getElementById('betj2').innerHTML = `${j2Bet}`;
};


//calcul joueur aléatoire

let randomPlayer = () => {
  randomnumber(1, 20);
  if (number < 10) {
    document.getElementById('j1').classList.add('player1Select')
  } else if (number > 10) {
    document.getElementById('j2').classList.add('player2Select')
  }else{
    randomPlayer();
  }
};

let number = "";
let randomnumber = (min, max) => {
  console.log("nombre aléatoire :");
  number = Math.floor(Math.random() * (max - min) + min);
};

//jeu 

let cardArray =[];
class cards {
  constructor(name,value) {
    this.name = name;
    this.value = value; 
  }
}

let card1 = new cards ("card1", true);
let card2 = new cards ("card2", true);
let card3 = new cards ("card3", false);
let card4 = new cards ("card4", true);
let card5 = new cards ("card5", true);
let card6 = new cards ("card6", true);
let card7 = new cards ("card7", true);
let card8 = new cards ("card8", true);
let card9 = new cards ("card9", true);
let card10 = new cards ("card10", true);

cardArray.push(card1,card2,card3,card4,card5,card6,card7,card8,card9,card10);
console.log(cardArray);

let cardPick =() => {
  randomnumber(0,9);
  console.log(number);
}
