import React, { Component } from 'react';

export default class OrderItem extends Component {

  remove(){

  }

  render() {
    return (
      <div className="innerTable">
        <table>
        <tr><td>{this.props.name}</td>
        <td>
          ${this.props.price}<br></br>
          Qty: {this.props.qty}
        </td>
        <td><button onClick={this.props.handleRemove}>Remove</button></td></tr>
        </table>
      </div>
    );
  }
}
