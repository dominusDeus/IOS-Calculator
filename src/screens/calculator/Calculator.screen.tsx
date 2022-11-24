import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import {styles} from '../Calculator.styles';
import {Button} from '../../components/button/Button.component';

enum Operations {
  'addition',
  'subtraction',
  'multiplication',
  'division',
}

export const Calculatorscreen = () => {
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
  return (
    <View style={styles.container}>
      {previousNumber !== '0' && (
        <Text style={[theme.textDefault, styles.smallResultText]}>
          {previousNumber}
        </Text>
      )}

      <Text
        style={[theme.textDefault, styles.resultText]}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <Button
          content="C"
          backgroundColor="#9B9B9B"
          onPress={wipeCalculations}
        />
        <Button
          content="+/-"
          backgroundColor="#9B9B9B"
          onPress={negativePositiveToggle}
        />
        <Button content="del" backgroundColor="#9B9B9B" onPress={delBtn} />
        <Button content="/" backgroundColor="orange" onPress={divisionBtn} />
      </View>
      <View style={styles.row}>
        <Button content="7" onPress={buildNumber} />
        <Button content="8" onPress={buildNumber} />
        <Button content="9" onPress={buildNumber} />
        <Button
          content="X"
          backgroundColor="orange"
          onPress={multiplicationBtn}
        />
      </View>
      <View style={styles.row}>
        <Button content="4" onPress={buildNumber} />
        <Button content="5" onPress={buildNumber} />
        <Button content="6" onPress={buildNumber} />
        <Button
          content="-"
          backgroundColor="orange"
          onPress={substractionBtn}
        />
      </View>
      <View style={styles.row}>
        <Button content="1" onPress={buildNumber} />
        <Button content="2" onPress={buildNumber} />
        <Button content="3" onPress={buildNumber} />
        <Button content="+" backgroundColor="orange" onPress={additionBtn} />
      </View>
      <View style={styles.row}>
        <Button content="0" twoRowButton onPress={buildNumber} />
        <Button content="." onPress={buildNumber} />
        <Button
          content="="
          backgroundColor="orange"
          onPress={wipeCalculations}
        />
      </View>
    </View>
  );
};

//#2D2D2D gris oscuro
//#FF9427 naranjita
//#9B9B9B
