import React from 'react';
import { connect } from 'react-redux';
import {
  TextField,
  Grid,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import store from '../../../store';
import { addTask } from '../tasks/actions';
import { updateValue } from './actions';

const Form = ({ value }) => (
  <Grid container item>
    <Grid item xs={4}>
      <TextField
        label="Ajouter une tâche"
        color="primary"
        fullWidth
        value={value}
        onChange={(event) => {
          store.dispatch(updateValue(event.target.value));
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            store.dispatch(addTask(value));
            store.dispatch(updateValue(''));
          }
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <Fab
        size="small"
        color="primary"
        onClick={() => {
          store.dispatch(addTask(value));
          store.dispatch(updateValue(''));
        }}
      >
        <AddIcon />
      </Fab>
    </Grid>
  </Grid>
);

const mapToProps = (state) => ({
  value: state.form.value,
});

export default connect(mapToProps)(Form);
