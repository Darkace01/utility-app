
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utility App</Text>
      <View style={styles.grid}>
        <Link href="/calculator" asChild>
          <TouchableOpacity style={[styles.button, styles.calculatorButton]}>
            <FontAwesome5 name="calculator" size={48} color="white" />
            <Text style={styles.buttonText}>Calculator</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/counter" asChild>
          <TouchableOpacity style={[styles.button, styles.counterButton]}>
            <FontAwesome5 name="sort-numeric-up" size={48} color="white" />
            <Text style={styles.buttonText}>Counter</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/notes" asChild>
          <TouchableOpacity style={[styles.button, styles.notesButton]}>
            <FontAwesome5 name="sticky-note" size={48} color="white" />
            <Text style={styles.buttonText}>Notes</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/game" asChild>
          <TouchableOpacity style={[styles.button, styles.gameButton]}>
            <FontAwesome5 name="gamepad" size={48} color="white" />
            <Text style={styles.buttonText}>Game</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  calculatorButton: {
    backgroundColor: '#3498db',
  },
  counterButton: {
    backgroundColor: '#2ecc71',
  },
  notesButton: {
    backgroundColor: '#f1c40f',
  },
  gameButton: {
    backgroundColor: '#e74c3c',
  },
});
