const history = []

function display(value){
    document.getElementById("result").value += value;
}

function solve(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    let historyStr = `${x}=${y}`
    document.getElementById("result").value = y;
    history.unshift(historyStr)
    document.getElementById("historyDiv").innerHTML = history;
}

function clearDisplay(){
    let e = "";
    document.getElementById("result").value = e;
}

function clearHistory(){
    const history = []
    document.getElementById("historyDiv").innerHTML = ""
}
