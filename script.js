const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function createTaskRow(taskText) {
  const tr = document.createElement('tr');
  tr.classList.add('task');

  const taskCell = document.createElement('td');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskCell.appendChild(taskSpan);

  const actionCell = document.createElement('td');

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.classList.add('done-btn');

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');

  doneBtn.addEventListener('click', () => {
    taskSpan.classList.toggle('completed');
  });

  removeBtn.addEventListener('click', () => {
    tr.remove();
  });

  actionCell.appendChild(doneBtn);
  actionCell.appendChild(removeBtn);

const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function createTaskRow(taskText) {
  const tr = document.createElement('tr');
  tr.classList.add('task');

  const taskCell = document.createElement('td');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskCell.appendChild(taskSpan);

  const actionCell = document.createElement('td');

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.classList.add('done-btn');

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');

  doneBtn.addEventListener('click', () => {
    taskSpan.classList.toggle('completed');
  });

  removeBtn.addEventListener('click', () => {
    tr.remove();
  });

  actionCell.appendChild(doneBtn);
  actionCell.appendChild(removeBtn);

  tr.appendChild(taskCell);
  tr.appendChild(actionCell);

  return tr;
}

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const newRow = createTaskRow(taskText);
  taskList.appendChild(newRow);
  taskInput.value = '';
});  tr.appendChild(taskCell);
  tr.appendChild(actionCell);

  return tr;
}

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const newRow = createTaskRow(taskText);
  taskList.appendChild(newRow);
  taskInput.value = '';
});
