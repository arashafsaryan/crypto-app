import React from "react";
import styles from "./Pagination.module.css";
import { Container, Grid } from "@mui/material"

const Pagination = ({ page, setPage }) => {
  const previousHandler = () => {
    setPage((page) => (page > 1 ? page - 1 : page));
  };
  const nextHandler = () => {
    setPage((page) => (page < 10 ? page + 1 : 10));
  };
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <div className={styles.pagination}>
            <button
              className={page === 1 ? styles.disabled : null}
              onClick={previousHandler}
            >
              Previous
            </button>
            <p className={page === 1 ? styles.select : null}>1</p>
            <p className={page === 2 ? styles.select : null}>2</p>
            {page > 2 && page < 9 && (
              <>
                <span>...</span>
                <p className={styles.select}>{page}</p>
              </>
            )}
            <span>...</span>
            <p className={page === 9 ? styles.select : null}>9</p>
            <p className={page === 10 ? styles.select : null}>10</p>
            <button
              onClick={nextHandler}
              className={page === 10 ? styles.disabled : null}
            >
              Next
            </button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pagination;
