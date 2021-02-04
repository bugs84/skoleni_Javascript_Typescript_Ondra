'use strict';

// MODEL
class Model {
    todos = new Map() //map is not best if we want change order of todos, but i want try to use Map

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

// STORAGE
class Storage {
    saveModel = (model) => {
        const value = JSON.stringify(Array.from(model.todos.entries())); // ouch :(
        localStorage.setItem('todos', value)
    }

    loadModel = () => {
        const model = new Model()
        const todosString = localStorage.getItem('todos');
        try {
            const todos = JSON.parse(todosString)
            // if(typeof new Map() === todos) {
                model.todos = new Map(todos)
            // } else {
            //     model.todos = new Map()
            // }

        } catch (e) {
            console.error(e)
            model.addTodo(new Todo("Koupit Jablka"))
            model.addTodo(new Todo("Vyluxovat"))
            model.addTodo(new Todo("Zalít kytky"))
        }
        return model
    }
}

// APPLICATION
const storage = new Storage()

const model = storage.loadModel()

function saveModel() {
    storage.saveModel(model)
}

function render() {

    const todosDiv = document.getElementById("todos")
    todosDiv.innerHTML = ""

    model.todos.forEach((todo) => {
            const todoDiv = document.createElement("div")

            //TODO udelat create elementy
            const textSpan = document.createElement("span")
            textSpan.textContent = todo.text
            todoDiv.appendChild(textSpan)

            const removeButton = document.createElement("button")
            removeButton.setAttribute("onclick", `removeTodo("${todo.id}")`)
            removeButton.textContent = "delete"
            todoDiv.appendChild(removeButton)
        
            todosDiv.appendChild(todoDiv)
        }
    )


}


function addNewTodo() {
    model.addTodo(createNewTodo())
    render()
    saveModel()
}

function createNewTodo() {
    const newTodoTextDiv = document.getElementById("todoText");
    const text = newTodoTextDiv.value
    newTodoTextDiv.value = ""
    return new Todo(text)
}


function removeTodo(id) {
    model.removeTodo(id)
    render()
    saveModel()
}


function generateId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}
