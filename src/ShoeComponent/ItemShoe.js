import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { image, name, price } = this.props.item;
    return (
      <div className="flex flex-col items-center justify-between p-4 border rounded-xl hover:shadow-md duration-300">
        <img src={image} alt="" />
        <p className="font-semibold text-center ">{name}</p>
        <span className="inline-block px-3 mb-3 bg-yellow-300 rounded-lg ">
          $ {price}
        </span>
        <div className="flex gap-3">
          <button
            onClick={() => {
              this.props.handleAddShoe(this.props.item);
            }}
            className="px-4 py-1 text-white bg-blue-500 rounded-lg "
          >
            Add
          </button>
          <button
            onClick={() => {
              this.props.handleViewShoe(this.props.item);
            }}
            className="px-4 py-1 text-white rounded-lg bg-cyan-500"
          >
            View
          </button>
        </div>
      </div>
    );
  }
}
