import refs from './refs.js';
import { markupTasks } from './markup-tasks.js';


export function renderTasks(tasks) {
    refs.taskListElem.innerHTML = '';
    
  const markup = tasks.map(task => markupTasks(task)).join('');
  refs.taskListElem.insertAdjacentHTML(`beforeend`, markup);


}
