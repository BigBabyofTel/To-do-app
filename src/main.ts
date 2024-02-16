let taskInput = document.getElementById("task-name") as HTMLInputElement;
let taskDetails = document.getElementById("task-details") as HTMLInputElement;
let storedTask = document.getElementById("task-container") as HTMLElement;

const tasks: { title: string; description: string }[] = [];

function addTask(): void {
  if (taskInput.value && taskDetails.value === "") {
    alert("Please enter a task");
  } else {
    //stores the task
    const task = {
      title: taskInput.value,
      description: taskDetails.value,
    };
    //adds task object to the tasks array
    tasks.push(task);

    //create elements for each task
    const title = document.createElement("h3");
    const description = document.createElement("p");
    //set elements to inputs
    title.innerHTML = task.title;
    description.innerHTML = task.description;
    //append to display div
    storedTask.appendChild(title);
    storedTask.appendChild(description);
  }
  taskInput.value = "";
  taskDetails.value = "";
}
