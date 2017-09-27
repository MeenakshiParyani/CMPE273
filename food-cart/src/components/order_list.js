import React, { Component } from 'react';
import OrderItem from './order_item';
import Total from './total_price';

export default class OrderList extends Component {
  constructor(props){
      super(props);
      this.state={total:0};
      this.addToTotal = this.addToTotal.bind(this);
      this.removeFromTotal = this.removeFromTotal.bind(this);
  }

  addToTotal(price){
    this.setState({total: this.state.total + price});
  }

  removeFromTotal(price){
    this.setState({total: this.state.total - price});
  }

  render() {
    return (
      <div>
        <div className="tablePadding">
          <OrderItem name={this.state.name} price={this.state.price} qty={this.state.qty} handleRemove={this.removeFromTotal}/><br></br>
        </div>
        <br></br><br></br><br></br><br></br><br></br><hr></hr>
        <Total total={this.state.total}/>
      </div>
    );
  }
}
