import React, { useState } from "react";

import styles from "./Homepage.module.css";
import TrainLine from "../line/TrainLine";

const Homepage = ({ lineData }) => {
  return (
    <div className={styles.theMap}>
      <TrainLine lineData={lineData} />
    </div>
  );
};

export default Homepage;
