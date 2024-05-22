import { Avatar, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./AccordionHome.module.css"
import imgCrypto from "../../assets/imgCrypto.png"

const AccordionHome = () => {
    return (
        <Container maxWidth="lg">
            <Grid container my={20} className={styles.container} spacing={1}>
                <Grid item xs={12} md={6} data-aos="zoom-in">
                    <Typography component="h5" variant='h3' fontWeight="600" color="yellow">CRYPTO</Typography>
                    <Typography component="p" variant='h5' mt={3} fontWeight={100} color="#8a8a8a">crypto currency is the ultimate alpha group for great and experienced flipping coins</Typography>
                    <Avatar src={imgCrypto} alt='imgCrypto' className={styles.imgCrypto} />
                </Grid>
                <Grid item xs={12} md={6} data-aos="zoom-in-up">
                    <div>
                        <Accordion className={styles.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                Who we are?
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                We're with you the enter way...
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                Participate in our COIN Educational Program
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AccordionHome;