import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const CardItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ backgroundColor: "coral" }}>
        <CardContent>{item.name}</CardContent>
      </Card>
    </Grid>
  );
};
