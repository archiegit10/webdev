const historyArr = [];

function display(value){
    document.getElementById("result").value += value;
}

function solve(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    let historyStr = `${x}=${y}`;
    addToHistory(historyStr);
    document.getElementById("result").value = y;
    //historyArr.unshift(historyStr);
    //document.getElementById("historyDiv").innerHTML = historyArr;
    //console.log(`Solve pressed: ${historyStr}`);
}

function addToHistory(historyStr){
    console.log(`${historyStr} Add to history function`)
    historyArr.unshift(historyStr);
    document.getElementById("historyDiv").innerHTML = historyArr;
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
