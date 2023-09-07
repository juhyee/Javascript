const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDos = []

const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))

}

function deleteToDo(e) {
    const li = e.target.parentNode
//    console.log(li.id)
    li.remove()
    toDos = toDos.filter(item => item.id !== parseInt(li.id))
    saveToDos()
}

function paintToDo(newToDo){
    const li = document.createElement('li')
    li.id = newToDo.id
    const span = document.createElement('span')
    span.innerText = newToDo.text;
    const button = document.createElement('button')
    button.innerText = '❌'
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener('click', deleteToDo)
    toDoList.appendChild(li)

}

function handleToDoSubmit (e){
    e.preventDefault()
    // console.log(toDoInput.value)
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj)
    // console.log(toDoInput.value, newToDo)
    paintToDo(newToDoObj);
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}
