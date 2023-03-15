function parseCount(parsArg) {
    let parseCountVar = Number.parseFloat(parsArg);
    if (isNaN(parseCountVar)) {
        throw new Error('Невалидное значение');
    }
    console.log(parseCountVar);
    return Number.parseFloat(parsArg)
}

//function parseCount (parsArg){
//    let parseCountVar = Number.parseFloat(parsArg);
//    if (isNaN(parseCountVar)) {
//        throw new Error ('Невалидное значений');
//    }
//    console.log(parseCountVar);
//    return Number.parseFloat(parsArg)
//  }
// Пробовал написать два задания в одном. Не получилось))) Скажите, тактая реализация может быть? Не в рамках ДЗ, а впринципи?


function validateCount(parsArg) {
    try {
        return parseCount(parsArg)
    }
    catch (error) {
        console.log(error);
        return error
    }
}


class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

        if (this.sideA + this.sideB < this.sideC ||
            this.sideC + this.sideB < this.sideA || this.sideA
            + this.sideC < this.sideB) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
    }
    get perimeter() {
        let per = this.sideA + this.sideB + this.sideC;
        return per
    }
    get area() {
        let halfPer = 0.5 * (this.sideA + this.sideB + this.sideC);
        let areatriangle = Number(Math.sqrt(halfPer * (halfPer - this.sideA) * (halfPer - this.sideB) * (halfPer - this.sideC)).toFixed(3));
        return areatriangle
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        let triangle = new Triangle(sideA, sideB, sideC);
        console.log(triangle.area, triangle.perimeter)
        return triangle
    } catch {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует'
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }
}

