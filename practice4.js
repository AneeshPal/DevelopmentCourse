// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array. 
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]
function func13(){
  let arr=[1,2,3,4,5,6,2,3];
  let num=Number(prompt("enter the value you want to remove from array:"));
  for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
  }
  console.log(arr);
}

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

function func14(){
    let num=Number(prompt("enter the number:"));
    let cnt=0;
    while(num>0){
     cnt++;
     num=Math.floor(num/10);
    }
    console.log(cnt);
}

// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

function func15(){
    let num=Number(prompt("enter the number:"));
    let sum=0;
    while(num>0){
      let r=num%10;
      sum=sum+r;
      num=Math.floor(num/10);
    }
    console.log(sum);
}
// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1

function func16(){
    let num=Number(prompt("enter the number:"));
    let fact=1;
    while(num>0){
     fact=fact*num;
     num=num-1;
    }
    console.log(fact);
}
// Qs5. Find the largest number in an array with only positive numbers.

function func17(){
    let arr=[1,2,3,34,5,6,2,3];
    let maxi=arr[0];
    for(let i=1;i<arr.length;i++){
       if(arr[i]>maxi){
        maxi=arr[i];
       }
    }
   console.log(maxi);
}