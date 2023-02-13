import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const BranchItem = ({ item }) => {
  return (
    <Grid item xs={4}>
      <Card sx={{ backgroundColor: "aliceblue" }}>
        <CardContent>
          <h5>
            {item.name} - {item.branchcode}
          </h5>
          <h3>{item.city}</h3>
        </CardContent>
      </Card>
    </Grid>
  );
};
