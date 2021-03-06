import React, { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const menu = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      class="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );

  const showHide = () => {
    setShow(!show);
  };

  return (
    <div className={styles.header}>
      <div className="container-fluid mt-2">
        <div className="wrapper d-flex justify-content-between align-items-center">
          <div className={styles.logo}>
            <h4 style={{ cursor: "pointer", flexBasis: "80%" }}>Sidiiko</h4>
          </div>

          <div
            className={`${styles.links} d-flex justify-content-between`}
            style={{ flexBasis: "30%" }}
          >
            <p style={{ cursor: "pointer" }} className={styles.link}>
              About
            </p>
            <p style={{ cursor: "pointer" }} className={styles.link}>
              How it works
            </p>
            <p style={{ cursor: "pointer" }} className={styles.link}>
              Contact
            </p>
          </div>

          <div className={styles.cart} style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="18"
              fill="currentColor"
              className="bi bi-handbag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
            </svg>
          </div>
          <div className={styles.menu} onClick={showHide}>
            {menu}
          </div>
        </div>
      </div>
      {show && (
        <div
          data-aos="fade-right"
          className={`${styles.mobilelinks} d-flex justify-content-between`}
          style={{ flexBasis: "30%" }}
        >
          <p style={{ cursor: "pointer" }} className={styles.link}>
            About
          </p>
          <p style={{ cursor: "pointer" }} className={styles.link}>
            How it works
          </p>
          <p style={{ cursor: "pointer" }} className={styles.link}>
            Contact
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
