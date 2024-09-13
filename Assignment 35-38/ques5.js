var num1 = +prompt("Enter a number for square ")

function square() {
    if(isNaN(num1)){
        alert("Enter a valid Number")
    }else{
        const sqar = num1*num1
        return sqar
    }
}
var result = square()
alert(result)