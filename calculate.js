let result = document.getElementById("display");

function addNumber(number){
    result.value += number;
}

function operation(op){
    const lastch = result.value.slice(-1);
    if(lastch === '+' || lastch === '-' || lastch ==='*' || lastch === '/'){
        result.value = result.value.slice(0,-1)+op;
    }else{
        result.value += op;
    }
}

function calculator(){
    result.value = eval(result.value);
}

function clearSingle(){
    result.value = result.value.slice(0,-1);
}

function clearScreen(){
    result.value = "";
}