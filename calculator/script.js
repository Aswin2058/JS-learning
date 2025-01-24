var inputNum = document.querySelector("#userInput");
var expression = ''; 

function pass(num){
    expression += num;
    inputNum.value = expression;
}

function equal(){
    inputNum.value = eval(expression);
    expression = '';
}

function erase(){
    expression = '';
    inputNum.value = expression;
}

