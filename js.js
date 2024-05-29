// Reverse a string
function reverseString(a){
    return a.split('').reverse().join('');
}
console.log(reverseString("Nikhil"))

//count chracters: create a function that counts the number of characters in a string.
function count(word){

    console.log(word.split("").length)
}
count("Augustine")

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function captilize(arr){
    let store1 = arr.split(" ");

for(let i = 0; i<store1.length; i++){
    store1[i] = store1[i].charAt(0).toUpperCase() + store1[i].slice(1);
} 
return console.log ( store1.join(" ") );
}
captilize("messi is the best player in the world")


//find the max 
function findMax(arr){
    let max = arr[0]; // 400
for(let i = 1 ; i<arr.length; i++){
if( arr[i]  > max){
    max = arr[i]; }
}
return max;
}

let numberzzs = [10,20,100,200,300,400];
console.log ( findMax(numberzzs) )

function findMin(arr){
    let min = arr[0] ;
    for(let i = 1; i<arr.length; i++){
if( arr[i]   < min  ){
min = arr[i];
}
}
return "The minimum number is " + min;
    
}
let numbers = [10,20,100,200];
console.log (findMin(numbers))

// sum of array
function sumofarray(arr){
let store = 0; // 1000
for(let i = 0; i<arr.length; i++){
    store = store   + arr[i] 
}
return console.log ( store )
}
let arrax = [10,20,30,40,50];
sumofarray(arrax);

// Filter Array
let myarray = [-2,-1,0,1,20];
function filterfun(a,i){
    return a>10;
}

function mainfun(arr,fun){
let emptyarray =[];
for(let i =0; i<arr.length; i++){
    if (fun (arr[i],i )){
    emptyarray.push(   arr[i] ) 
}

}
return emptyarray;
}
console.log ( mainfun(myarray, filterfun) )

// factorial
function factorial(a){
    let b = 1;
    
    for(let i = a; i > 1; i--){
        b*=i;
    }
    return b;
}
console.log ( factorial(0) );

//prime numbers
function checkprime(n){
    if(n==2 || n==3 || n==7){
        console.log("a prime number")
    }
    else if(n % 2 == 0 || n % 3 == 0|| n % 7 == 0 ){
console.log("not a prime number")
    } else {
        console.log("prime number")
    }
 }
checkprime(18)

//Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//The person is at least 15 years old.
//They have parental supervision.The function accepts two parameters, age and isSupervised. Return a boolean.//
function acceptIntoMovie(age, isSupervised) {
  return age >= 15 || isSupervised
}
//writing a simple fumction with two parameters
function mrdavid(age,dob) {
    return(age+dob)
    
}