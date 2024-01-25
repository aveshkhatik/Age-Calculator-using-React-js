import React, { useState } from "react";
import "./Calculator.css"

const Calculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthdate = new Date(birthDate);

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDoff = today.getMonth() - birthdate.getMonth();
    if (
      monthDoff < 0 ||
      (monthDoff === 0 && today.getDate() < birthdate.getDate())
    ) {
      age--;
    }
    setAge(age);
  };

  const resetAge = () => {
    setBirthDate("");
    setAge("");
  };
  return (
    <>
      <div className="container">
        <h2>AGE CALCULATOR</h2>
        <p>the age calculator can determine the age or interval</p>
        <div className="container-main">
          <div className="right">
            <h4>DATE OF BIRTH</h4>
            <input
              type="date"
              className="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <div className="button-div">
              <button className="button-65" onClick={calculateAge}>
                calcluate age
              </button>
              <button className="button-65" onClick={resetAge}>
                reset
              </button>
            </div>
          </div>
          <div className="left">
            <div className="container-middle-para">
              <h1>your age is </h1>
            </div>
            <h1 className="age">{age > 0 ? `${age}` : ""}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
