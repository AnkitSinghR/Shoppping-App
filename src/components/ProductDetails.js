import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Text, Image, Button } from "grommet";
import { connect, useDispatch } from "react-redux";

import { addToCart, removeToCart } from "../services/actions/action";

const ProductDetails = ({ cartData }) => {
  const { state } = useLocation();
  const dispatch = useDispatch();

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
              onClick={() => dispatch(addToCart(state))}
            />
            <Button
              label="Remove To Cart"
              onClick={() => dispatch(removeToCart(state))}
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

const mapStateToProps = (state) => ({
  cartData: state.cartItem,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
