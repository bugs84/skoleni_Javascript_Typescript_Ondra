'use strict';

class Model {
    todos = new Map()

    addTodo = (todo) => {
        this.todos.set(todo.id, todo)
    }

    removeTodo = (id) => {
        this.todos.delete(id)
    }

}

class Todo {
    constructor(text) {
        this.id = generateId()
        this.text = text
    }
}

const model = new Model()
model.addTodo(new Todo("Koupit Jablka"))
model.addTodo(new Todo("Vyluxovat"))
model.addTodo(new Todo("Zalít kytky"))


console.log("MODEL")
console.log(model)


function render() {

    const todosDiv = document.getElementById("todos")
    todosDiv.innerHTML = ""

    model.todos.forEach((todo) => {
            const todoDiv = document.createElement("div")
            todoDiv.innerHTML = `
            <span>${todo.text}</span><button onclick="removeTodo('${todo.id}')">delete</button>
            `
            todosDiv.appendChild(todoDiv)
        }
    )


}


function addNewTodo() {
    model.addTodo(createNewTodo())
    render()
}

function createNewTodo() {
    let newTodoTextDiv = document.getElementById("todoText");
    const text = newTodoTextDiv.value
    newTodoTextDiv.value = ""
    return new Todo(text)
}


function removeTodo(id) {
    model.removeTodo(id)
    render()
}


function generateId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
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