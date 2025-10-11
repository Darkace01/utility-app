
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function Game() {
  const [target, setTarget] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [guesses, setGuesses] = useState(0);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('Guess a number between 1 and 100');
    setGuesses(0);
  };

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess)) {
      setMessage('Please enter a valid number');
      return;
    }

    setGuesses(guesses + 1);
    if (numGuess === target) {
      setMessage(`You guessed it in ${guesses + 1} guesses!`);
    } else if (numGuess < target) {
      setMessage('Too low!');
    } else {
      setMessage('Too high!');
    }
    setGuess('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Guessing Game</Text>
      <Text style={styles.message}>{message}</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={guess}
        onChangeText={setGuess}
      />
      <Button title="Guess" onPress={handleGuess} />
      <View style={styles.newGameButton}>
        <Button title="New Game" onPress={startNewGame} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  newGameButton: {
    marginTop: 20,
  },
});
