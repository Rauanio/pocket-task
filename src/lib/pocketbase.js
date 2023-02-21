import PocketBase from 'pocketbase';

const url = `${import.meta.env.VITE_POCKETBASE}`;
export const client = new PocketBase(url);
client.autoCancellation(false);

export const isUserValid = client.authStore.isValid;

export async function getTasks() {
  return await client.collection('tasks').getFullList();
}

export async function getUserName() {
  return await client.collection('users').getFullList();
}

export async function addTask(title, desc) {
  const data = {
    title: title,
    description: desc,
    user: client.authStore.model.id,
  };
  return await client.collection('tasks').create(data);
}

export async function removeTask(id) {
  let confirm = window.confirm('Are you sure want to delete this task?');
  if (!confirm) return;

  await client.collection('tasks').delete(id);
  window.location.reload();
}

export async function editTask(id, title, desc) {
  const data = {
    title: title,
    description: desc,
    user: client.authStore.model.id,
  };

  return await client.collection('tasks').update(id, data);
}

export async function checkTask(id, title, completed) {
  const data = {
    title: title,
    completed: !completed,
    user: client.authStore.model.id,
  };

  return await client.collection('tasks').update(id, data);
}

export async function login(username, password) {
  await client.collection('users').authWithPassword(username, password);
  window.location.reload();
}

export async function signUp(username, password) {
  const data = {
    username: username,
    password: password,
    passwordConfirm: password,
  };
  return await client.collection('users').create(data);
}

export function logout() {
  client.authStore.clear();
  window.location.reload();
}
