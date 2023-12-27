document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  addTaskBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  function addTask() {
    const taskValue = taskInput.value.trim();
    if (taskValue !== '') {
      const taskBox = document.createElement('div');
      taskBox.className = 'task-box';

      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.value = taskValue;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '-';
      deleteButton.addEventListener('click', function () {
        deleteTask(taskBox);
      });

      taskBox.appendChild(inputField);
      taskBox.appendChild(deleteButton);
      taskList.appendChild(taskBox);

      inputField.addEventListener('focus', function () {
        inputField.removeAttribute('readonly');
      });

      inputField.addEventListener('blur', function () {
        inputField.setAttribute('readonly', true);
      });

      taskInput.value = '';
    }
  }

  function deleteTask(taskBox) {
    taskList.removeChild(taskBox);
  }
});
