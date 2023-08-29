const age = 96;

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);
console.log(KrAge)


////////////////////////////////////////////


const calculator = {
    add: function(a, b){
        return a + b
    },
    minus: function(a, b){
        return a - b
    }, 
    divide: function(a, b){
        return a / b
    }, 
    pow: function(a, b){
        return a ** b
    }
}


const plusResult = calculator.add(2, 8)
const minusResult = calculator.minus(plusResult, 8)
const divideResult =  calculator.divide(10, minusResult)
const powResult =  calculator.pow(divideResult, minusResult)