import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';

class Item extends Component {
    static propTypes = {
      // eslint-disable-next-line react/forbid-prop-types
      item: PropTypes.object.isRequired,
      onChange: PropTypes.func.isRequired,
      onDelete: PropTypes.func.isRequired,
    };

    handleChange = () => {
      this.props.onChange(this.props.item.id);
    };

    handleDelete = () => {
      this.props.onDelete(this.props.item.id);
    };

    render() {
      return (
        <div className={styles.item}>
          <input
            type="checkbox"
            checked={this.props.item.checked}
            onChange={this.handleChange}
          />
          <div className={`${this.props.item.checked ? styles.checkedItem : ''} ${styles.title}`}>{this.props.item.title}</div>
          <button type="button" onClick={this.handleDelete}>Delete item</button>
        </div>

      );
    }
}

export default Item;
