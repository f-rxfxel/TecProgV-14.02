window.onload = () => {
    // alert("passo 1")
    // alert("passo 2")

    if (JSON.parse(localStorage.getItem('showTutorial')) == undefined) {
        localStorage.setItem('showTutorial', JSON.stringify(true))
        showSteps()
    } else {
        showSteps()
    }

    function showSteps() {
        if (JSON.parse(localStorage.getItem('showTutorial'))) {
            alert("passo 1")
            alert("passo 2")
            verifyTutorial()
        }
    }

}

function verifyTutorial() {
    if (confirm("deseja ver os passos novamente?")) {
        alert("mostraremos os passos");
        localStorage.setItem('showTutorial', JSON.stringify(true));
    } else {
        alert("passos não serão exibidos")
        localStorage.setItem('showTutorial', JSON.stringify(false));
    }
}

const saveBtn = document.getElementById('saveBtn')
const taskInput = document.getElementById('taskInput')
const tasks = document.getElementById('tasks')
const teste = document.getElementById('teste')

teste.addEventListener("click", () => {
    alert("passo 1")
    alert("passo 2")
    verifyTutorial()
})

saveBtn.addEventListener("click", () => {
    addTask()
})

saveBtn.addEventListener("dblclick", () => {
    alert("dbc")
})

function addTask() {
    var taskName = taskInput.value
    var div = document.createElement("div")
    div.innerText = taskName
    tasks.appendChild(div);
    taskInput.value = ""

    div.addEventListener("dblclick", () => {
        div.innerText = ""
    })

    div.style.backgroundColor = "rgb(255, 255, 255)"

    div.addEventListener("click", () => {
        if (div.style.backgroundColor == "rgb(255, 255, 255)") {
            div.style.backgroundColor = "#00FF00";
        } else {
            div.style.backgroundColor = "#FFFFFF";
        }
    })
}
