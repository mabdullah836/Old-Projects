let input = document.getElementById("input");
let ul = document.getElementById("xyz");
// let edit = document.getElementById("editable");
// console.log(edit)

function btnClick() {
    if (input.value === "") {
        alert("Please Write Something")
    } else {
        let li = document.createElement("li");
        let liText = document.createTextNode(input.value);
        li.appendChild(liText);
        input.value = "";
        let deleteBtn = document.createElement("button");
        let deleteText = document.createTextNode("DELETE");
        deleteBtn.appendChild(deleteText);
        li.appendChild(deleteBtn);
        deleteBtn.setAttribute("Class","stlyBtn")
        deleteBtn.setAttribute("onclick", "deltBtn(this)")
        let editBtn = document.createElement("button");
        let editText = document.createTextNode("EDIT");

        editBtn.appendChild(editText);
        li.appendChild(editBtn);
        editBtn.setAttribute("Class","stlyBtn2")

        editBtn.setAttribute("onclick", "editable(this)")
        ul.appendChild(li);
    }
}



function deltBtn(e) {
    e.parentNode.remove()
}
function editable(e) {
    let updtValue = prompt("Enter Edit Value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = updtValue;


}
function deleteAll(e) {
    ul.innerHTML = "";
}