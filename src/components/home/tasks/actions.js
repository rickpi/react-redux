export const actionsType = {
  DELETE_TASK: 'DELETE_TASK',
  CHECK_TASK: 'CHECK_TASK',
  ADD_TASK: 'ADD_TASK',
};

export const addTask = (value) => ({
  type: actionsType.ADD_TASK,
  value,
});

export const deleteTask = (id) => ({
  type: actionsType.DELETE_TASK,
  id,
});

export const checkTask = (id) => ({
  type: actionsType.CHECK_TASK,
  id,
});
