import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const AddBook = () => {
  // const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",

    image: "",
  });
  const [overall, setOverall] = useState([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  // const handleChange = (e) => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  //   // console.log(e.target.name, "Value", e.target.value);
  // };
  useEffect(() => {
    const already = JSON.parse(localStorage.getItem("books"))
    let arr = already;
    if (already !== null && inputs.name.length > 0) {
      arr = [...already, inputs];
    } else if (already === null && inputs.name.length > 0) {
      arr = inputs;
    }
    localStorage.setItem("books", JSON.stringify(arr));
  }, [inputs]);

  // const sendRequest = async () => {
  //   await axios
  //     .post("http://localhost:5000/books", {
  //       name: String(inputs.name),
  //       author: String(inputs.author),
  //       description: String(inputs.description),
  //       price: Number(inputs.price),
  //       image: String(inputs.image),
  //       available: Boolean(checked),
  //     })
  //     .then((res) => res.data);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputs, checked);
  //   sendRequest().then(() => history("/books"));
  // };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      maxWidth={700}
      alignContent={"center"}
      alignSelf="center"
      marginLeft={"auto"}
      marginRight="auto"
      marginTop={10}
    >
      <FormLabel>Name</FormLabel>
      <TextField
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        fullWidth
        variant="outlined"
        name="name"
      />
      <FormLabel>Author</FormLabel>
      <TextField
        onChange={(e) => setAuthor(e.target.value)}
        margin="normal"
        fullWidth
        variant="outlined"
        name="author"
      />
      <FormLabel>Description</FormLabel>
      <TextField
        onChange={(e) => setDescription(e.target.value)}
        margin="normal"
        fullWidth
        variant="outlined"
        name="description"
      />
      <FormLabel>Price</FormLabel>
      <TextField
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        margin="normal"
        fullWidth
        variant="outlined"
        name="price"
      />
      <FormLabel>Image</FormLabel>
      <TextField
        onChange={(e) => setImage(e.target.value)}
        margin="normal"
        fullWidth
        variant="outlined"
        name="image"
      />
      <Button variant="contained" type="submit" onClick={() => {
        setInputs({
          name,
          author,
          description,
          price,
          image
        })
      }}>
        Add Book
      </Button>
    </Box>
  );
};

export default AddBook;
