'use strict';

function addNewTodo() {



    const todoDiv = document.createElement("div")
    // todoDiv.setAttribute("class", "todo")

    const todoTextDiv = document.getElementById("todoText")

    todoDiv.innerHTML =todoTextDiv.value

    // todoTextDiv.value = ""


    document.getElementById("todos").appendChild(todoDiv)

}

// function addNewTodo(remove) {
//
// }