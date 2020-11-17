import { actionsType } from './actions';

const initialState = {
  value: '',
};

const updateValue = (state, action) => ({
  value: action.value,
});

const form = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.UPDATE_VALUE:
      return updateValue(state, action);
    default:
      return state;
  }
};

export default form;
