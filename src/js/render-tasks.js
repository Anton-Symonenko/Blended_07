import refs from './refs';
import { markupTasks } from './markup-tasks';

export function renderTasks(tasks, onDelete) {
  const markup = tasks.map(task => markupTasks(task)).join('');
  refs.taskListElem.innerHTML = markup;
}
