const toBuy = ["potato", "tomato", "pizza"]

console.log(toBuy)

toBuy[2] = "water"

console.log(toBuy)

toBuy.push("meat")
console.log(toBuy)


/////////////////////////////////////////////////////////


const player = {
    name: "Nico",
    age: 98
}

console.log(player.name = "Nicolas")
console.log(player)

player.sexy = "soon"

console.log(player)


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