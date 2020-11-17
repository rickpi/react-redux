import React from 'react';
import { connect } from 'react-redux';
import {
  FormControlLabel,
  Grid,
  Checkbox,
  Fab,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import store from '../../../store';
import { deleteTask, checkTask } from './actions';

const Task = ({ checked, label, id }) => {
  const style = checked ? { textDecoration: 'line-through' } : {};

  return (
    <Grid item xs={12}>
      <FormControlLabel
        control={(
          <Checkbox
            checked={checked}
            color="primary"
            onClick={() => {
              store.dispatch(checkTask(id));
            }}
          />
        )}
        label={label}
        style={style}
      />
      <Fab
        size="small"
        color="secondary"
        onClick={() => {
          store.dispatch(deleteTask(id));
        }}
      >
        <DeleteIcon />
      </Fab>
    </Grid>
  );
};

const Tasks = ({ tasks }) => (
  <Grid container item xs={12}>
    {tasks.map((task) => (
      <Task
        checked={task.checked}
        label={task.label}
        id={task.id}
        key={task.id}
      />
    ))}
  </Grid>
);

const mapToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapToProps)(Tasks);
