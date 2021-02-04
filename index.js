'use strict';

function addNewTodo() {
    const todosDiv = document.getElementById("todos")
    const newTodoDiv = document.createElement("div")
    newTodoDiv.setAttribute("class", "todo")

    const todoTextDiv = document.getElementById("todoText")

    newTodoDiv.innerHTML = `
    <span>${todoTextDiv.value}</span><button>aaa</button>
    `

    todoTextDiv.value = ""

    todosDiv.appendChild(newTodoDiv)

}

function addNewTodo(remove) {

}