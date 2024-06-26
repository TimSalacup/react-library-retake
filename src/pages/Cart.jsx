import React from "react";
import CartItem from "../components/ui/CartItem";
import EmptyCart from "../assets/empty_cart.svg"
import { Link } from "react-router-dom";
import Books from "./Books";

export default function Cart({ cart, inputs, updateInputValues, totalPrice, totalDetails, removeItem }) {

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => (
                  <CartItem
                    book = {book}
                    inputs = {inputs}
                    updateInputValues={updateInputValues}
                    key = {book.id}
                    removeItem = {removeItem}
                  />
                ))}
              </div>
              {cart.length === 0 && <div className="cart__empty">
                <img src={EmptyCart} alt="" className="cart__empty--img" />
                <h2>You don't have any books in your cart!</h2>
                <Link to="/books">
                <button className="btn">Browse books</button>
                </Link>
              </div>}
            </div>
            {cart.length > 0 &&
              <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${totalDetails.subtotal.toFixed(2)}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>${totalDetails.tax.toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${ totalPrice.toFixed(2) }</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() => alert("Haven't got around to doing this :(")}
              >
                Proceed to checkout
              </button>
            </div>}
          </div>
        </div>
      </main>
    </div>
  );
}
