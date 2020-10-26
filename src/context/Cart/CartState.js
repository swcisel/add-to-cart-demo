import React, { useReducer } from "react";
import PropTypes from "prop-types";

import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

import { SET_ITEM } from "./actions/types";

const CartState = (props) => {
  const initialState = {
    items: {},
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const setItem = async (itemData) => {
    dispatch({ type: SET_ITEM, payload: itemData });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        setItem: setItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

CartState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CartState;
