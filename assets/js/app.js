import { getTask, postTaks } from "./model.js";
import modal from "./modal.js";
import  required  from "./requerid.js";
const addBtn = document.querySelector('[data-btn-add]')
let taskName = document.querySelector('[data-input-nome]')
let taskDescription = document.querySelector('[data-description]')

let NewTaskList = JSON.parse(localStorage.getItem('taskList')) || [];
const newTask = () => {
    taskName.value = ''
    taskDescription.value = ''
    addBtn.addEventListener('click', () => {
        let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

        taskName.value == '' || taskDescription.value == '' ?  required.error("Por favor preencha os campos em branco")  :

            postTaks(taskList, taskName.value, taskDescription.value)
    })
}
const loadTaks = () => {
    return getTask(NewTaskList);
}

modal();
newTask();
loadTaks();
