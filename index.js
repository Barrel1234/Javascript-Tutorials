//1.Ways to print in Javascript
//console.log("Hello World");
//alert("me");
//document.write("this is document write");
//2.Javascript Console API
console.log("Hello World", 4 + 6, "Another log");
console.warn("this is a warning");
console.error("This is an error");
console.assert(4 == (6 - 8));

//3. Javascript Variables
//What are variables? - Containers to store data values
var number1 = 34;
var number2 = 56;
console.log(number1+number2);

/*
multi
line
comment
*/

//4. Data types in JavaScript
// String
var str1 ="This is a string";
var str2 = 'This is also a string';
//Numbers
var num1 = 455;
var num2 = 56.76;
//Objects
var marks = {
    ravi: 34,
    subham: 78,
    harry: 99.977
}
console.log(marks);
//Booleans
var a= true;
var b =false;
console.log(a,b);
 //var und = undefined;
var und;
console.log(undefined);
console.log(und);
var n = null;
console.log(n);

/*At a very high level, there are two types of data types in Javascript
/1. Primitivedata types:undefined,null,number,string,boolean,symbol.
.Reference data types: Arrays and Objects */

var arr = [1,2,"bablu",4,5];
console.log(arr);
console.log(arr[2]);

//5. Operators in Javascript
//Arithmetic Operators
var a = 100;
var b = 10;
console.log("The value of a + b is",a+b);
console.log("The value of a - b is",a-b);
console.log("The value of a * b is",a*b);
console.log("The value of a / b is",a/b);
//Assignment  Operators
var c = b;
c += 2;
c -= 1;
c *= 2;
c /= 2;
console.log(c);

//Comparision operators
var x = 34;
var y = 56;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);

//Logical Operators
//Logical And
console.log(true && true); 
console.log(true && false);
console.log(false && true);
console.log(false && false);
//Logical Or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
//Logical Not
console.log(!false);
console.log(!true);

//6. Javascript Functions
//DRY = Do not repeat yourself
function avg(a,b){
    c = (a+b)/2;
    return c; 
}
c1 = avg(4,6);
c2 = avg(14,16);
console.log(c1,c2);
/* note blue means number and black means string*/

//7.Conditionals in Javascript

var age = 41;
//single if statement
if(age > 18)
    console.log('You can drink rasna water');
//if-else statement
if(age > 18){
    console.log('You can drink rasna water');

}else{
    console.log('You cannot drink rasna water');
}
//if-else ladder
var age = 25;
if(age>32){
    console.log("You are not a kid")
}
else if(age>26){
    console.log("bacche nahi rahe");
}
else if(age>22){
    console.log("Yes bacche nahi rahe");
}
else if(age>18){
    console.log(" 18 bacche nahi rahe");
}
else{
    console.log("Bacche rahe");
}
console.log("End of Ladder");

function check(age)
{
    
    if(age>18)
    {
        console.log("Can Drink Rasna Water");
    }else{
        console.log("Can't Drink Rasna Water");
    }
    return age;
}
b1 = check(19);
b2 = check(17);
//console.log(b1,b2);

//8.Loops
var arr = [1,2,3,4,5,6,7];
console.log(arr);
for(var i =0;i<arr.length;i++){
    if(i==2){
       // break;
        continue;
    }
    console.log(arr[i]);
}
/*arr.forEach(function(element){
     console.log(element);
})
 let j = 10;
 /*const ac = 0;
 ac++;*/
 /*while(j<arr.length){
     console.log(arr[j]);
     j++;
 }
 do{
     console.log(arr[j]);
     j++;
 }
     while(j<arr.length);
 }*/
let myArr =["Fan","Camera",34,null,true];
//9.Array Methods
myArr.length;
console.log(myArr.length);
//myArr.pop();
//myArr.push("harry");
//myArr.shift();
const newLen = myArr.unshift("Harry");
console.log(newLen);
console.log(myArr);
  
//10. String Methods in JavaScript
let myLovelyString = "Supreme is a good boy good boy";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("good"));
console.log(myLovelyString.lastIndexOf("good"));
console.log(myLovelyString.slice(1,4));
d=myLovelyString.replace("Supreme", "Peter");
d = d.replace("good","bad");
console.log(d,myLovelyString);
//11. Date Methods in Javascript
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

//12. DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
console.log(elem.innerHTML);
console.log(elem.innerText);

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);
tn = document.getElementsByTagName('div');
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2,createdElement);
//removeChild(element); ---> removes an element

//Selecting using query
sel = document.querySelector('.container')
console.log(sel);
sel = document.querySelectorAll('.container')
console.log(sel);

//13. Events in Javascript
function clicked(){
    console.log('The button was clicked')
}
window.onload = function(){
    console.log('The doument was loaded')
}
firstContainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have Clicked</b>"
   console.log("Click on container")
})
firstContainer.addEventListener('mouseover',function(){
    console.log("Mouse on Container")
})
firstContainer.addEventListener('mouseout',function(){
    console.log("Mouse out of Container")
})
firstContainer.addEventListener('mouseup',function(){
    console.log("Mouse up when clicked on Container")
})
firstContainer.addEventListener('mousedown',function(){
    console.log("Mouse down when clicked on Container")
}) 


//14. Arrow Functions
// function summ(a, b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
//15. SetTimeout and setinterval
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

//16. JavaScript localStorage
// localStorage.setItem('name', 'supreme') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

//17. Json 
// obj = {name: "supreme", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

//18. Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)