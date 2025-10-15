//Qs1. Create a program that generates a random number representing a dice roll. 
//[The number should be between 1 and 6].

function func26(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}

// Qs2. Create an object representing a car that stores the following properties for the car: name, model, color.
// Print the car’s name.

function func27(){
    const car={
        name:"BMW",
        model:"a23",
        color:"black"
    };
    console.log(car.name);
}

// Qs3. Create an object Person with their name, age and city. 
//Edit their city’s original value to change it to “New York”.
//  Add a new property country and set it to the United States.

function func28(){
    let Person={
        name :"Aneesh",
        age:21,
        city:"Kanpur"
    }
    console.log(Person);
    Person.city="New York";
    Person.country="United States";
    console.log(Person);
}