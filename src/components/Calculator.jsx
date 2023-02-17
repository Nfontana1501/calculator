import React from "react";
import CalculatorContext from '../context/CalculatorContext'
import CalculatorButton from "./CalculatorButton";
import CalculatorScreen from "./CalculatorScreen";

function Calculator() {
    return (  
        <CalculatorContext>
            <div className="calculatorContainer">
                <CalculatorScreen />
                <div className="container">
                    <CalculatorButton type="action" value="AC" />
                    <CalculatorButton type="operator" value="%" />
                    <CalculatorButton type="action" value="<=" />
                    <CalculatorButton type="operator" value="/" />
                    <CalculatorButton type="number" value="7" />
                    <CalculatorButton type="number" value="8" />
                    <CalculatorButton type="number" value="9" />
                    <CalculatorButton type="operator" value="x" />
                    <CalculatorButton type="number" value="4" />
                    <CalculatorButton type="number" value="5" />
                    <CalculatorButton type="number" value="6" />
                    <CalculatorButton type="operator" value="-" />
                    <CalculatorButton type="number" value="1" />
                    <CalculatorButton type="number" value="2" />
                    <CalculatorButton type="number" value="3" />
                    <CalculatorButton type="operator" value="+" />
                    <CalculatorButton type="action" value="+/-" />
                    <CalculatorButton type="number" value="0" />
                    <CalculatorButton type="action" value="." />
                    <CalculatorButton type="action" value="=" />
                </div>
            </div>
        </CalculatorContext>
    )
}

export default Calculator;
