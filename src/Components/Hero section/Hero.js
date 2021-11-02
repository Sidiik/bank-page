import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <div className="container-fluid mt-4 d-flex justify-content-between">
        <div className={styles.info}>
          <h1 className={styles.heroTitle}>
            Banking <br /> more smart
          </h1>
          <div className={styles.details}>
            <h5 className="text-muted w-50">
              Meet the only management platform and corporate your card.
            </h5>
          </div>

          <div className={styles.getcard}>
            <button className="btn bg-dark  shadow-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
            <p>Get your card now.</p>
          </div>
        </div>
        <div className={styles.heroImg}>
          <img
            src="https://www.myzeller.com/hubfs/products%20-%20v1/zeller-mastercard-2104-bw-tips-v3.jpg"
            className={styles.img}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
