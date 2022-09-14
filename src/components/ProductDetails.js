import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Text, Image, Button } from "grommet";

const ProductDetails = (props) => {
  const { addToCartHandler, removeToCartHandler } = props;
  const { state } = useLocation();

  return (
    <>
      {state ? (
        <Box direction="row" gap="small" align="center" justify="center">
          <Box height="medium" width="medium">
            <Text size="20px" weight="bold">
              Product Details
            </Text>
            <Image fit="cover" src={state?.image} />
          </Box>
          <Box width="300px" gap="small">
            <Text size="14px" weight="bold">
              {state?.title}
            </Text>
            <Text size="12px">{state?.description}</Text>
            <Text>Price: ${state?.price}</Text>
            <Button
              label="Add To Cart"
              onClick={() => addToCartHandler(state)}
            />
            <Button
              label="Remove To Cart"
              onClick={() => removeToCartHandler(state)}
            />
          </Box>
        </Box>
      ) : (
        <Box height="medium" width="large" align="center">
          <Text size="20px">NO RECORD FOUND</Text>
        </Box>
      )}
    </>
  );
};
export default ProductDetails;
