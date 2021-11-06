import React from "react";
import ReactTypingEffect from "react-typing-effect";
import styles from "./hero.module.css";
import heroImg from "../../assets/zeller.png";

const Hero = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h2 data-aos="fade-right" className={styles.heroTitle}>
            Banking <br /> made{" "}
            <span className="text-danger">
              <ReactTypingEffect
                typingDelay={200}
                eraseSpeed={50}
                speed={50}
                text={["simple.", "modern.", "easy.", "for you."]}
              />
            </span>
          </h2>
          <div data-aos="fade-up" className={styles.details}>
            <h5 className="text-muted ">
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
                className="bi bi-arrow-right"
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
        <div data-aos="fade-left" className={styles.heroImg}>
          <img src={heroImg} className={styles.img} />
        </div>
      </div>
    </>
  );
};

export default Hero;
