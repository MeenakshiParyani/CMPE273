import React, { Component } from 'react';
import OrderItem from './order_item';

export default class Total extends Component {
  getInitialState(){
      return{total:0, qty:0};
  }

  getTotal(){


  }

  render() {
    return (
      <p className="total"> </p>
    );
  }
}
