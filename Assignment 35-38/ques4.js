var num1 = +prompt("Enter a first number ")
var operator = prompt(`ENTER the operator { + , - , * , / }`)
var num2 = +prompt("Enter a second number ")

function calculate() {
    if(isNaN(num1)|| isNaN(num2)){
        alert("Please Enter a valid Number")
    }else if(operator=== '+'){
        alert(num1+num2)
    }else if(operator=== '-'){
        alert(num1-num2)
    }else if(operator=== '*'){
        alert(num1*num2)
    }else if(operator==='/'){
        alert(num1/num2)
    }else{
        alert(" Please Enter a valid operator")
    }
}
calculate()