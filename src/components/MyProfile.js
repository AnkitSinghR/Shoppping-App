import React from "react";
import { Box, Text, Card } from "grommet";
const MyProfile = () => {
  return (
    <Box
      style={{
        position: "absolute",
        width: "10%",

        right: "33px",
        marginTop: "20px",
      }}
    >
      <Card>
        <Text>Ankit Kumar Singh</Text>
        <Text>userid : AnkitSingh</Text>
        <Text>DOB : 08-10-1998</Text>
      </Card>
    </Box>
  );
};
export default MyProfile;
