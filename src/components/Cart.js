import React from "react";
import { Box, Text, Image, Button } from "grommet";

const Cart = (props) => {
  const { cartData, removeToCartHandler } = props;
  return (
    <>
      <Box pad="small" gap="small">
        <Text size="20px" weight="bold">
          My Cart
        </Text>
      </Box>
      {cartData.length !== 0 ? (
        cartData.map((item, index) => (
          <Box
            key={index}
            direction="row"
            gap="small"
            align="center"
            justify="center"
            pad="small"
          >
            <Box height="medium" width="medium">
              <Image fit="cover" src={item.cartData.image} />
            </Box>
            <Box width="300px" gap="small">
              <Text size="14px" weight="bold">
                {item.cartData.title}
              </Text>
              <Text size="12px">{item.cartData.description}</Text>
              <Text>Price: ${item.cartData.price}</Text>
            </Box>
            <Button
              label="Remove To Cart"
              onClick={() => removeToCartHandler(cartData)}
            />
          </Box>
        ))
      ) : (
        <Box height="medium" width="large" align="center">
          <Text size="20px">NO RECORD FOUND</Text>
        </Box>
      )}
    </>
  );
};
export default Cart;
