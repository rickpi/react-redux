import { actionsType } from './actions';

const initialState = [{
  id: '1',
  label: 'Apprendre Redux',
  checked: false,
}];

const addTask = (state, action) => (
  state.concat([{
    id: String(state.length + 1),
    label: action.value,
    checked: false,
  }])
);

const deleteTask = (state, action) => (
  state.filter((task) => task.id !== action.id)
);

const checkTask = (state, action) => (
  state.map((task) => {
    const updatedTask = task;
    if (task.id === action.id) updatedTask.checked = !updatedTask.checked;
    return updatedTask;
  })
);

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_TASK:
      return addTask(state, action);
    case actionsType.DELETE_TASK:
      return deleteTask(state, action);
    case actionsType.CHECK_TASK:
      return checkTask(state, action);
    default:
      return state;
  }
};

export default tasks;
