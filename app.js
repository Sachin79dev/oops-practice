// Hello OOPs


// Understanding this in an Object


const user = {
    name: "Ritik",
    greet() {
        console.log(this.name);
    }
};


user.greet(); // "Ritik"





// Default Binding


"use strict";

function show() {
    console.log(this);
}

show();


// First: The browser will print the window API,  Second: The node will print the node API, Third: The "use strict" will print undefined.







// call() in OOPs 


function introduce() {
    console.log(this.name);
}


const person = {
    name: "Sachin"
}


introduce.call(person) // Sachin







// apply() in OOPs


function introduce(city, country) {
    console.log(`${this.name} from ${city} (${country})`);
}


const person = {
    name: "Sachin"
}

// introduce.call(person, "Agra", "India") // Sachin from Agra (India)
introduce.apply(person, ["Agra", "India"]) // Sachin from Agra (India)







// Fix Lost this



const user = {
    name: "Sachin",
    greet() {
        console.log(this.name);
    }
}



const fn = user.greet.bind(user);

fn(); // Sachin








// Create an Inheritance Chain

const animal = {
    eats: true
}


const dog = Object.create(animal)

console.log(dog.eats); // true








// Prototype Method 

function Person(name) {
    this.name = name
}


Person.prototype.greet = function() {
    console.log(`My name is ${this.name}`);
}


const name = new Person("Sachin")

name.greet() // My name is Sachin






// Student Class System


class Student {
    constructor(name, marks) {
        this.name = name
        this.marks = marks
    }

    getGrade() {
        if (this.marks >= 90) {
            return "A"
        } else if (this.marks >= 75) {
            return "B"
        } else if (this.marks >= 60) {
            return "C"
        } else {
            return "F"
        }
    }
}


const s1 = new Student("Sachin", 93)
const s2 = new Student("Priyanka", 76)
const s3 = new Student("Deep", 60)
const s4 = new Student("Carry", 50)



console.log(s1.getGrade()); // A
console.log(s2.getGrade()); // B
console.log(s3.getGrade()); // C
console.log(s4.getGrade()); // F








// Employee Inheritance 



class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    work() {
        console.log(`${this.name} is Employee`);
    }
}



class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }
    code() {
        console.log(`And his salary is: ${this.salary}`);
        
    }
}


const dev = new Developer("Sachin", 300000)


dev.work() // Sachin is Employee
dev.code() // And his salary is: 300000








// Bank Account (Interview - Level)



class BankAccount {
    #balance = 0
    deposit(amount) {
        if(amount >= 0) {
            this.#balance += amount
        } else {
            console.log(`You can only deposit more than 0 balance`);
            
        }
    }
    withdraw(amount) {
        if(amount <= this.#balance) {
            this.#balance -= amount
        } else {
            console.log("Insufficiant Balance");
            
        }
    }
    getBalance() {
        return this.#balance
    }
}


const acc = new BankAccount(this.amount)


acc.deposit(1000);
acc.withdraw(300)


console.log(acc.getBalance()); // 700







// Method and this 


const user = {
    name: "Ritik",
    greet() {
        console.log(this.name);
    }
}


user.greet() // Ritik









// Default Binding 



function show() {
    console.log(this);
}



show() // will print window object API








// Object Method 


const car = {
    brand: "BMW",
    showBrand() {
        console.log(this.brand);
    }
}


car.showBrand() // BMW






// call() using this 


function greet() {
    console.log(this.name);
}


const user = {
    name: "Sachin"
}



greet.call(user) // Sachin










// apply() in this


function introduce(city) {
    console.log(`${this.name} is from ${city}`);
}



const person = {
    name: "Sachin"
}


introduce.apply(person, ["Agra"]) // Sachin is from Agra









// bind() using this


function greet() {
    console.log(this.name);
}



const user = {
    name: "Sachin"
}


const fn = greet.bind(user)

fn(); // Sachin









// Arrow Function this


const user = {
    name: "Sachin",
    greet: () => {
        console.log(this.name);
    }
}


user.greet() // this will print blank space as "this" does not have Lexical Scope







// Event Handler Theory

let btn = document.querySelector("#btn")


btn.addEventListener("click", function() {
    console.log(this);  
})

// In normal function this will print the exact targeted event 
// <button id="btn">Click Me</button>



btn.addEventListener("click", () => {
    console.log(this);
})


// In the arrow function this will print window object 








// Constructor Function


function Person(name) {
    this.name = name
}


const user = new Person("Sachin")


console.log(user); // Person {name: 'Sachin'}







