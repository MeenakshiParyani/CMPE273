import React, { Component } from 'react';
import OrderItem from './order_item';

export default class Total extends Component {

  getTotal(){


  }

  render() {
    return (
      <span className="total"> Total: <span> {this.props.total}$ </span></span>
    );
  }
}
