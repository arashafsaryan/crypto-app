import { Avatar, Container, Grid, Typography } from "@mui/material";
import styles from "./TopCurrencies.module.css"
import { useEffect, useState } from "react";
import { topCurrencies } from "../services/cryptoApi";
import increase from "../../assets/increase.png"
import decrease from "../../assets/decrease.png"
import { Link } from "react-router-dom";

const TopCurrencies = () => {
    const [coins, setCoins] = useState([])
    useEffect(() => {
        const getTopData = async () => {
            const res = await fetch(topCurrencies())
            const json = await res.json()
            setCoins(json)
            console.log(json)
            console.log(coins)
        }
        getTopData()
    }, [])
    return (
        <Container maxWidth="lg"  >
            <Grid container spacing={2} className={styles.container} my={5}>
                {coins.map(coin =>
                    <Grid item key={coin.id} xs={5.5} md={2.5} className={styles.coinItem} p={2} data-aos="fade-up">
                        <Typography component="div" variant="div" width="100%">
                            <Avatar alt="Remy Sharp" src={coin.image} />
                            <Link to={`/coins/${coin.id}`} className={styles.coinName}>{coin.name}</Link>
                            <Typography component="div" variant="div" className={styles.coinValue} mt={3}>
                                <Typography>
                                    <Typography component="p" variant="p" >${coin.current_price.toLocaleString()}</Typography>
                                    <Typography component="p" variant="p" className={coin.price_change_percentage_24h > 0 ? styles.increase : styles.decrease}>{coin.price_change_percentage_24h.toFixed(2)}%</Typography>
                                </Typography>
                                <Typography>
                                    <Avatar src={coin.price_change_percentage_24h > 0 ? increase : decrease} alt="" className={styles.coinChart} />
                                </Typography>
                            </Typography>
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default TopCurrencies;