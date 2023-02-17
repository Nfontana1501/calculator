import { useAppContext } from "../context/CalculatorContext";

function CalculatorScreen() {

    const calculator = useAppContext();

    return ( 
        <div>
            <div>
                memory: {calculator.memory}
                operation: {calculator.operation}
                isDecimal: {calculator.isDecimal ? "true" : "false"}
            </div>
            <div>
                {calculator.currentValue}{calculator.isDecimal ? "." : ""}
            </div>
        </div>
    );
}

export default CalculatorScreen;