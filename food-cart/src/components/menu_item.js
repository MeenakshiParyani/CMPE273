import React, { Component } from 'react';

export default class MenuItem extends Component {

  add(){
    this.props.handleAdd(this.props.price);
  }

  render() {
    return (
      <div className="innerTable">
        <table>
        <tr><td>{this.props.name}</td>
        <td>${this.props.price}</td>
          <td><button onClick={this.add}>Add</button></td></tr>
        </table>
      </div>
    );
  }
}
