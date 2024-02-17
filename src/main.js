var taskInput = document.getElementById("task-name");
var taskDetails = document.getElementById("task-details");
;
var storedTask = document.getElementById("task-container");
var tasks = [];
function addTask() {
    if (!taskInput.value || !taskDetails.value) {
        alert("Please enter a task");
        return; // Early return if no input
    }
    // Generate unique task ID
    var taskId = Math.random().toString(36).substring(2, 15);
    // Create task object
    var task = {
        title: taskInput.value,
        description: taskDetails.value,
        id: taskId,
    };
    // Add task to the tasks array
    tasks.push(task);
    // Clear input fields
    taskInput.value = "";
    taskDetails.value = "";
    // Display tasks using .map()
    displayTasks();
}
function displayTasks() {
    // Clear the container first
    storedTask.innerHTML = "";
    // Map tasks to elements and append them
    tasks.map(function (task) {
        var title = document.createElement("h3");
        var description = document.createElement("p");
        title.innerHTML = task.title;
        description.innerHTML = task.description;
        storedTask.appendChild(title);
        storedTask.appendChild(description);
    });
}
