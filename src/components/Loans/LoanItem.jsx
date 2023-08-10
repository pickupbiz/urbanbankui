import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const LoanItem = ({ item }) => {
  return (
    <Grid item xs={4}>
      <Card sx={{ backgroundColor: "aliceblue" }}>
        <CardContent>
          <h5>
            {item.name}
          </h5>
        </CardContent>
      </Card>
    </Grid>
  );
};
