const fieldForm = document.querySelector('[data-form]');
const newTask = document.querySelector('[data-btn-tarefa]');
const btnClosed = document.querySelector('[data-btn-closed]');


const modal =()=>{
    newTask.addEventListener('click',()=>{
        fieldForm.style.display = 'flex'
    })
    
    btnClosed.addEventListener('click',()=>{
        fieldForm.style.display = 'none'
    })

}

export default modal;