//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function fav_food(person3){
    for (let i=0; i< Object.values(person3).length; i++){
        if (i <=3){
            console.log(Object.values(person3)[i])
        } 
        else {
            for (let i=0; i< Object.values(person3['shakes']).length; i++){
            return (Object.values(person3['shakes'][i]))
        }
    }
}}

console.log(fav_food(person3))



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        return `Your name is ${this.name}, You are ${this.age} years old`
    }
    this.newage = (num) => {
        return (age+1+num)
    }
}

let new_person = new Person('Gabby', 25);
console.log(new_person.printInfo())
console.log(new_person.newage(0))

let new_person2 = new Person('Nate', 25);
console.log(new_person2.printInfo())
console.log(new_person2.newage(2))



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


function String_10(string){
    return new Promise((resolve,reject) => {
        if(string.length > 10){
            resolve("Big word");
        } else {
            reject("Small Number")
        }
    })
}

console.log(String_10('This string is long enough'))


// =================== Code Wars #1 ========================================= //
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1)
    }

console.log(capitalizeWord('table'))


// =================== Code Wars #2 ========================================= //
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);


function getAverage(marks){
    return Math.floor((marks.reduce((a, b) => a + b, 0)
  )/marks.length)
  }

console.log(getAverage([1,2,3,4,5,]))


// =================== Code Wars #3 (New Problem) ========================================= //
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Test.assertEquals(squareSum([1,2]), 5)
// Test.assertEquals(squareSum([0, 3, 4, 5]), 50)


function squareSum(numbers){
    let square = 0
    let i = 0
     while (i<numbers.length){
       square += numbers[i] ** 2
       i++
     }
    return square
  }

  console.log(squareSum([0, 3, 4, 5]))

