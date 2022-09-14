import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Image, Text, Card, CardBody, TextInput } from "grommet";

export const product = createContext();

const Home = () => {
  const [categories, seCategories] = useState([]);
  const [eachButtonItems, setEachButtonItems] = useState([]);
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState(false);

  const category = eachButtonItems.map((item) => item.title);
  const allData = [...categories, ...category];
  const searchItems = (data) => {
    setSearchTerm(data);
  };
  useEffect(() => {
    const results = allData.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((result) => seCategories(result));
  }, []);

  const btnClick = (item) => {
    fetch(`https://fakestoreapi.com/products/category/${item}`)
      .then((res) => res.json())
      .then((result) => setEachButtonItems(result))
      .catch((err) => console.log(err));
  };

  const cardClick = (item) => {
    navigate("/product-details", { state: item });
  };
  return (
    <Box>
      <Box
        width="80%"
        pad="small"
        gap="small"
        align="center"
        margin={{ horizontal: "10rem" }}
      >
        <TextInput
          height="60px"
          className="searchField"
          type="text"
          placeholder="Search for Products and Brand"
          onChange={(event) => {
            setSearch(true);
            searchItems(event.target.value);
          }}
          onBlur={() => setSearch(false)}
        />
        {search && (
          <Card pad="small" width="100%">
            {searchResults.map((item) => (
              <CardBody>
                <Text size="25px">{item}</Text>
              </CardBody>
            ))}
          </Card>
        )}
      </Box>
      <Box direction="row" gap="small" alignSelf="center">
        {categories &&
          categories.map((item, index) => (
            <Button
              key={index}
              style={{ height: "50px" }}
              label={item}
              primary
              onClick={() => btnClick(item)}
            />
          ))}
      </Box>
      <Box direction="row" pad="small" gap="small">
        {eachButtonItems &&
          eachButtonItems.map((i) => (
            <Card
              key={i}
              gap="small"
              align="center"
              pad="small"
              onClick={() => cardClick(i)}
            >
              <Box height="small" width="small">
                <Image fit="cover" src={i.image} />
              </Box>
              <Text size="12px">{i.title}</Text>
            </Card>
          ))}
      </Box>
    </Box>
  );
};
export default Home;
