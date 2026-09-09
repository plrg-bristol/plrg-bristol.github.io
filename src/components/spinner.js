import React from "react";
import BaseSpinner from "react-bootstrap/Spinner";

import styles from "../scss/spinner.module.scss";

const Spinner = () => (
  <BaseSpinner
    className={styles.spinner}
    style={{ position: "absolute", top: "48%", left: "48%" }}
    animation="border"
    role="status"
  >
    <span className="visually-hidden">Loading...</span>
  </BaseSpinner>
);

export default Spinner;
