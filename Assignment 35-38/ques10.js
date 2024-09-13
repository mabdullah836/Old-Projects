var word = prompt("Enter a word")
var check = "";
function palindrome() {
    let userinput = word.toLowerCase();
    for( var i=userinput.length -1;i>=0;i--){
        check += userinput[i];
    }if(check === userinput){
        alert(userinput + " is Palidrome word")
    }else{
        alert("This is not Palidrome word")
    }
}
palindrome();