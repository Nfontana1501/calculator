import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({
    memory: null,
    operation: null,
    currenValue: 0,
    isDecimal: false, 
    addNumber: (value) => {},
    addOperation: (op) => {},
    getResult: () => {},
    executeAction: (action) => {},
    })

function CalculatorContext({children}) {

    const [memory, setMemory] = useState(null);
    const [operation, setOperation] = useState(null);
    const [currentValue, setCurrentValue] = useState(0);
    const [isReset, setIsReset] = useState(true);
    const [isDecimal, setIsDecimal] = useState(false);

    function handleAddNumber (value){
        if(isReset){
            if(value === "."){
                setIsDecimal(true);
            }else{
                const dot = isDecimal ? "." : "";
                const newValue = currentValue.toString() + dot + value.toString();
                setCurrentValue(parseFloat(newValue));
                setIsReset(false);
                setIsDecimal(false);
            }
        }else{
            if(value === "."){
                setIsDecimal(true);
            }else{
                const dot = isDecimal ? "." : "";
                const newValue = currentValue.toString() + dot + value.toString();
                setIsDecimal(false);
                setCurrentValue(parseFloat(newValue));
            }
        }
    }

    function handleAddOperation (op){
        if(currentValue){
            if(operation){
                handleGetResult();
                setOperation(op);
            }else{
                setOperation(op);
                setMemory(currentValue);
                setCurrentValue(0);
                setIsReset(true);
            }
        }
    }

    function handleGetResult () {
        let result = 0;
        if (currentValue && operation && memory){
            switch(operation){
                case "+":
                    result = parseFloat(currentValue) + parseFloat(memory);
                    break;
                case "-":
                    result = parseFloat(memory) - parseFloat(currentValue);
                    break;
                case "x":
                    result = parseFloat(currentValue) * parseFloat(memory);
                    break;
                case "/":
                    result = parseFloat(memory) / parseFloat(currentValue);
                    break;
                case "%":
                    result = (parseFloat(memory) / 100) * parseFloat(currentValue);
                    break;
            }

            setCurrentValue(result);
            setOperation(null);
            setMemory(result);
            setIsReset(true);
            setIsDecimal(false);
        }
    }

    function handleClean(){
        setCurrentValue(0);
        setMemory(null);
        setOperation(null);
        setIsReset(true);
        setIsDecimal(false);
    }

    function handleDelete(){
        const index = currentValue.toString().indexOf(".")
        if(index > 0){
            const numberOfDecimals = currentValue.toString().slice(index + 1).length;

            if(numberOfDecimals === 1 ){
                const newMinNumber = Math.floor(currentValue);
                setCurrentValue(newMinNumber);
            }else{
                const newNumber = currentValue.toFixed(numberOfDecimals - 1);
                setCurrentValue (newNumber);
            }

        }else{
            setCurrentValue(parseInt(currentValue/10))
        }
    }

    function handleChangeSign(){
        setCurrentValue(currentValue * -1)
    }

    function handleConvertToFloat(){
        if(currentValue.toString().indexOf(".") > 0){
            
        }else{
            handleAddNumber(".")
        }
    }

    function handleExecuteAction (action) {
        switch(action){
            case "=":
                handleGetResult();
                break;
            case "AC":
                handleClean();
                break;
            case "<=":
                handleDelete();
                break;
            case "+/-":
                handleChangeSign();
                break;
            case ".":
                handleConvertToFloat();
                break;
        }
    }

    return ( 
        <AppContext.Provider value={{
            memory,
            operation,
            currentValue,
            isDecimal,
            addNumber: handleAddNumber,
            addOperation: handleAddOperation,
            getResult: handleGetResult,
            executeAction: handleExecuteAction
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default CalculatorContext

export function useAppContext(){
    return useContext(AppContext);
}