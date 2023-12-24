import { useEffect, useRef, useState } from 'react';
import { BackGroundColor } from '../components/Button';

export enum Operations {
    sum,
    substraction,
    multiplication,
    division,
    equal
}

export interface rowObj{
    content: string,
    operation: (action: string) => void,
    color: BackGroundColor,
    active?: boolean
}

const evaluateAction = (number1: number, number2: number, action: string | null): number => {
    switch (action){
        case '÷':
            return number1 / number2;
        case 'X':
            return number1 * number2;
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        default:
            return number2;
    }
};

export const useCalculator = () => {

    const [prevNumber, setPrevNumber] = useState<string>('0');
    const [number, setNumber] = useState<string>('0');
    const operationToDo = useRef<string >('');
    const itsFirstNumber = useRef<boolean>(true);
    const [isActive, setIsActive] = useState({
        '÷': false,
        'X': false,
        '+': false,
        '-': false,
    });

    const clear = () => {
        setPrevNumber('0');
        setNumber('0');
        setIsActive({
            ...isActive,
            [operationToDo.current]: false,
        });
        operationToDo.current = '';
        itsFirstNumber.current = true;
    };
    const togleNumber = () => {
        setPrevNumber(number);
        const intNumber: number = parseFloat(number);
        const toggledValue:number = -intNumber;
        setNumber(toggledValue.toString());
    };
    const concatNumber = (textNumber: string) => {
        if (itsFirstNumber.current === true){
            if (number === '0' && textNumber !== '.'){
                setNumber(textNumber);
            }
            else {
                if (number.includes('.') && textNumber === '.'){
                    return;
                }
                setNumber(number + textNumber);
            }
        } else {
            setPrevNumber(number);
            setNumber(textNumber);
            itsFirstNumber.current = true;
        }
    };
    const setAction = (action: string) => {
        if (number === '0'){ return; }
        if (operationToDo.current !== ''){
            const prevValueParsed: number = parseFloat(prevNumber);
            const newValueParse: number = parseFloat(number);

            const result = evaluateAction(prevValueParsed, newValueParse, operationToDo.current).toString();
            setNumber(result);
            setIsActive({
                ...isActive,
                [operationToDo.current]: false,
            });
        }
        operationToDo.current = action;
        setIsActive((prevIsActive) => ({
            ...prevIsActive,
            [operationToDo.current]: true,
        }));
        itsFirstNumber.current = false;
    };

    const doCount = () => {
        const prevValueParsed: number = parseFloat(prevNumber);
        const newValueParse: number = parseFloat(number);

        const result = evaluateAction(prevValueParsed, newValueParse, operationToDo.current).toString();
        setNumber(result);
        setIsActive({
            ...isActive,
            [operationToDo.current]: false,
        });
        itsFirstNumber.current = true;
        operationToDo.current = '';
    };

    const delLastChar = () => {
        if (number !== '0') {setNumber(number.substring(0, number.length - 1));}
        if (number.length === 1) {setNumber('0');}
    };

    const firstRow: rowObj[] = [
        {content: 'C', operation: clear, color: BackGroundColor.lightGray},
        {content: '+/-', operation: togleNumber, color: BackGroundColor.lightGray},
        {content: 'del', operation: delLastChar, color: BackGroundColor.lightGray},
        {content: '÷', operation: setAction, color: BackGroundColor.orange, active: isActive['÷']},
    ];
    const secondRow: rowObj[] = [
        {content: '7', operation: concatNumber, color: BackGroundColor.gray},
        {content: '8', operation: concatNumber, color: BackGroundColor.gray},
        {content: '9', operation: concatNumber, color: BackGroundColor.gray},
        {content: 'X', operation: setAction, color: BackGroundColor.orange, active: isActive['X']},
    ];
    const thirdRow: rowObj[] = [
        {content: '4', operation: concatNumber, color: BackGroundColor.gray},
        {content: '5', operation: concatNumber, color: BackGroundColor.gray},
        {content: '6', operation: concatNumber, color: BackGroundColor.gray},
        {content: '-', operation: setAction, color: BackGroundColor.orange, active: isActive['-']},
    ];
    const fourthRow: rowObj[] = [
        {content: '1', operation: concatNumber, color: BackGroundColor.gray},
        {content: '2', operation: concatNumber, color: BackGroundColor.gray},
        {content: '3', operation: concatNumber, color: BackGroundColor.gray},
        {content: '+', operation: setAction, color: BackGroundColor.orange, active: isActive['+']},
    ];

    const fifthRow: rowObj[] = [
        {content: '.', operation: concatNumber, color: BackGroundColor.gray},
        {content: '=', operation: doCount, color: BackGroundColor.orange},
    ];


    return {
        firstRow,
        secondRow,
        thirdRow,
        fourthRow,
        fifthRow,
        prevNumber,
        number,
        concatNumber,
    };
};
