// Qs1. Write a JavaScript program to get the first n elements of an array. 
//[n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]
function func7(){
    let num=[];
    let n=Number(prompt("enter the value of n:"));
    for(let i=0;i<n;i++){
        let x=Number(prompt("enter the array element"));
        num.push(x);
    }
    let sz=Number(prompt("how many elements you want to extract from the above n sixe array:"));
    for(let i=0;i<sz;i++){
        console.log(num[i]);
    }
}

// Qs2. Write a JavaScript program to get the last n elements of an array. 
// [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print [9, 0, -2]

function func8(){
    let num=[];
    let n=Number(prompt("enter the value of n:"));
    for(let i=0;i<n;i++){
        let x=Number(prompt("enter the array element"));
        num.push(x);
    }
    let sz=Number(prompt("how many elements you want to extract from the above n sixe array:"));
    for(let i=n-sz;i<n;i++){
        console.log(num[i]);
    }
}

// Qs3. Write a JavaScript program to check whether a string is blank or not.

function func9(){
    let str=prompt("enter a string");
    if(str.length==0)
    console.log("empty string.");
    else
    console.log(" not a empty string");
}

//Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.

function func10(){
    let str=prompt("enter a string");
    let ind=Number(prompt("enter the index whose value you want to check:"));
    if(str[ind]===str[ind].toLowerCase())
    console.log("at input ind we have a lower case character");
    else
    console.log("at input ind we don't have a lower case character");
}

//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

function func11(){
    let str=prompt("enter a string");
    //console.log("before triming str",str);
    console.log(str.trim());
}

//Qs6. Write a JavaScript program to check if an element exists in an array or not.

function func12(){
    let num=[];
    let n=Number(prompt("enter the value of n:"));
    for(let i=0;i<n;i++){
        let x=Number(prompt("enter the array element"));
        num.push(x);
    }
    let val=Number(prompt("enter the value you want to see whether it exists in the given array or not :"));
     let flag=num.includes(val);
     console.log(flag);
 }

 