
import { getTasks, addTaskForm, deleteTaskFrom } from './js/tasks.js';
import { renderTasks } from './js/render-tasks.js';


renderTasks(getTasks());

addTaskForm();

deleteTaskFrom();
