import React, { Component } from 'react';
import OrderItem from './order_item';

export default class Total extends Component {

  getTotal(){


  }

  render() {
    return (
      <p className="total"> Total: {this.props.total}$</p>
    );
  }
}