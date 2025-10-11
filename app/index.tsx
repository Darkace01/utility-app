
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Utility App!</Text>
      <Text style={styles.subtitle}>Use the drawer navigation to explore the different sections:</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Calculator</Text>
        <Text>A simple calculator for your daily needs.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Game Counter</Text>
        <Text>A customizable counter for your games. You can add, update, and delete games and their scores.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notes</Text>
        <Text>A simple note-taking section. You can add, edit, and delete your notes.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Game</Text>
        <Text>A simple number guessing game to pass the time.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
