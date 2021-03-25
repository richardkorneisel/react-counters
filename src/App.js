import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  constructor() {
    super()

    this.state = {
      counters: 5
    }
    this.decreaseCounters = this.decreaseCounters.bind(this);
    this.increaseCounters = this.increaseCounters.bind(this);
  }
  increaseCounters() {
    let counters = this.state.counters + 1;

    this.setState({
      counters 
    });
    console.log(this.state.counters);
  }

  decreaseCounters() {
    let counters = this.state.counters - 1;

    this.setState({
      counters
    });
    console.log(this.state.counters);
  }
  // Same as 
  // decreaseCounters=()=>{
  //   this.setState({
  //     counters = this.state.counters - 1;
  //   });
  //   console.log(this.state.counters);
  // }

  
  render() {  //will always have render and return
    //console.log(this.props.data)  //this because class component. data because what we defined. put .counters after .data to get just number.  Use class components because it uses state.
    return (
      <div className="App">  
        <Header 
        increaseCounters={this.increaseCounters}
        decreaseCounters={this.decreaseCounters}
        />
        {/* <h4>{this.props.data.counters}</h4> */}
        <CounterList counters = {this.state.counters}/>
      </div>
    );
  }
}

export default App;