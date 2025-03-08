const dropdown = document.getElementById("category")
const boardNames = document.querySelectorAll(".board-names")
const createTaskButton = document.getElementById("create-task-button")
const taskButtonContainer = document.getElementById("task-button-container")
const mainContainer = document.querySelector(".main-containers")
boardNames.forEach((boardName) =>{
    attachNewBoardToDropDown(boardName)
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
    const tasksContainer = document.querySelectorAll(".tasks-container")
    tasksContainer.forEach((taskContainer)=>{
        if(category === taskContainer.id)
        {
            taskContainer.appendChild(taskDiv)
        }
        attachDragEvents(taskDiv);
    })

})

const createBoardButton = document.getElementById("create-board-button")
createBoardButton.addEventListener("click",()=>{
    const headerDescription = document.getElementById("board-description").value
    if(headerDescription === "")
    {
        alert("Enter board heading")
        return;
    }
    const boardDiv = document.createElement('div')
    boardDiv.className = "board-container"
    const header = document.createElement('h2')
    header.innerText = headerDescription
    const tasksContainer = document.createElement('div')
    tasksContainer.className = "tasks-container"
    tasksContainer.id = headerDescription
    attachDragEventsToTaskContainer(tasksContainer)
    boardDiv.appendChild(header)
    boardDiv.appendChild(tasksContainer);
    attachNewBoardToDropDown(boardDiv)
    mainContainer.insertBefore(boardDiv,taskButtonContainer)
})

const allTaskContainer = document.querySelectorAll(".tasks-container")
    allTaskContainer.forEach((taskContainer)=>{
        attachDragEventsToTaskContainer(taskContainer)
    })

function attachNewBoardToDropDown(targetBoard)
{   
    const targetBoardDescription  = targetBoard.querySelector("h2").innerText;
    const category = document.createElement('option');
    category.value = category.innerText = targetBoardDescription;
    dropdown.appendChild(category)
}

function attachDragEventsToTaskContainer(target)
{
    target.addEventListener('dragover',()=>{
        const flyingElement = document.querySelector(".flying")
        target.appendChild(flyingElement)
    })
}

const themeToggleButton = document.getElementById("theme-toggle")
themeToggleButton.addEventListener("click",()=>{
    
    if(themeToggleButton.innerText === "🌙 Dark Mode")
    {
        themeToggleButton.innerText = "☀️ Light Mode"
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        
        addBorderOnAllTasks("white")
    }
    else{
        themeToggleButton.innerText = "🌙 Dark Mode"
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        addBorderOnAllTasks("black")
    }
    
})

function allTasks() {
    return document.querySelectorAll(".task-container");
}
function addBorderOnAllTasks(color)
{
    const allTasksInDom = allTasks()
    if(allTasksInDom === null)
    {
        return;
    }
    allTasksInDom.forEach((tasks) =>{
        tasks.style.border = `2px solid ${color}`;
    })
}