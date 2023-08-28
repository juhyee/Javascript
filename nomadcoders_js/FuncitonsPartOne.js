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
