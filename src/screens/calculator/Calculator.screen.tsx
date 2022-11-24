import React from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import {styles} from './Calculator.styles';
import {Button} from '../../components/button/Button.component';
import {useCalculator} from './useCalculator';

export const Calculatorscreen = () => {
  const {
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
  } = useCalculator();

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
          onPress={resolveCalculation}
        />
      </View>
    </View>
  );
};
