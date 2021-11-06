import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cart";

function AddRemoveButton({ item }) {
  const cartItems = useSelector((state) => state?.cart?.items);
  const dispatch = useDispatch();

  const itemInCart = cartItems[item.id];

  if (itemInCart) {
    return (
      <div className="button-group">
        <button className="button" onClick={() => dispatch(removeItem(item))}>
          -
        </button>
        <div className="button-label">{itemInCart.quantity}</div>
        <button className="button" onClick={() => dispatch(addItem(item))}>
          +
        </button>
      </div>
    );
  } else {
    return (
      <button onClick={() => dispatch(addItem(item))} className="button">
        Add to Cart
      </button>
    );
  }
}

export default AddRemoveButton;
