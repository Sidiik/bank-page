import React, { useState } from "react";
import CountUp from "react-countup";
import styles from "./infos.module.css";
import VisibilitySensor from "react-visibility-sensor";
const Infos = () => {
  const [isVisible, setIsVisible] = useState({
    didView: false,
  });
  function onChange() {
    setIsVisible({
      didView: true,
    });
    if (isVisible.didView) {
      console.log("sawn");
    }
  }
  return (
    <div className={styles.wrapper}>
      {/* COSTUMERS COUNT */}
      <div className={styles.title}>
        <h1>
          <CountUp end={1000} duration={1} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          + <span className="text-primary">CUSTOMERS</span>
        </h1>

        <p className="text-muted">
          Analyze any Business or Creator account—including your competitors—to
          find the imagery, visuals, and captions that drive audience
          engagement. Get social calendars planned faster and spend less time
          testing content strategies.
        </p>
      </div>
      <div className={styles.qinfo}>
        <div className={styles.products}>
          <h5 className="text-muted">Products</h5>
          <h2 style={{ fontWeight: 700 }}>
            <CountUp end={17000} duration={1} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </h2>
        </div>
        <div className={styles.likes}>
          <h5 className="text-muted">Likes</h5>
          <h2 style={{ fontWeight: 700 }}>
            <CountUp end={4000} duration={1} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>{" "}
          </h2>
        </div>
        <div className={styles.sale}>
          <h5 className="text-muted">Sales</h5>
          <h2 style={{ fontWeight: 700 }}>
            <CountUp end={65000} duration={1} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </h2>
        </div>
        <div className={styles.customers}>
          <h5 className="text-muted">Customers</h5>
          <h2 style={{ fontWeight: 700 }}>
            <CountUp end={15000} duration={1} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Infos;
