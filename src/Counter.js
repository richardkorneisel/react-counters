import React, { Component } from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    //Funtions
    increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decreaseCount = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
      return (
        <div className="Counter">
          <h4>Counter: {this.state.count}</h4>
          <button onClick={this.decreaseCount}>Decrement</button>
          <button onClick={this.increaseCount}>Increment</button>
        </div>
      );
    }
  }
  
  export default Counter;