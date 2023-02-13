import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const AccountTypeItem = ({ item }) => {
  return (
    <Grid item xs={4}>
      <Card sx={{ backgroundColor: "coral" }}>
        <CardContent>
          <h3>{item.name}</h3>
        </CardContent>
      </Card>
    </Grid>
  );
};
