// Write an arrow function named arrayAverage that accepts an array of numbers and 
// returns the average of those numbers.
 
let arrayAverage=()=>{
    let num=[1,2,3,4,5,6];
    let avg=0;
    for(el of num){
        avg=avg+el;
    }
    console.log(avg/6);
}

// Qs2. Write an arrow function named isEven() that takes a single number as argument 
// and returns if it is even or not.

isEven=(num)=>{
    if(num % 2==0){
        console.log("even number");
    }
    else{
        console.log("! an even number");
    }

}



