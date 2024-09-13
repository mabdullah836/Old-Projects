

var firstNum = +prompt("Enter a First Number")
var secondNum = +prompt("Enter a Second Number")

function addition() {
    if(isNaN(firstNum) || isNaN(secondNum)){
      return "Enter a Valid Number"
    }else{
        const add = firstNum + secondNum
        return add
    }
}
var result = addition();
alert(result)