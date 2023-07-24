const localStorageName = 'to-do-list';
btn = document.getElementById('btn-ntask');

btn.addEventListener('click', newTask);

function newTask(){

let impt = document.getElementById('impt-new-task');
let list = document.getElementById('to-do-list');

    //validation
    if(!impt.value){
        alert('Nenhuma task foi inserida.');
    }
    //else if()

    else{

        //incremeent to LocalStorage.
        let values = JSON.parse(localStorage.getItem(localStorageName));

        values.push({
            name: impt.value
        })

    }

    }


