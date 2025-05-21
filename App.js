import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  Button,
  View,
  StyleSheet,
  Alert
} from 'react-native';

export default function App() {
  // Dummy posts to get started
  const [posts, setPosts] = useState([
    { id: '1', text: 'Welcome to Oakwood Social!' },
    { id: '2', text: 'Tap React to show some ❤️' },
  ]);

  // Simple "react" handler: append an emoji
  const reactToPost = (id) => {
    setPosts(
      posts.map(p =>
        p.id === id ? { ...p, text: p.text + ' ❤️' } : p
      )
    );
  };

  // Handler for navigating to Graphing
  const goToGraphing = () => {
    // TODO: replace with real navigation logic (e.g., React Navigation)
    Alert.alert('Graphing', 'Navigating to Graphing screen...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>{item.text}</Text>
            <View style={styles.buttonRow}>
              <Button
                title="React"
                onPress={() => reactToPost(item.id)}
              />
              <Button
                title="Graphing"
                onPress={goToGraphing}
              />
            </View>
          </View>
        )}
      />
      {/* Global Graphing button at bottom (third button on this screen) */}
      <View style={styles.globalButton}>
        <Button
          title="Go to Graphing"
          onPress={goToGraphing}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  card: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  text: {
    marginBottom: 8,
    fontSize: 16
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  globalButton: {
    marginTop: 16,
    paddingHorizontal: 16
  }
});
