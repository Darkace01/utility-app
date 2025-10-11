
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { useEffect } from 'react';
import { init } from '../db/db';

export default function Layout() {
  useEffect(() => {
    init()
      .then(() => {
        console.log('Database initialized');
      })
      .catch(err => {
        console.log('Database initialization failed');
        console.log(err);
      });
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the default route.
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="calculator/index" // This is the route to the calculator screen.
          options={{
            drawerLabel: 'Calculator',
            title: 'Calculator',
          }}
        />
        <Drawer.Screen
          name="counter/index" // This is the route to the counter screen.
          options={{
            drawerLabel: 'Counter',
            title: 'Counter',
          }}
        />
        <Drawer.Screen
          name="notes/index" // This is the route to the notes screen.
          options={{
            drawerLabel: 'Notes',
            title: 'Notes',
          }}
        />
        <Drawer.Screen
          name="game/index" // This is the route to the game screen.
          options={{
            drawerLabel: 'Game',
            title: 'Game',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
