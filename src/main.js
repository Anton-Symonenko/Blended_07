import refs from './js/refs.js';

import { addTask, deleteTask, initTasks } from './js/tasks.js';

import { saveTheme, loadTheme } from './js/theme-switcher.js';

initTasks();

const currentTheme = loadTheme();

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
}

refs.formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const title = refs.inputNameElem.value.trim();

  const text = refs.inputTextElem.value.trim();

  if (!title || !text) {
    alert('Please fill in all fields');

    return;
  }

  addTask(title, text);

  refs.formElem.reset();
}

refs.taskListElem.addEventListener('click', onDeleteTask);

function onDeleteTask(event) {
  if (event.target.classList.contains('task-list-item-btn')) {
    const id = event.target.dataset.id;

    deleteTask(id);
  }
}

refs.themeBtnElem.addEventListener('click', toggleTheme);

function toggleTheme() {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');

  saveTheme(isDark ? 'dark' : 'light');
}
