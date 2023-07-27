
function addTask() {
    let ul = document.querySelector("#itensList");
    
    let taskName = document.querySelector("#taskName").value;

    if (taskName.trim() === ''){
        alert('Digite o nome da tarefa!')
    }else{
        
        let newLi = document.createElement("li");
    newLi.className = "task";
    newLi.innerText = taskName;
    
    let newButton = document.createElement("button");
    newButton.className = "removeTaskBtn";
    newButton.innerText = "Feito";
    newButton.addEventListener("click", removedLi);
    
    newLi.appendChild(newButton);
    ul.appendChild(newLi);
    document.querySelector('#taskName').value = ""
    }
    
    
}

function removedLi() {
  let LiToRemove = this.parentNode;
  let ul = LiToRemove.parentNode
  ul.removeChild(LiToRemove);

}