import React from "react"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      heightFeet: "",
      heightInch: "",
      weight: "",
    }

    this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this)
    this.handleHeightInchChange = this.handleHeightInchChange.bind(this)
    this.handleWeightChange = this.handleWeightChange.bind(this)
    this.calculateBMI = this.calculateBMI.bind(this)
  }

  handleHeightFeetChange(event) {
    this.setState({
      heightFeet: event.target.value,
    })
  }

  handleHeightInchChange(event) {
    this.setState({
      heightInch: event.target.value,
    })
  }

  handleWeightChange(event) {
    this.setState({
      weight: event.target.value,
    })
  }

  calculateBMI() {
    if (this.state.weight && this.state.heightFeet && this.state.heightInch) {
      // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
      let INCHES_IN_FEET = 12

      var height = Number(this.state.heightFeet)
      // convert feet to inches
      height *= INCHES_IN_FEET
      // add the inches input field
      height += Number(this.state.heightInch)

      let weight = this.state.weight

      var bmi = (weight / (height * height)) * 703
      bmi = bmi.toFixed(2)

      return bmi
    }
  }

  getBMIResults(bmi) {
    let bmiResults = {
      label: "",
      alertClass: "",
    }

    if (bmi <= 18.5) {
      bmiResults.label = "Underweight"
      bmiResults.alertClass = "alert-danger"
    } else if (bmi <= 24.9) {
      bmiResults.label = "Normal weight"
      bmiResults.alertClass = "alert-success"
    } else if (bmi <= 29.9) {
      bmiResults.label = "Overweight"
      bmiResults.alertClass = "alert-warning"
    } else if (bmi >= 30) {
      bmiResults.label = "Obesity"
      bmiResults.alertClass = "alert-danger"
    } else {
      bmiResults.label = "BMI"
      bmiResults.alertClass = "alert-primary"
    }

    return bmiResults
  }

  render() {
    let bmi = this.calculateBMI()
    let results = this.getBMIResults(bmi)

    return (
      <div className="App container text-center">
        <div className="col-xs-12">
          <h1 className="fw-bold">BMI CALCULATOR</h1>
          <p>Enter your weight and height below.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="bmicard mb-4">
              <BmiDisplay
                bmi={bmi}
                label={results.label}
                alertClass={results.alertClass}
              />
              <form>
                <div className="form-group">
                  <legend>Weight = {this.state.weight}</legend>
                  <div className="row">
                    <div className="col-xs-12 mb-4">
                      <label className="control-label" htmlFor="bmiWeight">
                        <input
                          style={{ width: "200px" }}
                          className="range"
                          id="bmiWeight"
                          type="range"
                          min="1"
                          max="1000"
                          value={this.state.weight}
                          onChange={this.handleWeightChange}
                        />{" "}
                        lb
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <legend>
                    Height = {this.state.heightFeet}ft {this.state.heightInch}in
                  </legend>
                  <div className="row">
                    <div className="col-xs-6 mb-4">
                      <label className="control-label" htmlFor="bmiHeightFeet">
                        <input
                          style={{ width: "200px" }}
                          className="range"
                          id="bmiHeightFeet"
                          type="range"
                          min="1"
                          max="12"
                          value={this.state.heightFeet}
                          onChange={this.handleHeightFeetChange}
                        />{" "}
                        ft
                      </label>
                    </div>
                    <div className="col-xs-6 mb-4">
                      <label className="control-label" htmlFor="bmiHeightInch">
                        <input
                          style={{ width: "200px" }}
                          className="range"
                          id="bmiHeightInch"
                          type="range"
                          min="0"
                          max="12"
                          value={this.state.heightInch}
                          onChange={this.handleHeightInchChange}
                        />{" "}
                        in
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function BmiDisplay(props) {
  return (
    <div className={"bmi-result alert shadow " + props.alertClass}>
      <div>{props.bmi || "--.-"}</div>
      <div>{props.label}</div>
    </div>
  )
}

export default App
