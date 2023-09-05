import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { GIAM_SO_LUONG, TANG_SO_LUONG, shoeArr } from "./data";
import Modal from "./Modal";

export default class ShoeComponent extends Component {
  state = {
    shoeArr: shoeArr,
    cart: [],
    detail: "",
    showModal: false,
  };
  handleAddShoe = (item) => {
    let newCarts = this.state.cart;
    let index = newCarts.findIndex((el) => el.id === item.id);
    if (index === -1) {
      let newShoe = { ...item, soLuong: 1 };
      newCarts.push(newShoe);
    } else {
      newCarts[index].soLuong++;
    }
    this.setState({
      cart: newCarts,
    });
  };
  handleRemoveShoe = (item) => {
    let newCart = this.state.cart;
    let index = newCart.findIndex((el) => el.id === item.id);
    newCart.splice(index, 1);
    this.setState({
      cart: newCart,
    });
  };
  handleChangeQuantity = (id, option) => {
    let newCart = this.state.cart;
    let index = newCart.findIndex((el) => el.id === id);
    option === TANG_SO_LUONG && newCart[index].soLuong++;
    option === GIAM_SO_LUONG &&
      newCart[index].soLuong-- &&
      newCart[index].soLuong === 0 &&
      this.handleRemoveShoe(id);

    this.setState({
      cart: newCart,
    });
  };
  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  };
  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };
  handleViewShoe = (shoe) => {
    this.handleShowModal();
    this.setState({
      detail: shoe,
    });
  };
  render() {
    return (
      <div>
        <div className="grid items-start grid-cols-2">
          <CartShoe
            handleChangeQuantity={this.handleChangeQuantity}
            handleRemoveShoe={this.handleRemoveShoe}
            cart={this.state.cart}
          />
          <ListShoe
            handleViewShoe={this.handleViewShoe}
            handleAddShoe={this.handleAddShoe}
            listShoe={this.state.shoeArr}
          />
        </div>
        <button onClick={this.handleShowModal}>Toggle</button>
        <Modal
          productDetail={this.state.detail}
          handleCloseModal={this.handleCloseModal}
          handleAddShoe={this.handleAddShoe}
          visible={this.state.showModal}
        />
      </div>
    );
  }
}
