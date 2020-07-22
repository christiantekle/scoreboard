import React from "react";
import { Button, Container } from "@material-ui/core";
import Header from "./components/layout/Header"
function App() {
  return (
    <div>
      <Container maxWidth="sm">
         <Header />
       <Button color="primary">Primary</Button>
      </Container>
    </div>
  );
}

export default App;
