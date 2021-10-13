const historyArr = [];

function display(value){
    document.getElementById("result").value += value;
}

function solve(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    let historyStr = `${x}=${y}`;
    document.getElementById("result").value = y;
    historyArr.unshift(historyStr);
    document.getElementById("historyDiv").innerHTML = historyArr;
    console.log(`Solve pressed: ${historyStr}`);
}

function clearDisplay(){
    let e = "";
    console.log("clear display pressed");
    document.getElementById("result").value = e;
}

function clearHistory(){
    console.log("clear history pressed")
    let historyArr = [];
    document.getElementById("historyDiv").innerHTML = ""; 
}
