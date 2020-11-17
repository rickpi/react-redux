import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'),
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   Grid,
//   Container,
// } from '@material-ui/core';
// import axios from 'axios';

// import Item from './components/item';
// import Form from './components/form';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       lastId: 0,
//     };
//     this.checkItem = this.checkItem.bind(this);
//     this.addItem = this.addItem.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//   }

//   componentDidMount() {
//     axios.get('https://opendata.paris.fr/api/records/1.0/search/', {
//       params: {
//         dataset: 'que-faire-a-paris-',
//         q: 'bio',
//       },
//     }).then((response) => {
//       const { data } = response;
//       const dataUpdated = data.records.map((event) => ({
//         id: event.fields.id,
//         label: event.fields.title,
//         checked: false,
//       }));

//       this.setState({
//         data: dataUpdated,
//       });
//     }).catch((error) => {
//       console.log(error);
//     });
//   }

//   checkItem(id) {
//     const { data } = this.state;

//     data.map((item) => {
//       const updatedItem = item;
//       if (item.id === id) updatedItem.checked = !updatedItem.checked;
//       return updatedItem;
//     });
//     this.setState({
//       data,
//     });
//   }

//   addItem(label) {
//     const { data, lastId } = this.state;
//     const newId = lastId + 1;

//     data.push({
//       label,
//       checked: false,
//       id: newId,
//     });
//     this.setState({
//       data,
//       lastId: newId,
//     });
//   }

//   deleteItem(id) {
//     const { data } = this.state;
//     const updatedData = data.filter((item) => item.id !== id);

//     this.setState({
//       data: updatedData,
//     });
//   }

//   render() {
//     const { data } = this.state;

//     return (
//       <Container maxWidth="md" spacing={2}>
//         <Grid container spacing={2}>
//           <Form addItem={this.addItem} />
//           {data.map((item) => (
//             <Item
//               item={item}
//               key={item.id}
//               checkItem={this.checkItem}
//               deleteItem={this.deleteItem}
//             />
//           ))}
//         </Grid>
//       </Container>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));
