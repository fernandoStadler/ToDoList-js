
const cardList = document.querySelector('[data-task-list]');
import requerid from "./requerid.js";

let formEdit = document.querySelector('[data-edit]');
let title = document.querySelector('[data-edit-title]');
let description = document.querySelector('[data-edit-description]');

const postTaks = (TaskArray, taskTitle, taskDescription) => {
    const uuid = uuidv4();
    let NewArrayTasks = {
        id: uuid,
        title: taskTitle,
        description: taskDescription
    }

    TaskArray = JSON.parse(localStorage.getItem('taskList')) || [];
    TaskArray.push(NewArrayTasks);
    localStorage.setItem('taskList', JSON.stringify(TaskArray));
    window.location.reload();
}
const updatedTasks = (task, TaskArray) => {
    task.title = title.value;
    task.description = description.value;
    console.log(task);
    window.location.reload();
    localStorage.setItem('taskList', JSON.stringify(TaskArray));
}

const deleteTask = (taskId) => {
    const taskArray = JSON.parse(localStorage.getItem('taskList')) || [];
    const updatedTasks = taskArray.filter(task => task.id != taskId);
    localStorage.setItem('taskList', JSON.stringify(updatedTasks));
    window.location.reload();
}

const getTask = (task) => {
    task.length < 1 ? cardList.innerHTML = `<p>Não há atividades a serem exibidas</p>` :

        task.forEach(element => {
            cardList.innerHTML += `
            <div class="card" id="taskList">
            <p style="display:none">${element.id}</p>
                <div class="card-header">
                    <h2>${element.title}</h2>
                </div>
                <div class="card-fields">
                    <div class="card-body">
                        <span>Descrição</span>
                        <p>${element.description}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <button data-btn-edit><i class="fa-solid fa-pen-to-square"></i></button>
                    <button data-btn-delete><i class="fa-solid fa-trash-can"></i></button>
                    </div>
            </div>
        `;
            const btnDeleteList = document.querySelectorAll(`[data-btn-delete]`);
            btnDeleteList.forEach(btnDelete => {
                btnDelete.addEventListener('click', (event) => {
                    const id = event.target.closest('.card').querySelector('p').textContent;
                    deleteTask(id);
                });
            });

            const btnClosed = document.querySelector('[data-btn-closed-edit]');
            btnClosed.addEventListener('click', () => {
                formEdit.style.display = 'none';
            })

            const btnEditList = document.querySelectorAll(`[data-btn-edit]`);
            btnEditList.forEach(btnEdit => {

                btnEdit.addEventListener('click', (event) => {
                    formEdit.style.display = 'flex';
                    const id = event.target.closest('.card').querySelector('p').textContent;
                    const taskArray = JSON.parse(localStorage.getItem('taskList'));
                    const taskToUpdate = taskArray.find(task => task.id === id);

                    if (taskToUpdate) {
                        title.value = taskToUpdate.title;
                        description.value = taskToUpdate.description;
                        const btnUpdate = document.querySelector('[data-btn-AddEdit]');
                        btnUpdate.addEventListener('click', () => {
                            title.value == '' || description.value == '' ?
                                requerid.error("Por favor, preencha todos os campos") :
                                updatedTasks(taskToUpdate,taskArray);
                        });
                    }
                });

            });

        });
}


export {
    getTask,
    postTaks,
    deleteTask
}

