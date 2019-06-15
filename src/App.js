import React, { Component } from 'react';
import styles from './App.module.css';
import Item from './Item/Item';
import AddingForm from './AddingForm/AddingForm';

let incrementedId = 2;

class App extends Component {
    state = {
      list: [
        {
          id: 1,
          title: 'First Item',
          checked: false,
        },
        {
          id: 2,
          title: 'Second Item',
          checked: false,
        },
      ],
    };

    handleInputChange = (e) => {
      const id = e.target.name;
      const updatedItem = this.state.list.filter(item => item.id === +id)[0];
      updatedItem.checked = !updatedItem.checked;
      this.setState({
        list: [...this.state.list,
        ],
      });
    };

    deleteItem = (idToDelete) => {
      this.setState({
        list: this.state.list.filter(item => item.id !== idToDelete),
      });
    };

    addItem = (e) => {
      const createdItem = {
        id: incrementedId + 1,
        title: e,
        checked: false,
      };
      this.setState({
        list: [...this.state.list, createdItem],
      });
      incrementedId += 1;
    };

    render() {
      return (
        <div className={styles.app}>
          <div className={styles.title}>ToDo List</div>
          <AddingForm addItem={this.addItem} />
          <div className={styles.items}>
            {this.state.list.map(item => (
              <Item key={item.id} item={item} handleInputChange={this.handleInputChange} deleteItem={this.deleteItem} />
            ))}
          </div>
        </div>
      );
    }
}

export default App;
