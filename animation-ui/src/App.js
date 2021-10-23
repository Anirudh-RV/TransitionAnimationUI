import React, { Component } from "react";
import RangeStepInput from "./RangeStepInput";
import displayFiles from "./constants";
import "./App.css";

const forceNumber = function (n) {
  n = Number(n);
  if (isNaN(n) || typeof n === "undefined") {
    n = 0;
  }
  return n;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clipPercentage: 50,
    };
  }

  onSliderMovement = (e) => {
    const newVal = forceNumber(e.target.value);
    this.setState({ clipPercentage: newVal });
  };

  render() {
    return (
      <div class="w-full h-screen bg-gray-800 flex justify-center items-center">
        <div class="bg-gray-700 w-6/12 h-6/12 relative">
          <div class="absolute inset-0 flex justify-center items-center">
            <img
              src={displayFiles.rawImage}
              alt="Raw"
              class="bg-gray-900"
              ref={(c) => (this.leftImage = c)}
            />
          </div>
          <div class="absolute inset-0 flex justify-center items-center">
            <img
              src={displayFiles.processedImage}
              alt="Processed"
              class="bg-gray-900 mix-blend-lighten"
              ref={(c) => (this.rightImage = c)}
              style={{
                clipPath: "inset(0 0 0 " + this.state.clipPercentage + "%)",
              }}
            />
          </div>
          <div class="absolute inset-0 flex justify-center items-center">
            <RangeStepInput
              min={0}
              max={100}
              value={this.state.clipPercentage}
              step={1}
              onChange={this.onSliderMovement.bind(this)}
              class="absolute inset-0 flex justify-center items-center"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
