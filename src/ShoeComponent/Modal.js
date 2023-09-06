import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { name, image, price, description } = this.props.productDetail;
    const handleAddShoe = (shoe) => {
      this.props.handleAddShoe(shoe);
      this.props.handleCloseModal();
    };
    const handleClickOutSide = (e) => {
      if (e.target.id === "modalContainer") this.props.handleCloseModal();
    };
    if (!this.props.visible) return null;
    return (
      <div
        id="modalContainer"
        onClick={handleClickOutSide}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm duration-300"
      >
        <div className=" w-[500px] relative flex flex-col items-center gap-5 p-10 bg-white rounded-lg shadow-sm">
          <button
            onClick={this.props.handleCloseModal}
            className="absolute px-2 py-1 font-bold text-white bg-red-500 rounded-md top-5 right-5"
          >
            X
          </button>
          <img width={300} src={image} alt="" />
          <div>
            <h3 className="text-4xl font-bold ">{name}</h3>
            <span className="inline-block px-3 py-1 my-3 font-semibold bg-yellow-200 rounded-xl">
              $ {price}
            </span>
            <p>{description}</p>
            <button
              onClick={() => {
                handleAddShoe(this.props.productDetail);
              }}
              className="px-4 py-1 mt-3 text-white bg-green-500 rounded-lg "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
