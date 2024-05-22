import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./DitailsCoin.module.css"
import { RotatingLines } from "react-loader-spinner";
import { GiTrophyCup } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa6";
import { MdPriceCheck } from "react-icons/md";
import { Container, Grid } from "@mui/material"


const DetailsCoin = () => {
  const [coin, setCoin] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    const getOneCoin = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const json = await res.json();
        setCoin(json);
        setIsLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    };
    getOneCoin();
  }, [id]);
  console.log(coin)
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <div>
            {isLoading ? <div className={styles.loading}><RotatingLines strokeColor="#ffffff" strokeWidth="2" /></div>
              :
              <div className={styles.container}>
                <FaArrowLeft className={styles.return} onClick={() => navigate(-1)} />
                <div className={styles.coinInfo}>
                  <div className={styles.coinValue}>
                    <img src={coin.image.small} alt={coin.id} />
                    <div className={styles.name}>
                      <span className={styles.coinName}>{coin.name}</span>
                      <span className={styles.symbol}>{coin.symbol.toUpperCase()}</span>
                    </div>
                    <div>
                      <span className={styles.price}><MdPriceCheck /> Price : ${coin.market_data.current_price.usd.toLocaleString()}</span>
                      <span className={coin.market_data.market_cap_change_percentage_24h > 0 ? styles.success : styles.error}>{coin.market_data.market_cap_change_percentage_24h.toFixed(2)}%</span>
                    </div>
                  </div>
                  <div className={styles.coinBirth}>
                    <span className={styles.rank}><GiTrophyCup /> Rank : #{coin.market_data.market_cap_rank}</span>
                    <span className={styles.birth}>Birth : {coin.genesis_date}</span>
                  </div>
                </div>
                <div className={styles.description}>
                  <p dangerouslySetInnerHTML={{ __html: coin.description.en }}></p>
                </div>
              </div>
            }
          </div>
        </Grid>
      </Grid>
    </Container>
  )
};

export default DetailsCoin;
