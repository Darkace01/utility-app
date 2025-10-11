
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';
import { insertGame, fetchGames, updateGame, deleteGame } from '../../db/db';

export default function Counter() {
  const [games, setGames] = useState<any[]>([]);
  const [gameName, setGameName] = useState('');

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = () => {
    const result: any = fetchGames();
    setGames(result);
  };

  const handleAddGame = () => {
    if (gameName.trim() !== '') {
      insertGame(gameName, 0);
      setGameName('');
      loadGames();
    }
  };

  const handleIncrement = (id: number, score: number) => {
    updateGame(id, games.find(g => g.id === id).name, score + 1);
    loadGames();
  };

  const handleDecrement = (id: number, score: number) => {
    updateGame(id, games.find(g => g.id === id).name, score - 1);
    loadGames();
  };

  const handleDeleteGame = (id: number) => {
    deleteGame(id);
    loadGames();
  };

  return (
    <View style={styles.container}>
      <View style={styles.addGameContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter game name"
          value={gameName}
          onChangeText={setGameName}
        />
        <Button title="Add Game" onPress={handleAddGame} />
      </View>
      <FlatList
        data={games}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.gameItem}>
            <Text style={styles.gameName}>{item.name}</Text>
            <View style={styles.counterContainer}>
              <Button title="-" onPress={() => handleDecrement(item.id, item.score)} />
              <Text style={styles.score}>{item.score}</Text>
              <Button title="+" onPress={() => handleIncrement(item.id, item.score)} />
            </View>
            <Button title="Delete" onPress={() => handleDeleteGame(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  addGameContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  gameItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  gameName: {
    fontSize: 18,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  score: {
    fontSize: 20,
    marginHorizontal: 15,
  },
});
