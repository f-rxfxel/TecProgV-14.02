const saveBtn = document.getElementById('saveBtn')
const taskInput = document.getElementById('taskInput')
const tasks = document.getElementById('tasks')
saveBtn.addEventListener("click", ()=>{
    addTask()
})

function addTask() {
    var taskName = taskInput.value
    var div = document.createElement("div")
    div.innerText = taskName
    tasks.appendChild(div);
    taskInput.value = ""
}
