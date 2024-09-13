

let textarea = document.getElementById("textarea");


textarea.addEventListener("input",function () {
  let  text = this.value;
  let char = text.length;
  
  document.getElementById("char").innerHTML = char;
  
  text = text.trim();
  let word = text.split(" ");
  let cleanlist = word.filter(function (elm) {
    return elm != "";
    
   } )  
   document.getElementById("word").innerHTML = cleanlist.length
    
   
})





