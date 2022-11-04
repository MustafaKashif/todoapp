var input = document.getElementById('input');
var output = document.getElementById('output');
var array = []
function addTodos(){
   var todo = {
    name : input.value,
    } 
    array.push(todo);
    output.innerHTML += `<div>
    <p class = "fs-2">${todo.name}
    <button class="ms-2 btn btn-outline-info" onclick = "deleteItem(this)">Delete</button>
    <button class="ms-2 btn btn-outline-info" onclick = "edit(this)">Edit</button>
    </p>
</div>`
input.value =  " ";
}

function deleteTodos(){
    output.innerHTML = "";
    input.value = "";
}

function deleteItem(element){
    element.parentNode.remove();
    input.value = "";
}

function edit(element){
    var inputPrompt = prompt("Enter the value that you want to edit : ");
    element.parentNode.firstChild.nodeValue = inputPrompt;
    

}
