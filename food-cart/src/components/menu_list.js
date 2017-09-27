import React, { Component } from 'react';
import MenuItem from './menu_item';

export default class MenuList extends Component {
  render() {
    return (
      <div className="tablePadding">
        <MenuItem name="Pasta Carbonara" price={12.00} /><br></br>
        <MenuItem name="Margherita Pizza" price={27.00} /><br></br>
        <MenuItem name="Mushroom Risotto" price={16.00} /><br></br>
        <MenuItem name="Panzenella" price={10.00} /><br></br>
        <MenuItem name="Bruschetta" price={10.00} /><br></br>
        <MenuItem name="Tiramisu" price={6.00} /><br></br>
      </div>
    );
  }
}
