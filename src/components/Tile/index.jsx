import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import useCart from "util/hooks/useCart";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Input,
  CardImg,
  Row,
  Col,
  Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faMinusSquare,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

import cartContext from "context/Cart/CartContext";

export const Tile = ({ data }) => {
  const CartContext = useContext(cartContext);

  const numberInCart = CartContext.items[data.code]?.count;

  const setNumberInCart = (count) => {
    CartContext.setItem({ ...data, count });
  };
  const handleDecrementClick = () => {
    setNumberInCart((numberInCart || 1) - 1);
  };

  const handleIncrementClick = () => {
    setNumberInCart((numberInCart || 0) + 1);
  };

  const handleQuantityChange = (e) => {
    setNumberInCart(Number(e.target.value));
  };

  return (
    <Card style={{ backgroundColor: "gray", width: 100 }}>
      <CardImg src={data.image} width={100} height={100} />
      <CardHeader>
        <h3>{data.name}</h3>
      </CardHeader>
      <h4>{data.price}</h4>
      {numberInCart > 0 ? (
        <Container>
          <Col>
            <Button onClick={handleDecrementClick}>
              <FontAwesomeIcon icon={faMinusSquare} />
            </Button>
          </Col>
          <Col>
            <Input
              name="quantity"
              type="number"
              value={numberInCart}
              onChange={handleQuantityChange}
            ></Input>
          </Col>
          <Col>
            <Button color="red" size="lg" block onClick={handleIncrementClick}>
              <FontAwesomeIcon icon={faPlusSquare} />
            </Button>
          </Col>
        </Container>
      ) : (
        <Button onClick={handleIncrementClick}>
          <FontAwesomeIcon icon={faCartPlus} />
        </Button>
      )}
    </Card>
  );
};

Tile.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        picture: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.string,
      })
    ),
  }),
};

export default Tile;
