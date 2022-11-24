import {useState, useEffect, useRef} from 'react';

interface UseCalculatorStore {
  previousNumber: string;
  number: string;
  wipeCalculations: () => void;
  negativePositiveToggle: () => void;
  delBtn: () => void;
  divisionBtn: () => void;
  buildNumber: (number: string) => void;
  multiplicationBtn: () => void;
  substractionBtn: () => void;
  additionBtn: () => void;
  resolveCalculation: () => void;
}

enum Operations {
  'addition',
  'subtraction',
  'multiplication',
  'division',
}

export const useCalculator = (): UseCalculatorStore => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const currentOperation = useRef<Operations>();
  const wipeCalculations = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    //Reject double '.'
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //decimal
      if (textNumber === '.') {
        setNumber(number + textNumber);
        // If different from '0' and has decimals already
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
        // If different from '0' and doesn't have decimal
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else if (textNumber !== '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const negativePositiveToggle = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const delBtn = () => {
    if ((number.length === 2 && number.includes('-')) || number.length === 1) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const resolvePreviousNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const divisionBtn = () => {
    resolvePreviousNumber();
    currentOperation.current = Operations.division;
  };

  const multiplicationBtn = () => {
    resolvePreviousNumber();
    currentOperation.current = Operations.multiplication;
  };
  const substractionBtn = () => {
    resolvePreviousNumber();
    currentOperation.current = Operations.subtraction;
  };
  const additionBtn = () => {
    resolvePreviousNumber();
    currentOperation.current = Operations.addition;
  };

  const resolveCalculation = () => {
    const previousNumberAsNumber = Number(previousNumber);
    const numberAsNumber = Number(number);

    switch (currentOperation.current) {
      case Operations.addition:
        setNumber(`${previousNumberAsNumber + numberAsNumber}`);
        break;
      case Operations.division:
        setNumber(`${previousNumberAsNumber / numberAsNumber}`);
        break;
      case Operations.multiplication:
        setNumber(`${previousNumberAsNumber * numberAsNumber}`);
        break;
      case Operations.subtraction:
        setNumber(`${previousNumberAsNumber - numberAsNumber}`);
        break;
    }
    setPreviousNumber('0');
    currentOperation.current = undefined;
  };

  useEffect(() => {
    if (number === 'NaN' || number === 'Infinity') {
      setNumber('0');
    }
  }, [number]);

  return {
    previousNumber,
    number,
    wipeCalculations,
    negativePositiveToggle,
    delBtn,
    divisionBtn,
    buildNumber,
    multiplicationBtn,
    substractionBtn,
    additionBtn,
    resolveCalculation,
  };
};
