import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import axios from "axios";
import { CardItem } from "./CardItem";

export const CardList = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const getData = async () => {
    const result = await axios.get("http://localhost:2525/cards");
    setData(result.data);
  };

  const handleAdd = async () => {
    const payload = { name };
    const result = await axios.post("http://localhost:2525/addcard", payload);
    setMsg(result.data);
    getData();
    setName("");
  };

  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, 3000);
  }, [msg]);
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={2} align="center">
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            value={name}
            fullWidth
            label="Add New Card"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            color="success"
            sx={{ height: 55 }}
            onClick={handleAdd}
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={12}>
          {msg !== "" && <Alert severity="success">{msg}</Alert>}
        </Grid>
        {data.map((item) => (
          <CardItem item={item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
