// Задача 1
function parseCount(count) {
    let task = Number.parseInt(count);
    if (isNaN(task)) {
        throw new Error("Невалидное значение");
    } else {
        return task;
    }
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch(e) {
        return e;
    }
}

// Задача 2
class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        let partOfPerimeter = this.getPerimeter() / 2;
        let area = Math.sqrt(partOfPerimeter * (partOfPerimeter - this.a) * (partOfPerimeter - this.b) * (partOfPerimeter - this.c));
        return +(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует"
        }
    }
}