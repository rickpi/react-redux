import React from 'react';
import {
  Grid,
} from '@material-ui/core';

import Form from './form';
import Tasks from './tasks';

const Home = () => (
  <Grid container spacing={1}>
    <Form />
    <Tasks />
  </Grid>
);

export default Home;
