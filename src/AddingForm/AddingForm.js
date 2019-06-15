import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AddingForm.module.css';

class AddingForm extends Component {
    static propTypes = {
      addItem: PropTypes.func.isRequired,
    };

    state = {
      itemTitle: '',
    };

    createNewItem = (e) => {
      const { value } = e.target;
      this.setState({
        itemTitle: value,
      });
    };

    addItem = (e) => {
      e.preventDefault();
      this.props.addItem(this.state.itemTitle);
      this.setState({
        itemTitle: '',
      });
    };

    render() {
      return (
        <form className={styles.form}>
          <input type="text" onChange={this.createNewItem} value={this.state.itemTitle} />
          <button type="button" onClick={this.addItem}>Add item</button>
        </form>
      );
    }
}

export default AddingForm;
