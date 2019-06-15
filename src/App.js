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

    onChange = (id) => {
      const indexOfItem = this.state.list.findIndex(item => item.id === +id);
      // eslint-disable-next-line react/no-access-state-in-setstate
      const newList = [...this.state.list];
      // eslint-disable-next-line max-len
      newList[indexOfItem] = { ...this.state.list[indexOfItem], checked: !this.state.list[indexOfItem] };

      this.setState({
        list: newList,
      });
    };

    onDelete = (idToDelete) => {
      this.setState({
        // eslint-disable-next-line react/no-access-state-in-setstate
        list: this.state.list.filter(item => item.id !== idToDelete),
      });
    };

    onAdd = (title) => {
      const createdItem = {
        id: incrementedId + 1,
        title,
        checked: false,
      };
      this.setState({
        // eslint-disable-next-line react/no-access-state-in-setstate
        list: [...this.state.list, createdItem],
      });
      incrementedId += 1;
    };

    render() {
      return (
        <div className={styles.app}>
          <div className={styles.title}>ToDo List</div>
          <AddingForm onAdd={this.onAdd} />
          <div className={styles.items}>
            {this.state.list.map(item => (
              <Item key={item.id} item={item} onChange={this.onChange} onDelete={this.onDelete} />
            ))}
          </div>
        </div>
      );
    }
}

export default App;
