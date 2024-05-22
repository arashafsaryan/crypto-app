import AccordionHome from "../part-home/AccordionHome";
import Header from "../part-home/Header";
import TopCurrencies from "../part-home/TopCurrencies";
import WhatCrypto from "../part-home/WhatCrypto";
import styles from "./Home.module.css"
import {Container,Grid} from "@mui/material"

const Home = () => {
    return (
                    <div className={styles.container}>
                        <Header />
                        <TopCurrencies />
                        <AccordionHome />
                        <WhatCrypto />
                    </div>
    );
};

export default Home;