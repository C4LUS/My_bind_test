import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Playlist')}
        style={styles.Button}
      >
        <Text style={styles.buttonText}>Go to Playlist</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#1e90ff',
    borderRadius: 50,
    padding: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
});

export default HomeScreen;
