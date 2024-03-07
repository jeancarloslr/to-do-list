const btnAddTask = document.querySelector('#btn-ntask');
const task = document.querySelector('#impt-new-task');
let tarefas = JSON.parse(localStorage.getItem('tasks')) || [];
let lista = document.querySelector('#to-do-list');

function createTask(tarefa){
    const li = document.createElement('li');
    li.classList.add('liTarefa');
    const paragrafo = document.createElement('p');
    paragrafo.append(tarefa.descricao);
    li.append(paragrafo);
    return li;
}

btnAddTask.addEventListener('click', () =>{
    const tarefa = {
        descricao: task.value
    }
    tarefas.push(tarefa);
    localStorage.setItem('tasks', JSON.stringify(tarefas));
    let elementoTarefa = createTask(tarefa);
    lista.append(elementoTarefa);
});

tarefas.forEach(tarefa => {
    const elementoTask = createTask(tarefa);
    lista.append(elementoTask);
});