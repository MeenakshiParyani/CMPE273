import React, { Component } from 'react';
import OrderItem from './order_item';
import Total from './total_price';
import MenuList from './menu_list';

export default class OrderList extends MenuList {
  constructor(props){
      super(props);
      // this.state = {
      //   selectedList: this.state.selectedList
      // };
      this.addToTotal = this.addToTotal.bind(this);
      this.removeFromTotal = this.removeFromTotal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedList: this.state.selectedList });
  }

  addToTotal(price){
    this.setState({total: this.state.total + price});
  }

  removeFromTotal(price, item){
    this.state.selectedList.filter( (match) => {return name == item.name});
    this.setState({total: this.state.total - item.qty * item.price});
  }

  render() {
    console.log('In my render!!!!!!!!');
    var orderListClass = this;
    if(this.state.selectedList != undefined){
      var items1 = this.state.selectedList.map( (item) => {
          return(
            <OrderItem name={item.name} price={item.price} qty={item.qty} handleRemove={event => orderListClass.removeFromTotal(event, item)}/>
          );
      });
    }

    return (
      <div>
        <div className="tablePadding">
          {items1}
          <br></br>
        </div>
        <br></br><br></br><br></br><br></br><br></br><hr></hr>
        <Total total={this.state.total}/>
      </div>
    );

  }
}
