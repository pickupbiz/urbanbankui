import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { LoanItem } from "./LoanItem";
import axios from "axios";

export const LoanList = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
 
  const getData = async () => {
    const result = await axios.get("http://localhost:2525/loans");
    setData(result.data);
  };
  const handleAdd = async () => {
    const payload = { name };
    const result = await axios.post("http://localhost:2525/addloan", payload);
    getData();
    setName("");
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={2} align="center">
        <Grid item xs={6}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            label="Loan Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{ height: 55 }}
            color="success"
            onClick={handleAdd}
          >
            Add
          </Button>
        </Grid>
        {data.map((item) => (
          <LoanItem item={item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
