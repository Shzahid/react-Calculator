import "./styles.css";

import { useState } from "react";

export default function App() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitital: true,
    preOP: ""
  });
  function CalcButton(props) {
    return (
      <button
        className={props.className}
        onClick={() => props.onClick(props.value)}
      >
        {props.value}
      </button>
    );
  }
  function handleNumber(value) {
    let newValue = value;
    if (!calc.isInitital) newValue = calc.current + value;

    setCalc({
      current: newValue,
      total: calc.total,
      isInitital: false,
      preOP: calc.preOP
    });
  }

  function handleOperator(value) {
    const total = doCalculation();

    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitital: true,
      preOP: value
    });
  }
  function doCalculation() {
    let total = parseInt(calc.total, 10);

    switch (calc.preOP) {
      case "+":
        total += parseInt(calc.current, 10);
        break;
      case "*":
        total *= parseInt(calc.current, 10);
        break;
      case "-":
        total -= parseInt(calc.current, 10);
        break;
      case "/":
        total /= parseInt(calc.current, 10);
        break;
      default:
        total = parseInt(calc.current, 10);
        break;
    }
    return total;
  }

  function renderDisplay() {
    return calc.current;
  }
  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitital: true,
      preOP: "="
    });
  }
  function handleEquals() {
    let total = doCalculation();

    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitital: true,
      preOP: ""
    });
  }
  return (
    <div className="app-container">
      <div className="display">{renderDisplay()}</div>

      <CalcButton value="7" onClick={handleNumber}></CalcButton>
      <CalcButton value="8" onClick={handleNumber}></CalcButton>
      <CalcButton value="9" onClick={handleNumber}></CalcButton>
      <CalcButton
        className="operator"
        onClick={handleOperator}
        value="/"
      ></CalcButton>

      <CalcButton value="4" onClick={handleNumber}></CalcButton>
      <CalcButton value="5" onClick={handleNumber}></CalcButton>
      <CalcButton value="6" onClick={handleNumber}></CalcButton>
      <CalcButton
        className="operator"
        onClick={handleOperator}
        value="*"
      ></CalcButton>

      <CalcButton value="1" onClick={handleNumber}></CalcButton>
      <CalcButton value="2" onClick={handleNumber}></CalcButton>
      <CalcButton value="3" onClick={handleNumber}></CalcButton>
      <CalcButton
        className="operator"
        onClick={handleOperator}
        value="-"
      ></CalcButton>

      <CalcButton value="C" onClick={handleClear}></CalcButton>
      <CalcButton value="0" onClick={handleNumber}></CalcButton>
      <CalcButton value="=" onClick={handleEquals}></CalcButton>
      <CalcButton
        className="operator"
        onClick={handleOperator}
        value="+"
      ></CalcButton>
    </div>
  );
}
