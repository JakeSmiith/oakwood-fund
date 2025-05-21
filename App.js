import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Home screen with posts and a big "Click Graph" button
function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([
    { id: '1', text: 'Welcome to Oakwood Social!' },
    { id: '2', text: 'Tap React to show some ❤️' },
  ]);

  const reactToPost = (id) => {
    setPosts(
      posts.map(p => (p.id === id ? { ...p, text: p.text + ' ❤️' } : p))
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>{item.text}</Text>
            <Button title="React" onPress={() => reactToPost(item.id)} />
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.globalButton}>
        <Button
          title="Click Graph"
          onPress={() => navigation.navigate('Graphing')}
        />
      </View>
    </SafeAreaView>
  );
}

// Target Graphing screen
function GraphingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Graphing Page</Text>
      {/* TODO: add your chart components here */}
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

// Root App with navigation setup
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Graphing" component={GraphingScreen} options={{ title: 'Graphing' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  listContent: { paddingBottom: 80 },
  card: { marginBottom: 12, padding: 12, backgroundColor: '#f0f0f0', borderRadius: 8 },
  text: { marginBottom: 8, fontSize: 16 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  globalButton: { position: 'absolute', bottom: 16, left: 16, right: 16 }
});
