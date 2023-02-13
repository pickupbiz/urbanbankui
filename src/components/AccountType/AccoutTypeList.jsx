import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import { AccountTypeItem } from "./AccountTypeItem";

export const AccoutTypeList = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const getData = async () => {
    const result = await axios.get("http://localhost:2525/acctype");
    setData(result.data);
  };

  const handleAdd = async () => {
    const payload = { name };
    const result = await axios.post(
      "http://localhost:2525/addacctype",
      payload
    );
    getData();
    setName("");
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={8}>
        <TextField
          variant="outlined"
          value={name}
          label="Add Account Type"
          fullWidth
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          fullWidth
          color="warning"
          sx={{ height: 55 }}
          onClick={handleAdd}
        >
          Add
        </Button>
      </Grid>
      {data.map((item) => (
        <AccountTypeItem item={item} />
      ))}
    </Grid>
  );
};
