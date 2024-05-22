import { Container, Grid, Typography, Avatar } from "@mui/material"
import whatCrypto from "../../assets/whatCrypto.png"
import styles from "./WhatCrypto.module.css"


const WhatCrypto = () => {
    return (
        <Container maxWidth="lg">
            <Grid container className={styles.container} mb={10}>
                <Grid item xs={12} md={6} className={styles.info} data-aos="flip-left">
                    <Typography component="h3" variant="h4" mb={3} fontWeight={700}>What is crypto?</Typography>
                    <Typography component="p" variant="p" mb={3}>Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.</Typography>
                </Grid>
                <Grid item xs={12} md={6} className={styles.image} data-aos="flip-right">
                    <img src={whatCrypto} alt="" />
                </Grid>
            </Grid>

        </Container>
    );
};

export default WhatCrypto;