import { loadTasks, saveTasks } from './local-storage-api.js';
import refs from './refs.js';
import { renderTasks } from './render-tasks.js';
import { nanoid } from 'nanoid';


let tasks = loadTasks() || [];

export function getTasks() {
  return tasks;
}

export function addTaskForm () {
  refs.formElem.addEventListener('submit', event => {
      event.preventDefault();
    
    const name = refs.inputNameElem.value.trim();
    const description = refs.inputTextElem.value.trim();
    
      if (!name || !description) {
      alert('Please fill in all fields');
      return;

    }
    
    const newTask = {
      id: nanoid(),
      name,
      description,
    };
      tasks.push(newTask);
      saveTasks(tasks);
    renderTasks(tasks);
      refs.formElem.reset();
      
  });
  
}
 export function deleteTaskFrom(){
  refs.taskListElem.addEventListener('click', e => {
    if (!e.target.classList.contains('task-list-item-btn')) {
      return;
    }
    const taskId = e.target.dataset.id;
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks(tasks);
    renderTasks(tasks);
  }
  );
  }