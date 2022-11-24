import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultText: {
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  smallResultText: {
    fontSize: 30,
    textAlign: 'right',
    color: 'rgba(255,255,255,0.5)',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
