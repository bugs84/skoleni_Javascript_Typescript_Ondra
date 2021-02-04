'use strict';

class Model {
    todos = [
        new Todo("Koupit Jablka"),
        new Todo("Vyluxovat"),
        new Todo("Zalít kytky")
    ]
}

class Todo {
    constructor(text) {
        this.text = text
    }
}

const model = new Model()

console.log("MODEL")
console.log(model)


function render() {

    const todosDiv = document.getElementById("todos")
    todosDiv.innerHTML = ""

    model.todos.forEach((todo) => {
            const todoDiv = document.createElement("div")
            todoDiv.innerHTML = todo.text
            todosDiv.appendChild(todoDiv)
        }
    )


}


function addNewTodo() {
    model.todos.push(createNewTodo())
    render()
}

function createNewTodo() {
    let newTodoTextDiv = document.getElementById("todoText");
    const text = newTodoTextDiv.value
    newTodoTextDiv.value = ""
    return new Todo(text)
}

// function addNewTodo() {
//
//
//
//     const todoDiv = document.createElement("div")
//     todoDiv.setAttribute("class", "todo")
//
//     const todoTextDiv = document.getElementById("todoText")
//
//     // todoDiv.innerHTML = todoTextDiv.value
//
//     todoDiv.innerHTML = `
//     <span>${todoTextDiv.value}</span><button onclick="removeTodo(this)">delete</button>
//     `
//
//
//
//
//     todoTextDiv.value = ""
//
//     document.getElementById("todos").appendChild(todoDiv)
//
// }
//
// function removeTodo(source) {
//     // alert('delete' + source)
//     // source.closest(".todo").remove
//     findAncestor(source, "todo").remove()
// }


function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls)) ;
    return el;
}