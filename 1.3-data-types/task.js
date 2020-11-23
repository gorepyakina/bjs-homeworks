'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if(isNaN(percent)) {
        return `Параметр percent содержит неправильное значение ${percent}`;
    }
    if(isNaN(contribution)) {
        return `Параметр contribution содержит неправильное значение ${contribution}`;
    }
    if(isNaN(amount)) {
        return `Параметр amount содержит неправильное значение ${amount}`;
    }
        let percentOfMonth = (percent / 100) / 12;
        let bodyOfCredit = amount - contribution;
        let numberOfMonths = (date.getMonth() - new Date().getMonth()) + ((date.getFullYear() - new Date().getFullYear()) * 12);
        let monthlyPayment = (bodyOfCredit * (percentOfMonth + percentOfMonth / (((1 + percentOfMonth)**numberOfMonths) - 1)));
        let totalAmount = numberOfMonths * monthlyPayment;
    // return totalAmount;
    return +(totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (name === '' || name === undefined) {
        return `Привет, мир! Меня зовут Аноним.`;
    } else {
        return `Привет, мир! Меня зовут ${name}.`;
    }
    // return greeting;
}