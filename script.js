const btnAddTask = document.querySelector('#btn-ntask');
const task = document.querySelector('#impt-new-task');
const btnDeleteAll = document.querySelector('.deletarTodas');
const btnDeleteConcluidas = document.querySelector('.deletarConcluidas')
let lista = document.querySelector('#to-do-list');
let tarefas = JSON.parse(localStorage.getItem('atividades')) || []
let tarefasCompletas = [];
let tarefaCompleta = null;
let buttonDisabled = null;

function atualizarTask(){
    localStorage.setItem('atividades', JSON.stringify(tarefas));
}

function createTask(tarefa) {

    const li = document.createElement('li');
    li.classList.add('liTarefa');
    
    const paragrafo = document.createElement('p');

    const circle = document.createElement('button');
    circle.classList.add('btn');
    
    const iconDone = document.createElement('img');
    iconDone.setAttribute('src', 'img/done-icon.svg');
    iconDone.classList.add('iconDone');
    circle.append(iconDone);

    paragrafo.append(tarefa.descricao);
    li.append(paragrafo);
    li.append(circle);

    if(tarefa.completa){
        tarefaCompleta = tarefa.completa;
        circle.setAttribute('disabled', 'disabled');
        circle.classList.add("btnDisabled");
        li.classList.add('completed');

    }else{
        circle.addEventListener('click', () =>{
            tarefa.completa = true;
            li.classList.add('completed');
            circle.classList.add("btnDisabled")
            atualizarTask()
        })
    }
    return li;
}

btnAddTask.addEventListener('click', () =>{
    if(!task.value){
        return;
    }else{
        const tarefa = {
            descricao: task.value
        }
        tarefas.push(tarefa);
        atualizarTask()
        let elementoTarefa = createTask(tarefa);
        lista.append(elementoTarefa);
    }
});

tarefas.forEach(tarefa => {
    const elementoTask = createTask(tarefa);
    lista.append(elementoTask);
});

btnDeleteAll.addEventListener("click", () =>{
    lista.remove();
    tarefas = [];
    atualizarTask();
});

btnDeleteConcluidas.addEventListener('click', () =>{
    const seletorConcluida = '.completed';
    document.querySelectorAll(seletorConcluida).forEach(elemento =>{
        elemento.remove();
    });
    tarefas = tarefas.filter(tarefa => !tarefa.completa);
    atualizarTask();
})










