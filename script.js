btn = document.getElementById('btn-ntask');
btn.addEventListener('click', newTask);
let values = [];

function newTask(){

 let impt = document.getElementById('impt-new-task');

    //validation
    if(!impt.value){
        alert('Nenhuma task foi inserida.');
    }

    //else if()

    else{

        values.push({
            name: impt.value
        })
        impt.value = '';
        
        ShowValues()
        console.log(values);
        

    }

    }

    function ShowValues(){

        list = document.getElementById('to-do-list')
        list.innerHTML = '';
    
        
        for(let i = 0; i <= values.length; i++){ //percorrer all elementos(array)

            list.innerHTML += `<li>${values[i]['name']}</li> <button id='btn-ok' onclick = "removeItem(${values[1]['name']})">ok</button>`
        }

    }

    function removeItem(data){
        console.log(data);

    }


