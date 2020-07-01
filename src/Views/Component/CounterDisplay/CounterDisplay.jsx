import React from "react";
import CountUp from "react-countup";

const CounterDisplay = ({
  start = 0,
  end = 10,
  duration = 0.75,
  separator = ",",
  ...rest
}) => (
  <CountUp
    start={start}
    end={end}
    duration={duration}
    separator={separator}
    {...rest}
  />
);

export default CounterDisplay;
