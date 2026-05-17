
export function markupTasks({ id, name, description }) {
  return `
    <li class="task-list-item" data-id="${id}">
      <button class="task-list-item-btn" data-id="${id}">Delete</button>
      <h3>${name}</h3>
      <p>${description}</p>
    </li>`;
}
