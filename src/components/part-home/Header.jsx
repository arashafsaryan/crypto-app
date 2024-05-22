import { Container, Grid, Typography,Avatar } from '@mui/material';
import cover from "../../assets/cover-home.png"
import styles from "./Header.module.css"
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <Container maxWidth="lg" >
            <Grid container className={styles.container}>
                <Grid item xs={12} md={6} className={styles.info} data-aos="zoom-in">
                    <Typography component="h3" variant='h2' fontWeight="700" mt={5} >
                        Buy anything with Crypto
                    </Typography>
                    <Typography component="h6" variant='h6' fontWeight="200" my={5} color="#8a8a8a">
                        Ctyptos exchange platform is the premier digital currency exchange licensed in and for state of NY
                    </Typography>
                    <Link to="/coins" className={styles.linkHead}>Get started</Link>
                </Grid>
                <Grid item xs={12} md={6} className={styles.cover} data-aos="zoom-in">
                    <Avatar src={cover} alt="cover" className={styles.img} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;