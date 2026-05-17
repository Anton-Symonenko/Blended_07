import { saveTasks, loadTasks } from './local-storage-api';
import { renderTasks } from './render-tasks';
import { nanoid } from 'nanoid';

let tasks = loadTasks();

export function initTasks() {
  renderTasks(tasks);
}

export function addTask(title, text) {
  const newTask = {
    id: nanoid(),
    title,
    text,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks(tasks);
}

export function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks(tasks);
  renderTasks(tasks);
}
