import React from "react";
import styles from "./blue.module.css";

const Blue = () => {
  return (
    <div className={styles.blueish}>
      <div className={`${styles.blueishDiv} container-fluid mt-6 d-flex justify-content-around`}>
        <div data-aos="fade-left" className={styles.left}>
          <h3>
            We are Building <br /> Beyond the propability
          </h3>
          <p className="text-muted">
            The marketing strategy lays out target markets and the value
          </p>
        </div>
        <div data-aos="fade-right" className={styles.right}>
          <h3>
            Social media <br /> Social uniqueness
          </h3>
          <p className="text-muted">
            Essentially a formula for how the bussiness is growing
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Blue;
