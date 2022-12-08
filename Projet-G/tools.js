const betValidation = (player) => {
    if (player === 1) {
        return 'j1'
    }
    return 'j2'
};

const validationBtnReset = () => {
    document.getElementById('validateBtn').classList.remove('none');
    document.getElementById('validateBtn2').classList.add('none');
};

const resetVariablesTrue = (var1, var2) => {
    var1 = true;
    var2 = true;
    console.log(`var1=` + var1);
    console.log(`var2=` + var2);
};

const randomPlayer = (min, max) => {
    // console.log("nombre aléatoire :");
    if (Math.floor(Math.random() * (max - min) + min) < 10) {
        return 1
    }
    return 2
};

const randomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

export { validationBtnReset, resetVariablesTrue, betValidation, randomPlayer, randomnumber };