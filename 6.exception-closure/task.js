function parseCount(parsArg) {
    let parseCountVar = Number.parseFloat(parsArg);
    if (isNaN(parseCountVar)) {
        throw new Error('Невалидное значений');
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