btn = document.getElementById('btn-ntask');
btn.addEventListener('click', newTask);
let values = [];

function newTask(){

 let impt = document.getElementById('impt-new-task');
 impt.style.borderColor = '';


    function inLista(imptvalue, valores){

        if(valores.indexOf(imptvalue) != -1){

            return true;

        }else{
            return false;
        }

    }  

    //validation
    if(!impt.value){

        impt.style.borderColor = "red";
        alert('insira alguma task.')
    }

    else if(inLista(impt.value, values)){

        alert('digite uma tarefa que não esteja na lista');

    }

    else{

        values.push(impt.value);
        impt.value = '';
        impt.focus();
        
        ShowValues()
    }

    }

    function ShowValues(){

        list = document.getElementById('to-do-list')
        list.innerHTML = '';
        
        for(let pos in values){ //percorrer all elementos(array)

            list.innerHTML += `<li>${values[pos]} <button id='btn' onclick='removeItem("${values[pos]}")'>ok</button></li>`

        }

        console.log(values);
    }

    function removeItem(index){
        
      values.splice(index, 1)
      ShowValues(); 

      }
    

  

