import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";

import Tile from "components/Tile";
import CartSummary from "components/CartSummary";

import CartState from "context/Cart/CartState";

import styles from "./style.scss";

export const MainView = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch(
        "https://meijerdigital.azurewebsites.net/api/interview"
      );

      if (result.status === 200) {
        const items = await result.json();
        setItemList(items);
      }
    };

    fetchItems();
  }, []);

  return (
    <Container className="main-container">
      <CartState>
        <>
          <CartSummary />
          <div className="tile-container">
            {itemList.map((item) => (
              <Tile data={item} key={`item-tile-${item.code}`} />
            ))}
          </div>
        </>
      </CartState>
    </Container>
  );
};

export default MainView;
