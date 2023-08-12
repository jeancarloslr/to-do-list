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

        impt.style.borderColor = "red";
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
        
        for(let pos in values){ 

            list.innerHTML += `<li>${values[pos]} <button id='btn' onclick='removeItem("${values[pos]}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg></button></li>`

        }

       
    }

    function removeItem(index){
        
      values.splice(index, 1)
      ShowValues(); 

      }
    

  

