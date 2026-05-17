// import { loadTasks, saveTasks } from './local-storage-api';
// import refs from './refs';
// import { renderTasks } from './render-tasks';
// import { nanoid } from 'nanoid';

// let tasks = loadTasks();

// export function getTasks() {
//   return tasks;
// }

// export function addTask(tasks, onAdd) {
//   refs.addBtnElem.addEventListener('submit', event => {
//     event.preventDefault();
//     const newTask = {
//       id: nanoid(),
//       name: refs.inputNameElem.value.trim(),
//       description: refs.inputTextElem.value.trim(),
//     };
//     tasks.push(newTask);
//     renderTasks(tasks, onAdd);
//     refs.formElem.reset();
//   });
//   console.log(addTask);
// }
