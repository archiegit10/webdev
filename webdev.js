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
age = 5;
if(age >= 18 && age <= 85){
    console.log("above 18 and below 85: " + age)
} else{
    console.log(age+" is below 18 or above 85")
}
result = age >= 50 ? "50 above" : "50 below";
console.log(result)
