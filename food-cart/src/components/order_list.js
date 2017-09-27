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
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ selectedList: nextProps.selectedList, total:nextProps.total});
  }


  render() {
    console.log('In my render!!!!!!!!');
    var orderListClass = this;
    if(this.props.selectedList != undefined){
      var items1 = this.props.selectedList.map( (item) => {
          return(
            <OrderItem name={item.name} price={item.price} qty={item.qty} handleRemove={event => orderListClass.props.removeFromTotal(event, item)}/>
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
