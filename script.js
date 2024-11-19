const tasks = document.getElementById('tasks');
const newTask = document.getElementById('new-task');
const addTask = document.getElementById('add-task');

addTask.addEventListener('click', () => {
    const taskText = newTask.value;
    if (taskText.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        tasks.appendChild(li);
        newTask.value = '';
    }
});
