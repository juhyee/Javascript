function sayHello(nameOfPerson, age){
    console.log("Hello my name is" + nameOfPerson + "and I'm " + age)
}

sayHello('Nico', 10)
sayHello('Dal', 23)
sayHello('Lynn', 21)


/////////////////////////////////////////////////////////


function Plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber)
}

// console.log(firstNumber)

function divide(a, b){
    console.log(a / b);
}

Plus(8, 60)

divide(98, 20)


/////////////////////////////////////////////////////////


const player = {
    neme: 'Nico',
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you!")
    }
} 

player.sayHello("lynn");
player.sayHello("nico");


/////////////////////////////////////////////////////////
const toBuy = ["potato", "tomato", "pizza"]

console.log(toBuy)

toBuy[2] = "water"

console.log(toBuy)

toBuy.push("meat")
console.log(toBuy)


/////////////////////////////////////////////////////////


const player02 = {
    name: "Nico",
    age: 98
}

console.log(player.name = "Nicolas")
console.log(player)

player.sexy = "soon"

console.log(player02)


/////////////////////////////////////////////////////////

const calculator = {
    add: function(a, b){
        console.log(a + b)
    },
    minus: function(a, b){
        console.log(a - b)
    }, 
    divide: function(a, b){
        console.log(a / b)
    }, 
    pow: function(a, b){
        console.log(a ** b)
    }
}


calculator.add(2, 8)
calculator.minus(2, 8)
calculator.divide(2, 8)
calculator.pow(2, 8)

/////////////////////////////////////////////////////////