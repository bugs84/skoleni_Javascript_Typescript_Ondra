'use strict';

// MODEL
class Model {
    //TODO make private
    todos = new Map() //map is not best if we want change order of todos, but i want try to use Map

    addTodo = (todo: Todo) => {
        this.todos.set(todo.id, todo)
    }

    removeTodo = (id: string) => {
        this.todos.delete(id)
    }

}

class Todo {
    id: string
    text: string

    constructor(text: string) {
        this.id = generateId()
        this.text = text
    }
}

// STORAGE
class StorageService {
    storageDao: ServerStorageDao  //TODO interface

    constructor(storageDao: ServerStorageDao) {
        this.storageDao = storageDao
    }

    saveModel = (model: Model) => {
        const value = JSON.stringify(Array.from(model.todos.entries())); // ouch :(

        this.storageDao.saveTodos(value)
    }

    loadModel = () => {

        this.storageDao.loadTodos().then((todosString) => {
            try {
                const todos = JSON.parse(todosString)
                model.todos = new Map(todos)
                render()
            } catch (e) {
                console.error(e)
                model.addTodo(new Todo("Koupit Jablka"))
                model.addTodo(new Todo("Vyluxovat"))
                model.addTodo(new Todo("Zalít kytky"))
            }
        })

    }
}

class LocalStorageDao {

    private static localStorageKey = 'todos';
    
    saveTodos = (todosString: string) => {
        localStorage.setItem(LocalStorageDao.localStorageKey, todosString)
    }

    loadTodos = () => {
        return new Promise<string>(resolve => {
            const todosString = localStorage.getItem(LocalStorageDao.localStorageKey) ?? "";
            resolve(todosString)
        })
    }
}

class ServerStorageDao {

    saveTodos = (todosString: string) => {
        fetch("/todos", {
            method: "POST",
            body: todosString
        }).then(res => {
            console.debug("Todos saved!")
        })
    }

    loadTodos = () => {
        return new Promise<string>(resolve => {
                fetch("/todos", {
                    method: "GET"
                }).then(res => {
                    resolve(res.text())
                })
            }
        )
    }
}


// APPLICATION


// const storageDao = new LocalStorageDao() //THIS CAN BE EXCHANGED
const storageDao = new ServerStorageDao() //THIS CAN BE EXCHANGED

const storage = new StorageService(storageDao)

const model = new Model()

function saveModel() {
    storage.saveModel(model)
}

function initialDataLoad() {
    storage.loadModel()
}

function render() {

    const todosHtmlId = "todos";
    const todosDiv = document.getElementById(todosHtmlId)// ?? throw new Error(`Illegal state. Element with id '${todosHtmlId}' not wound`);
    if (todosDiv === null) { //TODO why elvis doesn't work
        throw new Error("AA")
    }
    todosDiv.innerHTML = ""

    model.todos.forEach((todo) => {
            const todoDiv = document.createElement("div")

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
    const newTodoTextDiv = document.getElementById("todoText") as HTMLInputElement;
    const text = newTodoTextDiv.value
    newTodoTextDiv.value = ""
    return new Todo(text)
}


function removeTodo(id: string) {
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
