import React, { Component } from 'react';
import OrderItem from './order_item';

export default class OrderList extends Component {
  getInitialState(){
      return{total:0, qty:0};
  }

  addToTotal(price){
    this.setState({total: this.state.total + price});
  }

  removeFromTotal(price){
    this.setState({total: this.state.total - price});
  }

  handleRemove(){


  }

  render() {
    return (
      <div className="tablePadding">
        <OrderItem name="Pasta Carbonara" price="12.00" qty="1" handleRemove={this.handleRemove}/><br></br>
      </div>
    );
  }
}
