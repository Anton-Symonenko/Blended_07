const TASKS_KEy = 'tasks';

export function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEy, JSON.stringify(tasks));
}

export function loadTasks() {
  const data = localStorage.getItem(TASKS_KEy);
  return data ? JSON.parse(data) : [];
}
