import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';

class Item extends Component {
    static propTypes = {
      item: PropTypes.object.isRequired,
      handleInputChange: PropTypes.func.isRequired,
      deleteItem: PropTypes.func.isRequired,
    };

    deleteItem = () => {
      this.props.deleteItem(this.props.item.id);
    }

    render() {
      return (
        <div className={styles.item}>
          <input
            type="checkbox"
            checked={this.props.item.checked}
            onChange={this.props.handleInputChange}
            name={this.props.item.id}
          />
          <div className={`${this.props.item.checked ? styles.lineThrough : null} ${styles.title}`}>{this.props.item.title}</div>
          <button onClick={this.deleteItem}>Delete item</button>
        </div>

      );
    }
}

export default Item;
