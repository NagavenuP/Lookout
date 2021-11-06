/**
 * @description Cart page which displays selected products quantity and pricing details.
 */

import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../components/cartItem";

function Cart() {
  const { total, items } = useSelector((state) => state?.cart);
  const cartItemIds = Object.keys(items);
  function cartItemUi(id) {
    const item = { id, ...items[id] };
    return <CartItem key={id} item={item} />;
  }

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-header">
          <div className="bold">My Cart</div>
        </div>
        <div className="cart-items">
          {cartItemIds.length > 0 ? (
            cartItemIds.map(cartItemUi)
          ) : (
            <div className="cart-empty">Your cart is empty!</div>
          )}
        </div>
        {cartItemIds.length > 0 && (
          <div className="cart-footer">
            <div className="place-order">
              <button className="button order-button">Place Order</button>
            </div>
          </div>
        )}
      </div>
      {cartItemIds.length > 0 && (
        <div className="price-details">
          <div className="price-head">price details</div>
          <div className="price-container">
            <div className="price-labels">
              <div>Price</div>
              <div>₹{total}</div>
            </div>
            <div className="price-labels">
              <div>Discount</div>
              <div className="txt-g">₹500</div>
            </div>
            <div className="price-labels">
              <div>Tax</div>
              <div className="txt-g">₹1000</div>
            </div>
            <div className="total-amount-container">
              <div className="price-labels total">
                <div>Total Amount</div>
                <div>₹{total - 1500}</div>
              </div>
            </div>
            <div className="save-block">You will save ₹1,500 on this order</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
