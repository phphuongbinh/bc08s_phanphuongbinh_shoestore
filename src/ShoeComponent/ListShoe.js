import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  renderShoe = () => {
    let { listShoe, handleAddShoe, handleViewShoe } = this.props;
    return listShoe.map((el, index) => {
      return (
        <ItemShoe
          handleViewShoe={handleViewShoe}
          handleAddShoe={handleAddShoe}
          key={index}
          item={el}
        />
      );
    });
  };
  render() {
    this.renderShoe();
    return <div className="grid grid-cols-3 gap-4">{this.renderShoe()}</div>;
  }
}
