const dropdown = document.getElementById("category")
const boardNames = document.querySelectorAll(".board-names")
const createTaskButton = document.getElementById("create-task-button")
const tasksContainer = document.querySelectorAll(".tasks-container")
boardNames.forEach((boardName) =>{
    const category = document.createElement('option');
    category.value = category.innerText = boardName.innerText;
    dropdown.appendChild(category)
})


createTaskButton.addEventListener("click",()=>{
    const category = document.getElementById("category").value
    if(category === "")
    {
        alert("Select a category")
        return;
    }
    const description = document.getElementById("task-description").value
    const taskDiv = document.createElement('div')
    taskDiv.setAttribute('draggable', true);
    taskDiv.className = "task-container"
    const taskHeader = document.createElement('h3')
    taskHeader.innerText = description;
    taskDiv.appendChild(taskHeader)
    tasksContainer.forEach((taskContainer)=>{
        if(category === taskContainer.id)
        {
            taskContainer.appendChild(taskDiv)
        }
        attachDragEvents(taskDiv);
    })

    function attachDragEvents(target)
    {
        target.addEventListener('dragstart', ()=>{
            target.classList.add('flying')
        })
        target.addEventListener('dragend',()=>{
            target.classList.remove('flying')
        })
    }
    
    const allTaskContainer = document.querySelectorAll(".tasks-container")
    allTaskContainer.forEach((taskContainer)=>{
        taskContainer.addEventListener('dragover',()=>{
            const flyingElement = document.querySelector(".flying")
            taskContainer.appendChild(flyingElement)
        })
    })
})

