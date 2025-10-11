
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Calculator() {
  const [display, setDisplay] = useState('');

  const handlePress = (value: string) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.row}>
        <Button title="7" onPress={() => handlePress('7')} />
        <Button title="8" onPress={() => handlePress('8')} />
        <Button title="9" onPress={() => handlePress('9')} />
        <Button title="/" onPress={() => handlePress('/')} />
      </View>
      <View style={styles.row}>
        <Button title="4" onPress={() => handlePress('4')} />
        <Button title="5" onPress={() => handlePress('5')} />
        <Button title="6" onPress={() => handlePress('6')} />
        <Button title="*" onPress={() => handlePress('*')} />
      </View>
      <View style={styles.row}>
        <Button title="1" onPress={() => handlePress('1')} />
        <Button title="2" onPress={() => handlePress('2')} />
        <Button title="3" onPress={() => handlePress('3')} />
        <Button title="-" onPress={() => handlePress('-')} />
      </View>
      <View style={styles.row}>
        <Button title="0" onPress={() => handlePress('0')} />
        <Button title="." onPress={() => handlePress('.')} />
        <Button title="C" onPress={() => handlePress('C')} />
        <Button title="+" onPress={() => handlePress('+')} />
      </View>
      <View style={styles.row}>
        <Button title="=" onPress={() => handlePress('=')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    fontSize: 48,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
});
