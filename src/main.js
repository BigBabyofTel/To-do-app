var taskInput = document.getElementById("task-name");
var taskDetails = document.getElementById("task-details");
var storedTask = document.getElementById("task-container");
var tasks = [];
function addTask() {
    if (taskInput.value && taskDetails.value === "") {
        alert("Please enter a task");
    }
    else {
        //stores the task
        var task = {
            title: taskInput.value,
            description: taskDetails.value,
        };
        //adds task object to the tasks array
        tasks.push(task);
        //create elements for each task
        var title = document.createElement("h3");
        var description = document.createElement("p");
        //set elements to inputs
        title.innerHTML = task.title;
        description.innerHTML = task.description;
        //append to display div
        storedTask.innerHTML = '';
        storedTask.appendChild(title);
        storedTask.appendChild(description);
    }
    taskInput.value = "";
    taskDetails.value = "";
}
