
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';
import { insertNote, fetchNotes, updateNote, deleteNote } from '../../db/db';

export default function Notes() {
  const [notes, setNotes] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedNote, setSelectedNote] = useState<any>(null);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = () => {
    const result: any = fetchNotes();
    setNotes(result);
  };

  const handleAddNote = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      insertNote(title, content);
      setTitle('');
      setContent('');
      loadNotes();
    }
  };

  const handleUpdateNote = () => {
    if (selectedNote && title.trim() !== '' && content.trim() !== '') {
      updateNote(selectedNote.id, title, content);
      setTitle('');
      setContent('');
      setSelectedNote(null);
      loadNotes();
    }
  };

  const handleDeleteNote = (id: number) => {
    deleteNote(id);
    loadNotes();
  };

  const selectNote = (note: any) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter content"
          value={content}
          onChangeText={setContent}
          multiline
        />
        <Button title={selectedNote ? 'Update Note' : 'Add Note'} onPress={selectedNote ? handleUpdateNote : handleAddNote} />
      </View>
      <FlatList
        data={notes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
            <View style={styles.buttonsContainer}>
              <Button title="Edit" onPress={() => selectNote(item)} />
              <Button title="Delete" onPress={() => handleDeleteNote(item.id)} />
            </View>
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
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  noteItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
