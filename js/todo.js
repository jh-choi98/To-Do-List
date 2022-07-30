const TODOS_KEY = "todos";

const toDoBox = document.getElementById("todo");
const toDoForm = document.getElementById("todo__form");
const toDoInput = document.querySelector("#todo__form input");
const toDoList = document.getElementById("todo__list");
const toDoBtn = document.querySelector("#todo-btn");

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function compleToDo(event) {
    const li = event.target.parentElement;
    li.classList.toggle("line-through");
}
function addToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const buttonCompl = document.createElement("button");
    buttonCompl.innerText = "✅"
    buttonCompl.addEventListener("click", compleToDo);
    const buttonDel = document.createElement("button");
    buttonDel.innerText = "❌";
    buttonDel.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(buttonCompl);
    li.appendChild(buttonDel);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    addToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach(addToDo);
}

function showToDoList() {
    toDoBox.classList.toggle("hidden");
}
toDoBtn.addEventListener("click", showToDoList);
