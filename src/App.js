import React from "react";
import { Card, CardContent } from "@mui/material";
import { Landing } from "./components/Landing";
import "./components/common.css";

function App() {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Landing />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default App;
