import React, { useContext, useState } from "react";
import cartContext from "context/Cart/CartContext";
import currencyStringToFloat from "util/currencyStringToFloat";
import { Button, Modal, ModalBody, ModalHeader, CardImg } from "reactstrap";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as R from "ramda";

import styles from "./style.scss";

const CartSummary = () => {
  const [cartSummaryVisible, setCartSummaryVisible] = useState(false);
  const CartContext = useContext(cartContext);

  const toggleCartSummaryVisible = () =>
    setCartSummaryVisible(!cartSummaryVisible);

  const getPriceTotal = (items) => {
    const getItemSubtotal = (item) => {
      const fPrice = currencyStringToFloat(item.price);
      return item.count * fPrice;
    };
    const subtotal = R.sum(R.values(R.map(getItemSubtotal, items)));
    return subtotal;
  };

  const priceTotalString = `$${getPriceTotal(CartContext.items).toFixed(2)}`;

  return (
    <>
      <Button
        onClick={() => setCartSummaryVisible(true)}
        className="cart-summary-button"
      >
        <div>Cart Total:</div>
        <div>{priceTotalString}</div>
      </Button>
      <Modal
        isOpen={cartSummaryVisible}
        toggle={toggleCartSummaryVisible}
        className="cart-summary-modal"
      >
        <Button onClick={toggleCartSummaryVisible}>Hide</Button>
        <ModalHeader>
          <h2>Cart Details</h2>
        </ModalHeader>
        <ModalBody>
          {Object.entries(CartContext.items).length === 0 ? (
            <p>There are currently no items in your cart.</p>
          ) : (
            <div className="cart-summary-list">
              {R.values(CartContext.items).map((item) => (
                <div className="cart-summary-row">
                  <CardImg src={item.image} width={100} height={100} />
                  <div>
                    <div className="item-name">{item.name}</div>
                    <div className="item-quantity">Quantity: {item.count}</div>
                  </div>
                </div>
              ))}
              <div className="cart-summary-total">
                Total: {priceTotalString}
              </div>
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default CartSummary;
