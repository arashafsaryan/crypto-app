import styles from "./Footer.module.css"
import { Container, Grid } from "@mui/material"

const Footer = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <footer className={styles.footer}>
                        <p>Develope by Arash with 🤍</p>
                    </footer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;