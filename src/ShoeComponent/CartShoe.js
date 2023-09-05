import React, { Component } from "react";
import { GIAM_SO_LUONG, TANG_SO_LUONG } from "./data";

export default class CartShoe extends Component {
  renderCart = () => {
    let { cart } = this.props;
    return cart.map((el, index) => {
      let { name, image, price, soLuong, id } = el;
      return (
        <tr key={index} className="border-b dark:border-neutral-500">
          <td className="px-6 py-4 font-medium whitespace-nowrap">{name}</td>
          <td className="px-6 py-4 font-semibold whitespace-nowrap">
            {price * soLuong}
          </td>
          <td className="px-6 whitespace-nowrap ">
            <img width={100} src={image} alt="" />
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
            <button
              onClick={() => {
                this.props.handleChangeQuantity(id, GIAM_SO_LUONG);
              }}
              className="p-2 font-medium text-white bg-blue-500 rounded-lg"
            >
              -
            </button>
            <span className="mx-3 text-lg font-semibold">{soLuong}</span>
            <button
              onClick={() => {
                this.props.handleChangeQuantity(id, TANG_SO_LUONG);
              }}
              className="p-2 font-medium text-white bg-blue-500 rounded-lg"
            >
              +
            </button>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button
              onClick={() => {
                this.props.handleRemoveShoe(el);
              }}
              className="p-2 font-medium text-white bg-red-500 rounded-lg"
            >
              Del
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-sm font-light text-left">
                <thead className="font-medium border-b dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
