let input = document.getElementById("input-box");
let ul = document.getElementById("li")
function clickBtn() {
   if (input.value === "") {
      alert("Please Write Something!")
   } else {


      // creating list Element and textNode

      var list = document.createElement("li");
      var text = document.createTextNode(input.value);
      list.appendChild(text);
   }

   // creating delete button and textNode

   let delbtn = document.createElement("button");
   let deltext = document.createTextNode("Delete");
   delbtn.setAttribute("onclick", "delBtn(this)")
   delbtn.appendChild(deltext);
   delbtn.setAttribute("class","stylebtn2")

   // Creating Edit Button 
    let edtBtn = document.createElement("button");
    let edtBtnTxt = document.createTextNode("Edit");
    edtBtn.appendChild(edtBtnTxt);
    edtBtn.setAttribute("onclick","edtBtn(this)")
    edtBtn.setAttribute("class","stylebtn")
    list.appendChild(edtBtn)

   
   list.appendChild(delbtn);

   ul.appendChild(list);

   input.value = "";
   // saveData();



}
function delBtn(e) {
   e.parentNode.remove();
   // saveData()
}
function edtBtn(e) {
   let updtValue = prompt("Enter Edit Value", e.parentNode.firstChild.nodeValue);
   e.parentNode.firstChild.nodeValue = updtValue;
}

// function saveData() {
//    localStorage.setItem("Mydata",li.innerHTML)
// }
// function showTask() {
//    li.innerHTML = localStorage.getItem("Mydata")
// }
// showTask();