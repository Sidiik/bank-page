import React from "react";
import handImg from "../../assets/handImg.png";
import styles from "./style.module.css";

const Handoff = () => {
  const strategic = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#Ff0075"
      className="bi bi-bookmark-check-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
      />
    </svg>
  );

  const calendar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#Ff0075"
      className="bi bi-calendar2-week-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
    </svg>
  );

  return (
    <div
      data-aos="fade-up"
      className={` ${styles.wrapper} d-flex justify-content-around align-items-start p-4`}
    >
      <div
        data-aos="fade-right"
        style={{ flexBasis: "45%" }}
        className={styles.handImg}
      >
        <img
          className={styles.img}
          style={{ borderRadius: 3, width: "100%" }}
          src="https://images.unsplash.com/photo-1573496267765-9254e55d9384?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dWl8ZW58MHx8MHx3aGl0ZXw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className={styles.text} data-aos="fade-left">
        <h1 style={{ fontWeight: 900, paddingBottom: ".4rem" }}>
          Handoff your work <br /> smarter now
        </h1>
        <p className="text-muted">
          Create documentation for the collaborators <br /> (i.e. designers or
          devs) directly in your design file.
        </p>
        <div className="strategy d-flex justify-content-around mt-3">
          <div className="icon">{strategic}</div>
          <div>
            <h4>Strategic</h4>
            <p className="text-muted">
              Suggests that the component spacing <br /> between cards and
              elements.
            </p>
          </div>
        </div>
        <div className="schedule d-flex justify-content-around mt-3">
          <div className="icon">{calendar}</div>
          <div>
            <h4>Work schedual</h4>
            <p className="text-muted">
              work schedule is the time an employee <br /> is expected to be on
              the job
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handoff;
