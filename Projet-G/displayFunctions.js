const removeLife = () => {
    document.getElementById('hearts').classList.add('none');
};

const removeCard = () => {
    document.getElementById('cards').classList.add('none');
};

const removeBet = () => {
    document.getElementById('showBet').classList.add('none');
    document.getElementById('betj1').innerHTML = ``;
    document.getElementById('betj2').innerHTML = ``;
};

const cardsReset = () => {
    document.getElementById('balle1').classList.add('none');
    document.getElementById('balle2').classList.add('none');
    document.getElementById('balle2').classList.add('none');
    document.getElementById('balle4').classList.add('none');
    document.getElementById('balle5').classList.add('none');
    document.getElementById('balle6').classList.add('none');
    document.getElementById('balle7').classList.add('none');
    document.getElementById('balle8').classList.add('none');
    document.getElementById('balle9').classList.add('none');
    document.getElementById('balle10').classList.add('none');

    document.getElementById('cards').classList.remove('avoidClick');
    document.getElementById('cardWrapper1').classList.remove('card-wrapper-anim', "avoidClick");
    document.getElementById('cardWrapper2').classList.remove('card-wrapper-anim', "avoidClick");
    document.getElementById('cardWrapper3').classList.remove('card-wrapper-anim', "avoidClick");
    document.getElementById('cardWrapper4').classList.remove('card-wrapper-anim', "avoidClick");
    document.getElementById('cardWrapper5').classList.remove('card-wrapper-anim', "avoidClick");
    document.getElementById('cardWrapper6').classList.remove('card-wrapper-anim', "avoidClick");
    document.getElementById('cardWrapper7').classList.remove('card-wrapper-anim', "avoidClick");
    document.getElementById('cardWrapper8').classList.remove('card-wrapper-anim', "avoidClick");
    document.getElementById('cardWrapper9').classList.remove('card-wrapper-anim', "avoidClick");
    document.getElementById('cardWrapper10').classList.remove('card-wrapper-anim', "avoidClick");

    document.getElementById('cards').classList.remove('avoidClick');
    document.getElementById('cardWrapper1').style.zIndex = "";
    document.getElementById('cardWrapper2').style.zIndex = "";
    document.getElementById('cardWrapper3').style.zIndex = "";
    document.getElementById('cardWrapper4').style.zIndex = "";
    document.getElementById('cardWrapper5').style.zIndex = "";
    document.getElementById('cardWrapper6').style.zIndex = "";
    document.getElementById('cardWrapper7').style.zIndex = "";
    document.getElementById('cardWrapper8').style.zIndex = "";
    document.getElementById('cardWrapper9').style.zIndex = "";
    document.getElementById('cardWrapper10').style.zIndex = "";

    document.getElementById('card1').classList.remove('cardAnim');
    document.getElementById('card2').classList.remove('cardAnim');
    document.getElementById('card3').classList.remove('cardAnim');
    document.getElementById('card4').classList.remove('cardAnim');
    document.getElementById('card5').classList.remove('cardAnim');
    document.getElementById('card6').classList.remove('cardAnim');
    document.getElementById('card7').classList.remove('cardAnim');
    document.getElementById('card8').classList.remove('cardAnim');
    document.getElementById('card9').classList.remove('cardAnim');
    document.getElementById('card10').classList.remove('cardAnim');

  
};

const showBlocChooseBet = () => {
    document.getElementById('blocBet').classList.remove('none');
};

const playerSelect = (player) => {
    if (player === 1) {
        document.getElementById('j2').classList.remove('playerSelect');
        document.getElementById('j1').classList.add('playerSelect');
        document.getElementById('betj2').classList.remove('playerSelect');
        document.getElementById('betj1').classList.add('playerSelect');
        return 1
    }
    document.getElementById('j1').classList.remove('playerSelect');
    document.getElementById('j2').classList.add('playerSelect');
    document.getElementById('betj1').classList.remove('playerSelect');
    document.getElementById('betj2').classList.add('playerSelect');
    return 2
};

const removeBlocChooseBet = () => {
    document.getElementById('blocBet').classList.add('none');
};

const showCard = () => {
    document.getElementById('cards').classList.remove('none');
};

const showLife = () => {
    document.getElementById('hearts').classList.remove('none');
}

const showNextRoundBtn = () => {
    document.getElementById('nextRoundBtn').classList.remove('none');
};

const showBet = () => {
    document.getElementById('showBet').classList.remove('none');
};

const showPopup = () => {
    document.getElementById('popup').classList.remove('none');
};

const removePopup = () => { 
    document.getElementById('popup').classList.add('none');
};

export { removeLife, removeBet, removeCard, cardsReset, showBlocChooseBet, playerSelect, showCard, removeBlocChooseBet, showLife, showNextRoundBtn, showBet, showPopup, removePopup };
