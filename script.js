const btnAddTask = document.querySelector('#btn-ntask');
const task = document.querySelector('#impt-new-task');
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
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
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    let elementoTarefa = createTask(tarefa);
    lista.append(elementoTarefa);
});