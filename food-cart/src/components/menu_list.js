import React, { Component } from 'react';
import MenuItem from './menu_item';
import ReactDOM from 'react-dom';
import OrderList from './order_list';
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
      ],

      total:12.00}
      this.handleAdd = this.handleAdd.bind(this);
      this.removeFromTotal = this.removeFromTotal.bind(this);
      this.getTotal = this.getTotal.bind(this);
  }

  handleAdd(event,item){
    //this.state.selectedList.push()
    console.log(event);
    console.log(item);
    var name = item.name;
    var selectedItems = this.state.selectedList.filter( (match) => {return name == match.name});
    var orderList = this.state.selectedList.filter( (match) => {return name != match.name});
    if(selectedItems.length !=0){
      selectedItems[0].qty = parseInt(selectedItems[0].qty) +1;
      orderList.push(selectedItems[0]);
    }else{
      orderList.push({name: item.name, price: item.price, qty:1});
    }
    this.setState({selectedList: orderList, total:this.getTotal(orderList)});
  }

  removeFromTotal(event, item){
    var newState = this.state.selectedList.filter( (match) => {return match.name != item.name});
    this.setState({selectedList : newState,  total: this.getTotal(newState)});
  }

  getTotal(selectedList){
    var total = 0;
    selectedList.map( item => {
        total += item.qty * item.price;
    });
    return total;
  }

  render() {
    var menuListClass = this;
    var items = this.state.itemList.map( (item) => {
        return(
          <MenuItem name={item.name} price={item.price} qty={item.qty} handleAdd={ event => menuListClass.handleAdd(event, item)}/>
        );
    });

    return (
      <div>
        <br></br><br></br><br></br>
        <div>
          <table>
          <tr>
            <th> Menu </th>
            <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
            <th> Order </th>
          </tr>
          <tr>
            <td className="outerTable">
              {items}
            </td>
            <td></td>
            <td className="outerTable" padding="5%" id="orderList">
              <OrderList selectedList={this.state.selectedList} total={this.state.total} removeFromTotal={this.removeFromTotal}/>
            </td>
          </tr>
          </table>

        </div>
      </div>
    );

  }
}
