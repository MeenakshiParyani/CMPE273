import React, { Component } from 'react';
import MenuItem from './menu_item';
import ReactDOM from 'react-dom';

export default class MenuList extends Component {

  constructor(props){
      super(props);
      this.state={selectedList: [
        {name:"Pasta Carbonara" , price:12.00 , qty:1 }
      ],

        itemList: [
        {name:"Pasta Carbonara" , price:12.00 , qty:0 },
        {name:"Margherita Pizza" , price:27.00 , qty:0 },
        {name:"Mushroom Risotto" , price:16.00 , qty:0 },
        {name:"Panzenella" , price:10.00 , qty:0 },
        {name:"Bruschetta" , price:10.00 , qty:0 },
        {name:"Tiramisu", price:6.00 , qty:0 }
      ] }
      this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(event,item){
    //this.state.selectedList.push()
    console.log(event);
    console.log(item);
    var name = item.name;
    var selectedItems = this.state.selectedList.filter( (match) => {return name == item.name});
    var orderList = this.state.selectedList;
    if(selectedItems.length !=0){
      orderList[0].qty = parseInt(orderList[0].qty) +1;
    }else{
      orderList.push({name: item.name, price: item.price, qty:item.qty});
    }
    this.setState({selectedList: orderList});
  }


  render() {
    var menuListClass = this;
    var items = this.state.itemList.map( (item) => {
        return(
          <MenuItem name={item.name} price={item.price} qty={item.qty} handleAdd={ event => menuListClass.handleAdd(event, item)}/>
        );
    });

    return (
      <div className="tablePadding">
        {items}
      </div>
    );

  }
}
