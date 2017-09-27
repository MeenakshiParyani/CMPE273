import React, { Component } from 'react';
import OrderItem from './order_item';
import Total from './total_price';
import MenuList from './menu_list';

export default class OrderList extends Component {
  constructor(props){
      super(props);
      this.state = {
        selectedList: [],
        total:0
      };
      this.addToTotal = this.addToTotal.bind(this);
      this.removeFromTotal = this.removeFromTotal.bind(this);
      this.getTotal = this.getTotal.bind(this);
  }

  getTotal(selectedList){
    var total = 0;
    selectedList.map( item => {
        total += item.qty * item.price;
    });
    return total;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedList: nextProps.selectedList, total:this.getTotal(nextProps.selectedList)});
  }

  addToTotal(price,item){
    this.setState({total: this.state.total + item.price * item.qty});
  }

  removeFromTotal(price, item){
    var newState = this.state.selectedList.filter( (match) => {return match.name != item.name});
    this.setState({selectedList : newState,  total: this.state.total - item.qty * item.price});
    //this.setState({});
  }

  render() {
    console.log('In my render!!!!!!!!');
    var orderListClass = this;
    if(this.props.selectedList != undefined){
      var items1 = this.props.selectedList.map( (item) => {
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
