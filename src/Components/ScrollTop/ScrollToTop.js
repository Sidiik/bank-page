import React, { useState } from "react";
import styles from "./scroll.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisiblity = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled < 300) {
      setIsVisible(false);
    }
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0 });
  };

  window.addEventListener("scroll", toggleVisiblity);

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="18"
      fill="currentColor"
      class="bi bi-caret-up-fill"
      viewBox="0 0 16 16"
    >
      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg>
  );
  return (
    <div className="container">
      {isVisible && (
        <div data-aos="fade-up" className={styles.container} onClick={scrollUp}>
          <div className={styles.svg}>{arrow}</div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
