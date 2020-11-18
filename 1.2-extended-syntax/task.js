"use strict"
function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let D = b**2 - 4 * a * c;
    let resultHere = [];

    if (D === 0)
        resultHere = [((- b + Math.sqrt(D)) / 2 * a)];
    else if (D > 0) 
        resultHere = [((- b + Math.sqrt(D)) / 2 * a), ((- b - Math.sqrt(D)) / 2 * a)];

    return resultHere;
    // return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let sum = 0;

    if (marks.length > 5) {
        console.log("Оценок больше 5");
        marks.splice(5);  
    }
   
    if (marks.length === 0) {
        return 0;
    } else if (marks.length !== 0) {
        for (let i = 0; i < marks.length; i++) {
        sum = sum + parseInt(marks[i]);
        }
        return sum / marks.length;
    }
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let age = (new Date().getFullYear() - dateOfBirthday.getFullYear());

    if (age > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    // return result;
}