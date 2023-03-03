function parseCount(parsArg) {
    let parseCountVar = Number.parseFloat(parsArg);
    try {
        if (isNaN(parseCountVar)) {
            throw new Error('error');
        }
        console.log(parseCountVar);
        return Number.parseFloat(parsArg)
    }
    catch (error) {
        console.log('Невалидное значение')
    }
}

function validateCount()