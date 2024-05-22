import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { RotatingLines } from "react-loader-spinner";
import styles from "./TableCoin.module.css";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material"

const Tablecoin = ({ coins, isLoading, currency }) => {
  return (
    <Container className={styles.container}>
      <Grid container>
        <Grid item xs={12}>
          {isLoading ? (
            <div className={styles.loading}>
              <RotatingLines strokeColor="#ffffff" strokeWidth="2" />
            </div>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>24th</th>
                  <th>TotalValume</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => (
                  <TableRow coin={coin} currency={currency} key={coin.id} />
                ))}
              </tbody>
            </table>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tablecoin;

const TableRow = ({ coin, currency }) => {
  const {
    id,
    symbol,
    image,
    name,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  } = coin;

  return (
    <tr>
      <td>
        <Link to={`/coins/${id}`} className={styles.symbol}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </Link>
      </td>
      <td>{name}</td>
      <td>{currency === "usd" && "$" || currency === "eur" && "€" || currency === "jpy" && "¥"}{current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{currency === "usd" && "$" || currency === "eur" && "€" || currency === "jpy" && "¥"}{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
};
