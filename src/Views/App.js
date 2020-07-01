import React from "react";
import ApplicationHeader from "./ApplicationHeader/ApplicationHeader";
import CountryPicker from "./CountryPicker/CountryPicker";
import CardView from "./CardView/CardView";
import styles from "./App.module.css";
import "./App.css";
import ChartView from "./ChartView/ChartView";

const App = () => {
  return (
    <div className={styles.container}>
      <ApplicationHeader />
      <CountryPicker />
      <CardView />
      <ChartView />
    </div>
  );
};

export default App;
