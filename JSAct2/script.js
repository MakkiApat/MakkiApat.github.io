const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
let taskCount = 0;

addTaskButton.addEventListener('click', () => {
    const task = taskInput.value.trim();

    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    if (taskCount >= 3) {
        alert('Task limit reached. Cannot add more tasks.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = task;
    taskList.appendChild(listItem);
    taskInput.value = '';
    taskCount++;
});