'use strict';

function addNewTodo() {



    const todoDiv = document.createElement("div")
    todoDiv.setAttribute("class", "todo")

    const todoTextDiv = document.getElementById("todoText")

    // todoDiv.innerHTML = todoTextDiv.value

    todoDiv.innerHTML = `
    <span>${todoTextDiv.value}</span><button onclick="removeTodo(this)">delete</button>
    `

    
    
    
    todoTextDiv.value = ""
    
    document.getElementById("todos").appendChild(todoDiv)

}

function removeTodo(source) {
    // alert('delete' + source)
    // source.closest(".todo").remove
    findAncestor(source, "todo").remove()
}


function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}