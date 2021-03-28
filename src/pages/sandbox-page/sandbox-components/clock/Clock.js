import React, { Component } from "react";
import styles from "./styles.clock";

class Clock extends Component {
  constructor() {
    super();
    this.state = { today: new Date().toLocaleTimeString() };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick = () => {
    this.setState({ today: new Date().toLocaleTimeString() });
  };

  render() {
    return (
      <div style={styles.clockContainer} className=" ">
        <div>
          <div style={styles.text}>{this.state.today}</div>
        </div>
      </div>
    );
  }
}

export default Clock;
