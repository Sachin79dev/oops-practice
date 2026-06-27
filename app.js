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
