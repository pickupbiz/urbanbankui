import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { BranchItem } from "./BranchItem";
import axios from "axios";

export const BranchList = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [branchcode, setBranchcode] = useState(0);
  const [city, setCity] = useState("");

  const getData = async () => {
    const result = await axios.get("http://localhost:2525/branches");
    setData(result.data);
  };
  const handleAdd = async () => {
    const payload = { name, branchcode, city };
    const result = await axios.post("http://localhost:2525/addbranch", payload);
    getData();
    setName("");
    setBranchcode("");
    setCity("");
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={2} align="center">
        <Grid item xs={3}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            label="Branch Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={branchcode}
            onChange={(e) => setBranchcode(e.target.value)}
            variant="outlined"
            label="Branch Code"
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={city}
            onChange={(e) => setCity(e.target.value)}
            variant="outlined"
            label="City"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
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
          <BranchItem item={item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
