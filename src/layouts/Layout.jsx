import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Container, Grid } from "@mui/material"

const Layout = ({ children }) => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Nav />
          {children}
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
