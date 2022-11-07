import React from "react";
import BaseSpinner from "react-bootstrap/Spinner";

import styles from "../scss/spinner.module.scss";

const Spinner = () => (
  <BaseSpinner className={styles.spinner} animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </BaseSpinner>
);

export default Spinner;
