// Задача 1
console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(strength) {
    return weapons.filter(weapon => weapon.durability > strength).length;
}

function hasReliableWeapons(strength) {
    return weapons.some(weapon => weapon.durability > strength);
}

function getReliableWeaponsNames(strength) {
    return weapons.filter(weapon => weapon.durability > strength).map(weapon => weapon.name);
}

function getTotalDamage() {
    return weapons.reduce((totalAttack, weapon) => totalAttack + weapon.attack, 0);
}

function getValuestCountToSumValues(arr, value) {
    return arr.reduce((result, current) => {
        if (result.reduce((sum, current) => sum + current, 0) < value) {
            result.push(current);
        }
        return result;
    }, []).length;
} 

// Задача 2
function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    const array1 = Array.from(arr1);
    const array2 = Array.from(arr2);
    return array1.length === array2.length && array1.every((item, i) => item === array2[i]);
}

function memorize(fn, limit) {
    const memory = [];
    return function () {
        const item = memory.find(item => compareArrays(item.args, arguments));
        let result = fn(...arguments);
        if (item !== undefined) {
            return item.result;
        }
        memory.push({args: arguments, result});
        if (memory.length >= limit) {
            memory.unshift();
        }
        return result;
    }
}