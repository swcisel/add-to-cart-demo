import React, { useContext, useState } from "react";
import cartContext from "context/Cart/CartContext";
import currencyStringToFloat from "util/currencyStringToFloat";
import { Button, Modal, ModalBody, ModalHeader, CardImg } from "reactstrap";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as R from "ramda";

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
      <Button onClick={() => setCartSummaryVisible(true)}>
        <div>Cart Total:</div>
        <div>{priceTotalString}</div>
      </Button>
      <Modal isOpen={cartSummaryVisible} toggle={toggleCartSummaryVisible}>
        <Button onClick={toggleCartSummaryVisible}>Continue Shopping</Button>
        <ModalHeader>
          <h2>Cart Details</h2>
        </ModalHeader>
        <ModalBody>
          {Object.entries(CartContext.items).length === 0 ? (
            <p>There are currently no items in your cart.</p>
          ) : (
            <>
              {R.values(CartContext.items).map((item) => (
                <>
                  <CardImg src={item.image} width={100} height={100} />
                  <div>{item.name}</div>
                  <div>{item.count}</div>
                </>
              ))}
              <div>Total: </div>
              <div>{priceTotalString}</div>
            </>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default CartSummary;
