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







// Prototype Lookup



const arr = [1, 2, 3];

console.log(arr.push === Array.prototype.push); 
// Array does not have push(), pop() and map() method when use this it checks prototype and give method

// true







// Lost this


const user = {
    name: "Sachin",
    greet() {
        console.log(this.name);
    }
}


const fn = user.greet.bind(user);


fn() // Sachin









// Borrow Method Using call()

const user1 = {
    name: "Sachin"
}


const user2 = {
    name: "Priyanka"
}


function greet() {
    console.log(`Hello ${this.name}`);
}



greet.call(user1) // Hello Sachin
greet.call(user2) // Hello Priyanka








// Apply with Math.max

const arr = [10, 20, 50, 5]


console.log(Math.max.apply(null, arr)); // 50






// Create Prototype Inheritance

const animal = {
    eats: true
}


const dog = Object.create(animal)


console.log(dog.eats); // true 








// Shared Prototype Method


function Person(name) {
    this.name = name
}


Person.prototype.greet = function() {
    console.log(`Hello I am ${this.name}`);
}


const p1 = new Person("Sachin")
const p2 = new Person("Priyanka")
const p3 = new Person("Vijay")
const p4 = new Person("Santosh")


p1.greet() // Hello I am Sachin
p2.greet() // Hello I am Priyanka
p3.greet() // Hello I am Vijay
p4.greet() // Hello I am Santosh








// Student Class



class Student {
    constructor(name, marks) {
        this.name = name
        this.marks = marks
    }

    stdcls() {
        console.log(`${this.name} has ${this.marks} marks`);
    }
}


const result = new Student("Sachin", 80)


result.stdcls() // Sachin has 80 marks








// Car Class


class Car {
    constructor(brand) {
        this.brand = brand
    }

    start() {
        console.log(`${this.brand} started`);
    }
}




const carStatus = new Car("Slavia")


carStatus.start() // Slavia started







// Getter


class User {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    get fullname() {
        return `${this.firstname} ${this.lastname}`
    }
}



const user = new User("Sachin", "Singh")


console.log(user.fullname); // Sachin Singh








// Setter 


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const [firstName, lastName] = value.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const p = new Person("Sachin", "Singh");

console.log(p.fullName); // Sachin Singh

p.fullName = "Aman Gupta";

console.log(p.firstName); // Aman
console.log(p.lastName);  // Gupta
console.log(p.fullName);  // Aman Gupta









// Employee Inheritance


class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }


    work() {
        console.log(`${this.name} has ${this.salary} Salary`);
    }
}


class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    code() {
        console.log(`${this.name} is Coding....`);
    }
}



const dev = new Developer("Sachin", 100000)

dev.work() // Sachin has 100000 Salary
dev.code() // Sachin is Coding....







// Animal Hierarchy



class Animal {
    constructor(animal, breed) {
        this.animal = animal
        this.breed = breed
    }


    animalName() {
        console.log(`This animal is ${this.animal}`);
    }
}



class Dog extends Animal {
    constructor(animal, breed) {
        super(animal, breed)
    }

    animalInfo() {
        console.log(`Animal is ${this.animal}`);
    }
}




class Labrador extends Dog {
    constructor(animal, breed) {
        super(animal, breed)
    }


    dogBreed() {
        console.log(`Animal is ${this.breed}`);
    }
}



const animaltype = new Labrador("Dog", "Labrador")


animaltype.animalName() // This animal is Dog
animaltype.animalInfo() // Animal is Dog
animaltype.dogBreed() // Animal is Labrador








// Static Method


class MathHelper {
    static add(a, b) {
        return a + b
    }
} 


console.log(MathHelper.add(10, 20)); // 30







