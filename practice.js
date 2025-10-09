// JS(Part2) Practice Questions Qs1.Create a number variable num with some value.
// Now,print“good”if the number is divisible by 10 and print“bad”if it is not.
function func1() {
    num = prompt("enter value of num:")
    if (num % 10 === 0)
        console.log("good")
    else
        console.log("bad")
}

//Take the user's name & age as input using prompts.
//Then return back the following statement to the user as an alert(by substituting their name & age):name is age years old.

function func2(){
    let name=prompt("enter the name:");
    let age=prompt("enter the age:");
   alert(`${name} is ${age} years old`);
}

// Qs3.Write a switchs tatement to print the months in a quarter.
// Months in Quarter1:January,February,March 
// Months in Quarter2:April,May,June 
// Months in Quarter3:July,August,September 
// Months in Quarter4:October,November,December
// [Use the number as the case value in switch]


function func3(){
    let num=prompt("enter the value of num:")
    num=parseInt(num);
    switch(num){
            case 1:
            console.log("January,February,March.");
            break;
            case 2:
            console.log("April,May,June");
            break;
            case 3:
            console.log("July,August,September.");
            break;
            case 4:
            console.log("October,November,December.");
            break;
            default:
            console.log("Invalid choice of quarter.");
    }
}








// Qs4.A string is a golden string if it starts with the character‘A’or‘a’and has a total length greater than 5.
//For a given string print if it is golden or not.
function func4(){
    str=prompt("enter your string");
    if((str[0]==='A'||str[0]==='a') && (str.length>=5))
    console.log("Your entered string is a Golden String.");
    else
    console.log("Your entered string is not a Golden String");
}
 


// Qs5.Write a program to find the largest of 3 numbers.

function func5(){
    num1=Number(prompt("Enter your First Number:"));
    num2=Number(prompt("Enter your Second Number:"));
    num3=Number(prompt("Enter your Third Number:"));
    if(num1>num2 && num1 >num3)
    console.log(`largest number is ${num1}`);
    else if(num2>num1 && num2>num3)
    console.log(`largest number is ${num2}`);
    else
    console.log(`largest number is ${num3}`);
}
