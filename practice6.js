//Qs1. Write a JavaScript function that returns array elements larger than a number.

function func21(){
    const num=[1,2,3,45,6,7,8,]
    let arr=[];
    let n=Number(prompt("enter the number you want to check for:"))
    for(el of num){
        if(el>n){
          arr.push(el);
        }
    }
    console.log(arr);
}

// Qs2. Write a JavaScript function to extract unique characters from a string. 
//Example: str = “abcdabcdefgggh” 
// ans = “abcdefgh”

function func22(){
    let str="abcdabcdefgggh";
    let res="";
    for(ch of str){
        if(res.indexOf(ch)==-1){
            res=res+ch;
        }
    }
    console.log(res);
}

// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

function func23(){
    const country = ["Australia", "Germany", "United States of America"];
    let len=0;
    for(el of country){
        if(el.length > len){
            len=el.length;
            ans=el;
        }
    }
    console.log(ans);
}

// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

function func24(str){
    let cnt=0;
  for(ch of str){
   if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'){
    cnt++;
   }
  }
  console.log(`Count of vowels in string ${str} is ${cnt}`);
}

// Qs5. Write a JavaScript function to generate a random number within a range (start, end).

function func25(){
    let start=Number(prompt("enter the start of range:"));
    let end=Number(prompt("enter the end of range:"));
    let rand=Math.floor(Math.random()*end);
    console.log(rand);
}