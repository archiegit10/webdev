console.log("print line")

firstname = "archie "
surname = "ward "
birthplace = "hastings "
starsign = "cancer "

console.log(firstname + surname + birthplace + starsign)
console.log("This is a %c colour box","color: blue;font-family:helvetica; font-style: italic; background-color: red;padding: 50px");

let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};
typeof(a)
typeof(b)
typeof(c)
typeof(d)
typeof(e)
let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay;
console.log(`the total bill is £${totalMoney} with £${moneyPaidSoFar} paid so far, and £${totalLeftToPay} left to pay`)

//task 4
a = 100
for(a = 100; a <= 100; a++){
    console.log(`a= ${a}`)
}

b = 100
for(b <=200; b <= 200; b++){
    if(b % 2 ==0){
        console.log("-")
        b++
    } else {
        console.log("*")
        b++
    }
}
console.log("---------------------")
for( n = 0; n < 10; n++){
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
console.log("---------------------")

now = new Date();
day = now.getDay();
switch(day){
    case 0: 
        console.log("its sunday");
        break;
    case 1:
        console.log("its monday ");
        break;
    case 2:
        console.log("its tuesday");
        break; 
    case 3:
        console.log("its wednesday my dude");
        break;   
    case 4:
        console.log("its thursday");
        break;
    case 5:
        console.log("its friday");
        break;
    case 6:
        console.log("its saturday");
        break;
}
console.log("----------------- task 5")
let strictA = true;
let strictB = 1;
console.log(strictA == strictB); //true
console.log(strictA === strictB); // false
console.log(strictA != strictB); // false
console.log(strictA !== strictB); //true
//let age = 5;
/*if(age >= 18 && age <= 85){
    console.log("above 18 and below 85: " + age)
} else{
    console.log(age+" is below 18 or above 85")
}
result = age >= 50 ? "50 above" : "50 below";
console.log(result)
*/
console.log("------------- task 6")
darthVader = {
    allegiance : "empire",
    weapon : "lightsabre",
    sith: true
};
console.log(darthVader);

console.log(`Darth vaders alligence is to the ${darthVader.allegiance}`);
console.log(`Darth vaders weapon is the ${darthVader.weapon}`);
console.log(`darth vader is a sith, this is ${darthVader.sith}`);
console.log(`darth vader is a jedi, this is ${!darthVader.sith}`);

let myArray = ["hello", "everyone"];
console.log(myArray.length);
myArray.push("good morning","good afternoon","good evening")
console.log(myArray.length);
myArray.shift(myArray)
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log("------------------fizz  buzz");
for (let i = 0; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} fizz buzz`)
    } else if(i % 3 == 0){
        console.log(`${i} fizz `)
    } else if(i % 5 == 0){
        console.log(`${i}  buzz`)
    } else {
        console.log(i)
    }
}

console.log("----------------bottles of beer")
for(let i = 99; i >= 0; i = i - 1){
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer`)
    if(i > 1){
        console.log(`Take one pass it down, ${(i - 1)} bottles of beer on the wall`)
    } else if (i < 1){
        console.log(`No more bottles of beer on the wall, no more bottles of beer.
        Go to the store and buy some more, 99 bottles of beer on the wall.`)
    }
}
console.log("------------- scope task")
function assess(){
    let x = 'foo'
    if(x == 'foo'){
       let y = 'bar' 
       console.log(y)
    }
    console.log(x) // x
    //console.log(y) // reference error
}

assess()
/*function doSomething() {
    console.log(a);
    console.log(foo());
    let a = 1;
    function foo() {
      return 2;
    }
  }
  doSomething();
  cannot access a before initalisting */ 
  console.log("functions ----------------")
  function sub(num1, num2){
      console.log( num1 - num2)
  }
  let num1= 5
  let num2= 3
  sub(5,3)

  let name = "archie"
  let age = "22"
  let gender = "male"

  function welcome(name, age,gender){
      console.log(`My name is ${name}, I am ${age} years old and of gender ${gender}`)
  }

  welcome(name,age,gender)

  powerUp = (n1,n2) => Math.pow(n1,n2);
  console.log(powerUp(3,2))