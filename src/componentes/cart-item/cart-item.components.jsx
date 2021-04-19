import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from "./cary-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer className="item-details">
      <span>{name}</span>

      <span>
        {quantity} x £{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
