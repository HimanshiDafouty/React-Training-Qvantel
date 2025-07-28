import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("🔵 constructor called");
    this.state = {
      count: 0,
      message: "Hello learning little bit of class component"
    };
  }

  // Lifecycle Method 1: Mounting
  componentDidMount() {
    console.log("🟢 componentDidMount called (Component added to DOM)");
  }

  // Lifecycle Method 2: Updating
  componentDidUpdate(prevProps, prevState) {
    console.log("🟡 componentDidUpdate called (State or props updated)");
    console.log("Previous state:", prevState);
    console.log("Current state:", this.state);
  }

  // Lifecycle Method 3: Unmounting
  componentWillUnmount() {
    console.log("🔴 componentWillUnmount called (Component is being removed)");
  }

  // Your click handler
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Required render method
  render() {
    console.log("⚪ render called");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h1>Message: {this.state.message}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
