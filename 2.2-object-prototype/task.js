//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function() {
    let stringPalindrome = this.toLowerCase()
    let lengthOfPart = Math.round(stringPalindrome.length / 2);
    for (let i = 0; i < lengthOfPart; i++) {
        if (stringPalindrome[i] === stringPalindrome[stringPalindrome.length - i - 1]){
            return true;
        } else {
            return false;
        }
    }
}


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + parseInt(marks[i]);
    }
    roundedAverage = Math.round(sum / marks.length);
    // return averageMark
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = Date.now();
    birthday = Number(new Date(birthday));
    let diff = (birthday - now) / (60 * 60 * 24 * 1000);
    let age = Math.abs(Math.round(diff / 365.242));

    if (age > 18) {
        return true;
    } else {
        return false;
    }

    // return verdict
}