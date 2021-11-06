import React from "react";
import styles from "./style.module.css";
import CardHolder from "../../assets/card.png";

const Subscribe = () => {
  return (
    <div className="row mt-5">
      <div data-aos="fade-left" className={` col-md-8 row  ${styles.wrapper} `}>
        <div className="col-md-2 mt-2">
          <h5>Subscribe to get updated news</h5>
        </div>
        <div className="col-md-10 row">
          <div className="col-md-6">
            <h1 className={styles.h1}>
              Subscribe <br /> our newsletter
            </h1>
            <div>
              <button className={`btn btn-warning mt-3 shadow-none`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="flip-left" className="col-md-4"></div>
    </div>
  );
};

export default Subscribe;
