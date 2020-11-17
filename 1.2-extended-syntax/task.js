"use strict"
function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let D = b**2 - 4 * a * c;
    let formula1 = (- b + Math.sqrt(D)) / 2 * a;
    let formula2 = (- b - Math.sqrt(D)) / 2 * a;
    let rezult;
    console.log(D);

    if (D < 0) 
        rezult = [];
    else if (D === 0)
        rezult = [formula1];
    else if (D > 0) 
        rezult = [formula1, formula2];

    return rezult;
    // return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let rezult;
    let sum = 0;

    if (marks.length === 0) {
        rezult = 0;
    } else if (marks.length > 5) {
        console.log("Оценок больше 5");
        marks.splice(5);
        for (let i = 0; i < marks.length; i++) {
            sum = sum + parseInt(marks[i]);
        }
        rezult = (sum / marks.length);
    } else if (marks.length <= 5) {
        for (let i = 0; i < marks.length; i++) {
            sum = sum + parseInt(marks[i]);
        }
        rezult = (sum / marks.length);
    }
    // return averageMark;
    return rezult;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    const year = new Date().getFullYear();
    let age = (year - dateOfBirthday.getFullYear());
    let result;

    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else if (age < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    // return result;
    return result;
}