import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const HOME_PAGE_KEY = "home_page";

export const assert = (condition, message) => {
  if (!condition) throw Error("Assert failed: " + (message || ""));
};

export const renderError = (message, component) => {
  return (
    <div style={{ color: "red" }}>
      <p className="lead">ERROR</p>
      <p>{message}</p>
      <p>
        Actual: <br />
        {JSON.stringify(component)}
      </p>
    </div>
  );
};

export const useComponentSeen = ({ delay = 100 } = {}) => {
  const [entered, setEntered] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!entered) {
      if (inView) {
        setTimeout(() => setEntered(true), delay);
      }
    }
  }, [inView, entered, delay]);

  return { ref, entered };
};
