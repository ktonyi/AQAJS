// car object
const car = {
    color: "black"  
}

car.color = "green"

car.power = function (){
    console.log("Engine power is 1000")
}

car.power();

// apples and pears
function countFruits (apples, pears) {
    return apples + pears
}

console.log(countFruits(100,200));

//payment terminal
const client = {
    cName: "anton"
}

function defineName(name){
    if (client.cName === name){
        return (`hello ${name}`)
    } else return ('no such name')
}


console.log(defineName("anton"));
console.log(defineName("sergey"));

//A function for calculating the type of argument and type output to the console.

function logType(arg) {
    let argType = typeof arg;
    console.log(`Type of argument: ${argType}`);
  }

// A function that determines whether a number is prime or not

function primeNumDef (num) {
    if (num <= 1){
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0 ) {
            return false;
        } 
    }
    return true;
}

console.log(primeNumDef(8));
