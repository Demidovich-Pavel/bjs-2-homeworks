﻿function parseCount(parsArg) {
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
        let areatriangle = Math.sqrt(halfPer * (halfPer - this.sideA) * (halfPer - this.sideB) * (halfPer - this.sideC)).toFixed(3);
        return areatriangle
    }
}
try {
    const triangle = new Triangle(10, 11, 10);
    console.log(triangle.perimeter)
    console.log(triangle.area)
}
catch (error) {
    console.log(error);
}

function getTriangle(A, B, C) {
    return console.log({
        sideA: A, sideB: B, sideC: C,
    })
}