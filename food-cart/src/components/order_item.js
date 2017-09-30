import React, { Component } from 'react';

export default class OrderItem extends Component {

  remove(){

  }

  render() {

      var style2 = {

      width:"320px",
      height:"50px",
      border:"1px solid #000",
      margin:"10% auto",
      padding:"12px"

}

    return (
      <div className="innerTable style2">
      <span className="col-md-6">{this.props.name}</span> <span className="col-md-3"> ${this.props.price} <br></br><span className="subscript"> Qty: {this.props.qty}</span></span>
       <button className = "col-md-3" onClick={this.props.handleRemove}> Remove </button>
       </div>
    );
  }
}
