const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container"); 
const button = document.querySelector("button");

function addTask(event) {
    if (event.key === "Enter" ||  (event.type === "click" && event.target === button)) {
        if(inputBox.value === ''){
            alert("Field cannot be left empty! ＞﹏＜");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            inputBox.value = '';
            saveData();
        }
    }
}

inputBox.addEventListener("keypress", addTask);
button.addEventListener("click", addTask);


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
        saveData();
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();