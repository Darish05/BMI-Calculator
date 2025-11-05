import React, { useState } from "react";
import "./App.css";

function App() {
  // State management using useState Hook
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");

  // Function to calculate BMI
  const calculateBMI = () => {
    // Validate input fields
    if (!height || !weight) {
      alert("Please enter both height and weight!");
      return;
    }

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    // Check for negative or zero values
    if (heightNum <= 0 || weightNum <= 0) {
      alert("Height and weight must be positive values!");
      return;
    }

    // BMI formula: Weight / (Height/100)^2
    const heightInMeters = heightNum / 100;
    const bmiValue = weightNum / (heightInMeters * heightInMeters);
    const roundedBmi = bmiValue.toFixed(2);

    setBmi(roundedBmi);

    // Determine BMI status and color
    let bmiStatus = "";
    let color = "";

    if (bmiValue < 18.5) {
      bmiStatus = "Underweight";
      color = "#3498db"; // Blue
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      bmiStatus = "Normal weight";
      color = "#2ecc71"; // Green
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      bmiStatus = "Overweight";
      color = "#f39c12"; // Orange
    } else {
      bmiStatus = "Obese";
      color = "#e74c3c"; // Red
    }

    setStatus(bmiStatus);
    setStatusColor(color);
  };

  // Reset function
  const resetCalculator = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setStatus("");
    setStatusColor("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg mt-5">
              <div className="card-header bg-primary text-white text-center">
                <h2 className="mb-0">BMI Calculator</h2>
                <p className="mb-0 mt-2 small">Track Your Fitness</p>
              </div>
              <div className="card-body p-4">
                {/* Height Input */}
                <div className="mb-3">
                  <label htmlFor="height" className="form-label fw-bold">
                    Height (in centimeters)
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="height"
                    placeholder="Enter height in cm"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>

                {/* Weight Input */}
                <div className="mb-4">
                  <label htmlFor="weight" className="form-label fw-bold">
                    Weight (in kilograms)
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="weight"
                    placeholder="Enter weight in kg"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>

                {/* Calculate Button */}
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={calculateBMI}
                  >
                    Calculate BMI
                  </button>
                  {bmi && (
                    <button
                      className="btn btn-outline-secondary"
                      onClick={resetCalculator}
                    >
                      Reset
                    </button>
                  )}
                </div>

                {/* Results Display */}
                {bmi && (
                  <div className="mt-4">
                    <div className="alert alert-info text-center">
                      <h4 className="mb-2">Your BMI:</h4>
                      <h2 className="display-4 fw-bold">{bmi}</h2>
                    </div>
                    <div
                      className="alert text-center fw-bold"
                      style={{
                        backgroundColor: statusColor,
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      Status: {status}
                    </div>

                    {/* BMI Classification Guide */}
                    <div className="mt-3 p-3 bg-light rounded">
                      <h6 className="fw-bold mb-2">BMI Classification:</h6>
                      <ul className="list-unstyled mb-0 small">
                        <li className="mb-1">
                          <span className="badge bg-info me-2">
                            Underweight
                          </span>
                          BMI &lt; 18.5
                        </li>
                        <li className="mb-1">
                          <span className="badge bg-success me-2">Normal</span>
                          18.5 ≤ BMI ≤ 24.9
                        </li>
                        <li className="mb-1">
                          <span className="badge bg-warning me-2">
                            Overweight
                          </span>
                          25 ≤ BMI ≤ 29.9
                        </li>
                        <li>
                          <span className="badge bg-danger me-2">Obese</span>
                          BMI ≥ 30
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
