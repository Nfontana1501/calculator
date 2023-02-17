import { useAppContext } from "../context/CalculatorContext";

function CalculatorButton({type, value}) {
    
    const calculator = useAppContext();

    function handleClick(){
        switch(type){
            case "number":
                calculator.addNumber(value);
                break;

            case "operator":
                calculator.addOperation(value);
                break;

            case "action":
                calculator.executeAction(value);
                break;
        }
    }
    
    return ( 
        <button className="calculatorButton" onClick={handleClick}>
            {value}
        </button>
    );
}

export default CalculatorButton;