interface Task {
  title: string;
  description: string;
  id: string;
}

const taskInput = document.getElementById("task-name") as HTMLInputElement;
const taskDetails = document.getElementById("task-details") as HTMLInputElement;;
const storedTask = document.getElementById("task-container") as HTMLElement;
const btn = document.getElementById("button") as HTMLButtonElement;

const tasks: Task[] = [];

function addTask(): void {
  if (!taskInput.value || !taskDetails.value) {
    alert("Please enter a task");
    return; // Early return if no input
  }

  // Generate unique task ID
  const taskId = Math.random().toString(36).substring(2, 15);

  // Create task object
  const task: Task = {
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

function displayTasks(): void {
  // Clear the container first
  storedTask.innerHTML = "";

  // Map tasks to elements and append them
  tasks.map((task: Task) => {
    const title = document.createElement("h3");
    const description = document.createElement("p");
    title.innerHTML = task.title;
    description.innerHTML = task.description;
    storedTask.appendChild(title);
    storedTask.appendChild(description);
  });
}
btn.addEventListener('click', addTask);