import { removeLife, removeBet, removeCard, cardsReset, showBlocChooseBet, playerSelect, showCard, removeBlocChooseBet, showLife, showNextRoundBtn, showBet } from "./displayFunctions.js";
import { validationBtnReset, resetVariablesTrue, betValidation, randomPlayer, randomnumber } from "./tools.js";


const mainGame = () => {

    // Variables 

    // ----------Variables => form pseudo 
    const form = document.getElementById('form');
    const input1 = document.getElementById('pseudo');
    const input2 = document.getElementById('pseudo2');
    const p1NameDisplay = document.getElementById('j1');
    const p2NameDisplay = document.getElementById('j2');
    const bloc1 = document.getElementById('container1');
    const bloc1Form = document.getElementById('blocForm')

    // ----------Variables => page choix des mises 
    const arrowUp = document.getElementById('arrowUp');
    const arrowDown = document.getElementById('arrowDown');
    const input = document.getElementById('inputBet');

    // ----------Variable joeur actuelle 
    let actualPlayer = 0;

    // ----------Variable mises 
    let p1Bet = ''; // a reset 
    let p2Bet = ''; // a reset 

    // ----------Variables cartes 
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

    // ---------Variables selection carte aleatiore
    let cardSelected = "";
    let cardNumberCheck = ""; // a reset 
    let cardName = "";

    // ----------Variables vies 
    let j1Lifes = 3;
    let j2Lifes = 3;
    const heartSelection1 = "heartP1" + `${j1Lifes}`;
    const heartToDelete1 = document.getElementById(`${heartSelection1}`);
    const heartSelection2 = "heartP2" + `${j2Lifes}`;
    const heartToDelete2 = document.getElementById(`${heartSelection2}`);
    let playerStatut = true; // a reset 

    // Variable check mises 
    let betCheck = true; // a reset 

    // Events

    //--------Event formulaire pseudos 

    const startGame = (event) => {
        p1NameDisplay.innerHTML = `${input1.value}`;
        p2NameDisplay.innerHTML = `${input2.value}`;
        bloc1.removeChild(bloc1Form);
        showBlocChooseBet();
        actualPlayer = playerSelect(1);
        console.log(`actual player = P${actualPlayer}`);
        event.preventDefault();
    };

    form.addEventListener('submit', startGame);

    //--------Event boutons mises 

    arrowUp.addEventListener('click', () => {
        if (input.value < 5) {
            input.value++
            return
        }
    });

    arrowDown.addEventListener('click', () => {
        if (input.value > 1) {
            input.value--
            return
        }
    });

    // -------Event validation mise 
    const validateBtn = document.getElementById('validateBtn');

    validateBtn.addEventListener('click', () => {
        if (betValidation(actualPlayer) === 'j1') {
            p1Bet = input.value;
            actualPlayer = playerSelect(2);
            console.log(`actual player = P${actualPlayer}`);
            input.value = 1;
            return
        }
        p2Bet = input.value;
        console.log(`Mise P1 = ${p1Bet}`);
        console.log(`Mise P2 = ${p2Bet}`);
        // disparition interface mises 
        removeBlocChooseBet();
        // apparition interface jeu 
        showBet();
        showCard();
        document.getElementById('betj1').innerHTML = `${p1Bet}`;
        document.getElementById('betj2').innerHTML = `${p2Bet}`;
        showLife();
        actualPlayer = playerSelect(randomPlayer(1, 20));
        console.log(`actual player = P${actualPlayer}`);
        showNextRoundBtn();
        playerStatut = true;
    });

    // --------Tirage carte et Event cartes 

    // ----------------------------------------Algo tirage carte aleatoire
    const cardNumber = () => {
        let number = randomnumber(0, cardArray.length);
        cardSelected = cardArray[number];
        if (cardSelected.value) {
            cardSelected.value = false;
            cardNumberCheck++;
            cardName = cardSelected.name;
        } else if (cardNumberCheck < 10) {
            cardNumber();
        } else {
            cardName = false;
        }
    };

    const cardPick = () => {
        cardNumber();
        console.log(cardName);
        if (cardSelected.type === "bullet") {
            return true
        } else {
            return false
        };
    };

    // ----------------------------------------Modification des mises 
    const playerBetModif = () => {
        if (actualPlayer === 1) {
            p1Bet--;
            document.getElementById('betj1').innerHTML = `${p1Bet}`;
        } else {
            p2Bet--;
            document.getElementById('betj2').innerHTML = `${p2Bet}`;
        }
    };

    // ----------------------------------------Changement de joeurs 

    const numberBetCheck = () => {
        if (p1Bet < 1 || p2Bet < 1) {
            playerStatut = false;
            console.log(playerStatut);
        }
    };

    const nextPlayer = () => {
        console.log(`nextPlayerPreLog actualPlayer = ${actualPlayer}`);
        console.log(`nextPlayerPreLog playerStatut = ${playerStatut}`);
        if (playerStatut) {
            if (actualPlayer === 1) {
                document.getElementById('j1').classList.remove('playerSelect');
                document.getElementById('j2').classList.add('playerSelect');
                document.getElementById('betj1').classList.remove('playerSelect');
                document.getElementById('betj2').classList.add('playerSelect');
                actualPlayer = 2;
                console.log(`nextPlayer = ${actualPlayer}`);
            } else {
                document.getElementById('j2').classList.remove('playerSelect');
                document.getElementById('j1').classList.add('playerSelect');
                document.getElementById('betj2').classList.remove('playerSelect');
                document.getElementById('betj1').classList.add('playerSelect');
                actualPlayer = 1;
                console.log(`nextPlayer = ${actualPlayer}`);
            }
        } 
        numberBetCheck();
    };

    // ----------------------------------------Fin de round en cas de tirage balle 
    const endRound = () => {
        p1Bet = 0;
        p2Bet = 0;
        document.getElementById('btnNextRound').classList.add('btnNextRound');
        document.getElementById('btnNextRound').classList.remove('avoidClick');
        document.getElementById('cards').classList.add('avoidClick');
        if (actualPlayer === 1) {
            document.getElementById('heartP1').removeChild(heartToDelete1);
        } else {
            document.getElementById('heartP2').removeChild(heartToDelete2);

        };
    };

    // ---------------------------------------Fin de round mises = 0 

    const endRound2 = () => {
        if (p1Bet > 0 || p2Bet > 0) {
            return
        }
        p1Bet = 0;
        p2Bet = 0;
        document.getElementById('cards').classList.add('avoidClick');
        document.getElementById('btnNextRound').classList.add('btnNextRound');
        document.getElementById('btnNextRound').classList.remove('avoidClick');
    };

    // -------------------------------------- Event cartes 

    document.getElementById('cardWrapper1').addEventListener("click", () => {
        document.getElementById('cardWrapper1').classList.add('card-wrapper-anim', "avoidClick");
        document.getElementById('card1').classList.add('cardAnim');
        if (cardPick()) {
            document.getElementById('balle1').classList.remove('none');
            endRound();
        } else {
            nextPlayer();
            playerBetModif();
            endRound2();
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
            nextPlayer();
            playerBetModif();
            endRound2();
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
            nextPlayer();
            playerBetModif();
            endRound2();
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
            nextPlayer();
            playerBetModif();
            endRound2();
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
            nextPlayer();
            playerBetModif();
            endRound2();
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
            nextPlayer();
            playerBetModif();
            endRound2();
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
            nextPlayer();
            playerBetModif();
            endRound2();
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
            nextPlayer();
            playerBetModif();
            endRound2();
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
            nextPlayer();
            playerBetModif();
            endRound2();
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
            nextPlayer();
            playerBetModif();
            endRound2();
        };
    });


    //--------Event button next round 

    document.getElementById('btnNextRound').addEventListener('click', () => {
        console.log(p1Bet)
        console.log(p2Bet);
        // reset variable 'actual player' et 'firstPlayer'
        actualPlayer = 1;
        cardNumberCheck = "";
        // reset variable 'playerStatut' et 'bet check'
        resetVariablesTrue(playerStatut, betCheck);
        // Affichage => retrait des éléments de jeu 
        removeBet();
        removeCard();
        removeLife();
        cardsReset();
        // Affichage => apparition des éléments mises 
        showBlocChooseBet();
        // Affichage => Selection j1
        playerSelect(1);
        console.log(`actual player = P${actualPlayer}`);
    });

};

mainGame();
