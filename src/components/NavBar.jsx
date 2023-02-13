import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { NavBarItem } from "./NavBarItem";
import axios from "axios";

export const NavBar = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:2525/navs");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={1} sx={{ marginBottom: 2 }}>
      {data.map((item) => (
        <NavBarItem item={item} />
      ))}
    </Grid>
  );
};
