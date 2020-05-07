"use strict";
var operands = document.getElementsByClassName("operand");
var display = document.getElementById("display");
var operandOne = "";
var operandTwo = "";
var operator = "";
// operands 
operands[0].addEventListener('click', function(){
    if(display.getAttribute('value') == "Error"){
        return;
    }
    display.setAttribute('value', display.getAttribute('value') + operands[0].getAttribute('data-value'));
});
operands[1].addEventListener('click', function(){
    if(display.getAttribute('value') == "Error"){
        return;
    }
    display.setAttribute('value', display.getAttribute('value') + operands[1].getAttribute('data-value'));
});
operands[2].addEventListener('click', function(){
    if(display.getAttribute('value') == "Error"){
        return;
    }
    display.setAttribute('value', display.getAttribute('value') + operands[2].getAttribute('data-value'));
});
operands[3].addEventListener('click', function(){
    if(display.getAttribute('value') == "Error"){
        return;
    }
    display.setAttribute('value', display.getAttribute('value') + operands[3].getAttribute('data-value'));
});
operands[4].addEventListener('click', function(){
    if(display.getAttribute('value') == "Error"){
        return;
    }
    display.setAttribute('value', display.getAttribute('value') + operands[4].getAttribute('data-value'));
});
operands[5].addEventListener('click', function(){
    if(display.getAttribute('value') == "Error"){
        return;
    }
    display.setAttribute('value', display.getAttribute('value') + operands[5].getAttribute('data-value'));
});
operands[6].addEventListener('click', function(){
    if(display.getAttribute('value') == "Error"){
        return;
    }
    display.setAttribute('value', display.getAttribute('value') + operands[6].getAttribute('data-value'));
});
operands[7].addEventListener('click', function(){
    if(display.getAttribute('value') == "Error"){
        return;
    }
    display.setAttribute('value', display.getAttribute('value') + operands[7].getAttribute('data-value'));
});
operands[8].addEventListener('click', function(){
    if(display.getAttribute('value') == "Error"){
        return;
    }
    display.setAttribute('value', display.getAttribute('value') + operands[8].getAttribute('data-value'));
});
operands[9].addEventListener('click', function(){
    if(display.getAttribute('value') == "Error"){
        return;
    }
    display.setAttribute('value', display.getAttribute('value') + operands[9].getAttribute('data-value'));
});
operands[10].addEventListener('click', function(){
    if(display.getAttribute('value') == "Error"){
        return;
    }
    display.setAttribute('value', display.getAttribute('value') + operands[10].getAttribute('data-value'));
});

//operators
var operator = document.getElementsByClassName("operator");
var previousExpression = document.getElementById("expression");
operator[0].addEventListener('click', function(){
    if(display.getAttribute('value') == "" || display.getAttribute('value') == "Error"){
        display.setAttribute('value', "Error");
        return;
    }
    operandOne += display.getAttribute('value') + operator[0].getAttribute('data-value');
    previousExpression.setAttribute('value', operandOne);
    display.setAttribute('value', "");
});
operator[1].addEventListener('click', function(){
    if(display.getAttribute('value') == "" || display.getAttribute('value') == "Error"){
        display.setAttribute('value', "Error");
        return;
    }
    operandOne += display.getAttribute('value') + operator[1].getAttribute('data-value');
    previousExpression.setAttribute('value', operandOne);
    display.setAttribute('value', "");
});
operator[2].addEventListener('click', function(){
    if(display.getAttribute('value') == "" || display.getAttribute('value') == "Error"){
        display.setAttribute('value', "Error");
        return;
    }
    operandOne += display.getAttribute('value') + operator[2].getAttribute('data-value');
    previousExpression.setAttribute('value', operandOne);
    display.setAttribute('value', "");
});
operator[3].addEventListener('click', function(){
    if(display.getAttribute('value') == "" || display.getAttribute('value') == "Error"){
        display.setAttribute('value', "Error");
        return;
    }
    operandOne += display.getAttribute('value') + operator[3].getAttribute('data-value');
    previousExpression.setAttribute('value', operandOne);
    display.setAttribute('value', "");
});
operator[4].addEventListener('click', function(){
    if(display.getAttribute('value') == "" || display.getAttribute('value') == "Error"){
        display.setAttribute('value', "Error");
        return;
    }
    operandTwo = display.getAttribute('value');
    if(operandTwo == '0' || display.getAttribute('value').substr(-1) == '/'){
        alert("Divide By Zero not allowed");
        alert("click on AC to continue");
        display.setAttribute('value', 'Error');
        return;
    }
    previousExpression.setAttribute('value', operandOne + operandTwo);
    display.setAttribute('value', eval(operandOne + operandTwo));
    operandTwo = "";
    operandOne = "";
});

var specialOperator = document.getElementsByClassName("special-operator");
specialOperator[0].addEventListener('click', function(){
    operandOne = "";
    operandTwo = "";
    display.setAttribute('value', "");
    previousExpression.setAttribute('value', "");
});
specialOperator[1].addEventListener('click', function(){
    if(display.getAttribute('value') == "" || display.getAttribute('value') == "Error"){
        display.setAttribute('value', "Error");
        return;
    }   
    display.setAttribute('value', eval("-1 * " + display.getAttribute('value')));
});
specialOperator[2].addEventListener('click', function(){
    if(display.getAttribute('value') == "" || display.getAttribute('value') == "Error"){
        display.setAttribute('value', "Error");
        return;
    }   
    display.setAttribute('value', eval(display.getAttribute('value')+"/100"));
});