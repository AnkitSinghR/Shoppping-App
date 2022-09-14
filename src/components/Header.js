import React from "react";
import { Box, Image, Text } from "grommet";
import { useNavigate, Link } from "react-router-dom";
import cart from "./Image/cart.png";
import profile from "./Image/profile.png";
import reactIcon from "./Image/react.png";
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Box direction="row" width="100vw">
      <Box width="20%">
        <Image src={reactIcon} alt="cart" height="80px" width="80px" />
      </Box>
      <Box pad="medium" gap="small">
        <Link to="/">
          <Text weight="bold">Home</Text>
        </Link>
      </Box>
      <Box direction="row" margin={{ left: "auto" }}>
        <Box height="100px" width="140px">
          <Image
            src={cart}
            alt="cart"
            height="100px"
            width="100px"
            onClick={() => navigate("/cart")}
          />
        </Box>
        <Text className="cart-count">{props?.cartData?.length}</Text>
        <Box height="100px" width="140px">
          <Image
            src={profile}
            alt="profile"
            height="100px"
            width="100px"
            onClick={() => navigate("/profile")}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
