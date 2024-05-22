import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Container, Typography, Grid, Box } from "@mui/material";
import { TiThMenu } from "react-icons/ti";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Container maxWidth="lg">
      <Grid container className={styles.container} mb={5} mt={2}>
        <Grid item xs={12} className={styles.nav}>
          <Link to="/">
            <Typography component="h3" variant="h4" fontWeight={700}>
              <FaBitcoin /> Crypto App
            </Typography>
          </Link>
          <div className={styles.humberMenu}>
            <Button onClick={toggleDrawer(true)}>
              <TiThMenu className={styles.humber} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <Box className={styles.itemsHumber}>
                <Typography component="div" variant="div">
                  <Link onClick={toggleDrawer(false)} to="/">
                    home
                  </Link>
                </Typography>
                <Typography component="div" variant="div">
                  <Link onClick={toggleDrawer(false)} to="/coins">
                    coins
                  </Link>
                </Typography>
                <Typography component="div" variant="div">
                  <Link onClick={toggleDrawer(false)} to="/">
                    aboutUs
                  </Link>
                </Typography>
                <Typography component="div" variant="div">
                  <Link onClick={toggleDrawer(false)} to="/">
                    contactUs
                  </Link>
                </Typography>
              </Box>
            </Drawer>
          </div>
          <header className={styles.mainMenu}>
            <div className={styles.itemNav}>
              <Link to="/">home</Link>
              <Link to="/coins">coins</Link>
              <Link to="/">aboutUs</Link>
              <Link to="/">contactUs</Link>
            </div>
          </header>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Nav;
