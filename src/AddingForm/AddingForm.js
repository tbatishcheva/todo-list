import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AddingForm.module.css';

class AddingForm extends Component {
    static propTypes = {
      onAdd: PropTypes.func.isRequired,
    };

    state = {
      itemTitle: '',
    };

    handleOnChange = (e) => {
      const { value } = e.target;
      this.setState({
        itemTitle: value,
      });
    };

    handleAdd = (e) => {
      e.preventDefault();
      this.props.onAdd(this.state.itemTitle);
      this.setState({
        itemTitle: '',
      });
    };

    render() {
      return (
        <form className={styles.form}>
          <input type="text" onChange={this.handleOnChange} value={this.state.itemTitle} />
          <button type="button" onClick={this.handleAdd}>Add item</button>
        </form>
      );
    }
}

export default AddingForm;
