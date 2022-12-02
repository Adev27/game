
//formulaire 1 

let submit = (event) => {
  j1.innerHTML = `${pseudo.value}`;
  pseudo1Check = true;
  j2.innerHTML = `${pseudo2.value}`;
  pseudo2Check = true;
  event.preventDefault();
  document.getElementById('j1').classList.add('player1Select');
  document.getElementById('j2').classList.add('player2Select');
};

const form = document.getElementById('form');
let j1 = document.getElementById('j1');
let pseudo = document.getElementById('pseudo');
let joueur1 = pseudo.value
let j2 = document.getElementById('j2');
let pseudo2 = document.getElementById('pseudo2');
let joueur2 = pseudo2.value

form.addEventListener('submit', submit);


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
  document.getElementById('j2').classList.remove('player2Select');
  document.getElementById('betTitle').classList.add('chooseYourBet1');
  document.getElementById('j1').classList.add('player1Select');

};


let gameMain = () => {

  //aparition vies 

  let showLife = () => {
    document.getElementById('hearts').classList.remove('none');
  }

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
    document.getElementById('nextRoundBtn').classList.remove('none');
    showBet();
    randomPlayer();
    showCard();
    showLife();

  }


  document.getElementById('validateBtn').addEventListener('click', (validationBet));
  document.getElementById('validateBtn2').addEventListener('click', (validationBet2));



  // jeu


  let showBet = () => {
    document.getElementById('showBet').classList.remove('none');
    document.getElementById('betj1').innerHTML = `${j1Bet}`;
    document.getElementById('betj2').innerHTML = `${j2Bet}`;
  };

  let showCard = () => {
    document.getElementById('cards').classList.remove('none');
  }


  //calcul joueur aléatoire

  let firstPlayer = "";

  let randomPlayer = () => {
    randomnumber(1, 20);
    if (number < 10) {
      document.getElementById('j1').classList.add('player1Select')
      firstPlayer = 'j1';
    } else if (number > 10) {
      document.getElementById('j2').classList.add('player2Select')
      firstPlayer = 'j2';
    } else {
      randomPlayer();
    }
  };

  let number = "";
  let randomnumber = (min, max) => {
    // console.log("nombre aléatoire :");
    number = Math.floor(Math.random() * (max - min) + min);
  };

  //calcul tirage de carte 

  let cardArray = [];
  class cards {
    constructor(name, value, type) {
      this.name = name;
      this.value = value;
      this.type = type;
    }
  }

  let card1 = new cards("card1", true, "alive");
  let card2 = new cards("card2", true, "alive");
  let card3 = new cards("card3", true, "alive");
  let card4 = new cards("card4", true, "alive");
  let card5 = new cards("card5", true, "alive");
  let card6 = new cards("card6", true, "alive");
  let card7 = new cards("card7", true, "alive");
  let card8 = new cards("card8", true, "alive");
  let card9 = new cards("card9", true, "alive");
  let card10 = new cards("card10", true, "bullet");

  cardArray.push(card1, card2, card3, card4, card5, card6, card7, card8, card9, card10);
  console.log(cardArray);

  let cardSelected = "";
  let cardNumberCheck = "";
  let cardName = "";

  let cardNumber = () => {
    randomnumber(0, cardArray.length);
    // console.log(number);
    cardSelected = cardArray[number];

    if (cardSelected.value) {
      // console.log("carte valide")
      cardSelected.value = false;
      cardNumberCheck++;
      cardName = cardSelected.name;
      // console.log(`nombre boucle = ${cardNumberCheck}`);
    } else if (cardNumberCheck < 10) {
      // console.log("carte invalide");
      cardNumber();
    } else {
      cardName = false;
    }
  };

  let j1Lifes = 3;
  let j2Lifes = 3;
  let bullet = document.getElementsByClassName("balle");
  let actualPlayer = "";
  let bulletCheck = false;


  // tirage de cartes 

  let cardPick = () => {
    cardNumber();
    console.log(cardName);
    if (cardSelected.type === "bullet") {
      return true
    } else {
      return false
    };
  };

  // modification mises après tirage 

  let playerBetModif = () => {
    if (firstPlayer === "j1" || actualPlayer === "j1") {
      actualPlayer = "j1";
      firstPlayer = "";
      j1Bet--;
      document.getElementById('betj1').innerHTML = `${j1Bet}`;
    } else {
      actualPlayer = "j2";
      j2Bet--;
      document.getElementById('betj2').innerHTML = `${j2Bet}`;
    }
  }

  //changement de joueurs 

  let playerStatut = true;

  let numberBetCheck = () => {
    if (j1Bet < 1 || j2Bet < 1) {
      playerStatut = false;
    }
  };

  let nextPlayer = () => {
    if (playerStatut) {
      if (actualPlayer === "j1") {
        document.getElementById('j1').classList.remove('player1Select');
        document.getElementById('j2').classList.add('player2Select');
        actualPlayer = "j2"
      } else {
        document.getElementById('j2').classList.remove('player2Select');
        document.getElementById('j1').classList.add('player1Select');
        actualPlayer = "j1"
      }
    } else {
      console.log('bienjoué');
    }
    numberBetCheck();
  };


  // fin du round 

  const heartSelection1 = "heartP1" + `${j1Lifes}`;
  const heartToDelete1 = document.getElementById(`${heartSelection1}`);

  const heartSelection2 = "heartP2" + `${j2Lifes}`;
  const heartToDelete2 = document.getElementById(`${heartSelection2}`);

  let endRound = () => {
    document.getElementById('cards').classList.add('avoidClick');
    document.getElementById('nextRoundBtn').classList.remove('avoidClick');
    document.getElementById('btnNextRound').classList.add('btnNextRound');
    if (actualPlayer === "j1") {
      document.getElementById('heartP1').removeChild(heartToDelete1);
    } else {
      document.getElementById('heartP2').removeChild(heartToDelete2);
    };
  };

  let endRound2 = () => {

    if (j1Bet > 0 || j2Bet > 0) {
    } else {
      alert("terminé")
    }
  };




  // events click sur les cartes 

  document.getElementById('cardWrapper1').addEventListener("click", () => {
    document.getElementById('cardWrapper1').classList.add('card-wrapper-anim', "avoidClick");
    document.getElementById('card1').classList.add('cardAnim');
    if (cardPick()) {
      document.getElementById('balle1').classList.remove('none');
      endRound();
    } else {
      playerBetModif();
      setTimeout(endRound2, 2000);
      nextPlayer();
    };

  });

  document.getElementById('cardWrapper2').addEventListener("click", () => {
    document.getElementById('cardWrapper2').classList.add('card-wrapper-anim', "avoidClick");
    document.getElementById('card2').classList.add('cardAnim');
    document.getElementById('cardWrapper2').style.zIndex = "10";
    if (cardPick()) {
      document.getElementById('balle2').classList.remove('none');
      endRound();
    } else {
      playerBetModif();
      setTimeout(endRound2, 2000);
      nextPlayer();
    };

  });

  document.getElementById('cardWrapper3').addEventListener("click", () => {
    document.getElementById('cardWrapper3').classList.add('card-wrapper-anim', "avoidClick");
    document.getElementById('card3').classList.add('cardAnim');
    document.getElementById('cardWrapper3').style.zIndex = "10";
    if (cardPick()) {
      document.getElementById('balle3').classList.remove('none');
      endRound();
    } else {
      playerBetModif();
      setTimeout(endRound2, 2000);
      nextPlayer();
    };
  });

  document.getElementById('cardWrapper4').addEventListener("click", () => {
    document.getElementById('cardWrapper4').classList.add('card-wrapper-anim', "avoidClick");
    document.getElementById('card4').classList.add('cardAnim');
    document.getElementById('cardWrapper4').style.zIndex = "10";
    if (cardPick()) {
      document.getElementById('balle4').classList.remove('none');
      endRound();
    } else {
      playerBetModif();
      setTimeout(endRound2, 2000);
      nextPlayer();
    };
  });

  document.getElementById('cardWrapper5').addEventListener("click", () => {
    document.getElementById('cardWrapper5').classList.add('card-wrapper-anim', "avoidClick");
    document.getElementById('card5').classList.add('cardAnim');
    document.getElementById('cardWrapper5').style.zIndex = "10";
    if (cardPick()) {
      document.getElementById('balle5').classList.remove('none');
      endRound();
    } else {
      playerBetModif();
      setTimeout(endRound2, 2000);
      nextPlayer();
    };
  });

  document.getElementById('cardWrapper6').addEventListener("click", () => {
    document.getElementById('cardWrapper6').classList.add('card-wrapper-anim', "avoidClick");
    document.getElementById('card6').classList.add('cardAnim');
    document.getElementById('cardWrapper6').style.zIndex = "10";
    if (cardPick()) {
      document.getElementById('balle6').classList.remove('none');
      endRound();
    } else {
      playerBetModif();
      setTimeout(endRound2, 2000);
      nextPlayer();
    };
  });

  document.getElementById('cardWrapper7').addEventListener("click", () => {
    document.getElementById('cardWrapper7').classList.add('card-wrapper-anim', "avoidClick");
    document.getElementById('card7').classList.add('cardAnim');
    document.getElementById('cardWrapper7').style.zIndex = "10";
    if (cardPick()) {
      document.getElementById('balle7').classList.remove('none');
      endRound();
    } else {
      playerBetModif();
      setTimeout(endRound2, 2000);
      nextPlayer();
    };
  });

  document.getElementById('cardWrapper8').addEventListener("click", () => {
    document.getElementById('cardWrapper8').classList.add('card-wrapper-anim', "avoidClick");
    document.getElementById('card8').classList.add('cardAnim');
    document.getElementById('cardWrapper8').style.zIndex = "10";
    if (cardPick()) {
      document.getElementById('balle8').classList.remove('none');
      endRound();
    } else {
      playerBetModif();
      setTimeout(endRound2, 2000);
      nextPlayer();
    };
  });

  document.getElementById('cardWrapper9').addEventListener("click", () => {
    document.getElementById('cardWrapper9').classList.add('card-wrapper-anim', "avoidClick");
    document.getElementById('card9').classList.add('cardAnim');
    document.getElementById('cardWrapper9').style.zIndex = "10";
    if (cardPick()) {
      document.getElementById('balle9').classList.remove('none');
      endRound();
    } else {
      playerBetModif();
      setTimeout(endRound2, 2000);
      nextPlayer();
    };
  });

  document.getElementById('cardWrapper10').addEventListener("click", () => {
    document.getElementById('cardWrapper10').classList.add('card-wrapper-anim', "avoidClick");
    document.getElementById('card10').classList.add('cardAnim');
    document.getElementById('cardWrapper10').style.zIndex = "10";
    if (cardPick()) {
      document.getElementById('balle10').classList.remove('none');
      endRound();
    } else {
      playerBetModif();
      setTimeout(endRound2, 2000);
      nextPlayer();
    };
  });
};

gameMain();

