import { getTask, postTaks } from "./model.js";
import modal from "./modal.js";
const addBtn = document.querySelector('[data-btn-add]')
const taskName = document.querySelector('[data-input-nome]')
const taskDescription = document.querySelector('[data-description]')

let NewTaskList = JSON.parse(localStorage.getItem('taskList')) || [];
const newTask = () => {
    addBtn.addEventListener('click', () => {
        let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
        postTaks(taskList, taskName.value, taskDescription.value)
    })
}
const loadTaks = () => {
    return getTask(NewTaskList);
}

modal();
newTask();
loadTaks();
