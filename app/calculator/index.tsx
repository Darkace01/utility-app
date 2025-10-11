
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Calculator() {
  const [display, setDisplay] = useState('0');

  const handlePress = (value: string) => {
    if (value === 'C') {
      setDisplay('0');
    } else if (value === '=') {
      try {
        const result = eval(display);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      if (display === '0' || display === 'Error') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  const renderButton = (value: string, buttonStyle: any, textStyle?: any) => (
    <TouchableOpacity style={buttonStyle} onPress={() => handlePress(value)}>
      <Text style={[styles.buttonText, textStyle]}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {renderButton('C', styles.specialButton, styles.specialButtonText)}
          {renderButton('/', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('7', styles.numberButton)}
          {renderButton('8', styles.numberButton)}
          {renderButton('9', styles.numberButton)}
          {renderButton('*', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('4', styles.numberButton)}
          {renderButton('5', styles.numberButton)}
          {renderButton('6', styles.numberButton)}
          {renderButton('-', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('1', styles.numberButton)}
          {renderButton('2', styles.numberButton)}
          {renderButton('3', styles.numberButton)}
          {renderButton('+', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('0', [styles.numberButton, styles.zeroButton])}
          {renderButton('.', styles.numberButton)}
          {renderButton('=', styles.equalsButton)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 72,
    color: '#fff',
  },
  buttonsContainer: {
    flex: 3,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  numberButton: {
    backgroundColor: '#505050',
    flex: 1,
    margin: 5,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  operatorButton: {
    backgroundColor: '#FF9500',
    flex: 1,
    margin: 5,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  specialButton: {
    backgroundColor: '#D4D4D2',
    flex: 2,
    margin: 5,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  specialButtonText: {
    color: '#000',
    fontSize: 32,
  },
  equalsButton: {
    backgroundColor: '#FF9500',
    flex: 1,
    margin: 5,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zeroButton: {
    flex: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 32,
  },
});
