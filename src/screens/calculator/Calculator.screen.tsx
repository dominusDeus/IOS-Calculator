import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import {styles} from '../Calculator.styles';
import {Button} from '../../components/button/Button.component';

export const Calculatorscreen = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const wipeCalculations = () => {
    setNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') return;
    // setNumber(number + textNumber);
  };

  const negativePositiveToggle = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[theme.textDefault, styles.smallResultText]}>
        {previousNumber}
      </Text>
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
        <Button
          content="del"
          backgroundColor="#9B9B9B"
          onPress={wipeCalculations}
        />
        <Button
          content="/"
          backgroundColor="orange"
          onPress={wipeCalculations}
        />
      </View>
      <View style={styles.row}>
        <Button content="7" onPress={buildNumber} />
        <Button content="8" onPress={buildNumber} />
        <Button content="9" onPress={buildNumber} />
        <Button
          content="X"
          backgroundColor="orange"
          onPress={wipeCalculations}
        />
      </View>
      <View style={styles.row}>
        <Button content="4" onPress={buildNumber} />
        <Button content="5" onPress={buildNumber} />
        <Button content="6" onPress={buildNumber} />
        <Button
          content="-"
          backgroundColor="orange"
          onPress={wipeCalculations}
        />
      </View>
      <View style={styles.row}>
        <Button content="1" onPress={buildNumber} />
        <Button content="2" onPress={buildNumber} />
        <Button content="3" onPress={buildNumber} />
        <Button
          content="+"
          backgroundColor="orange"
          onPress={wipeCalculations}
        />
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
