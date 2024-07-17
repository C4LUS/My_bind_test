import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Playlist = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Playlist page</Text>
      <TouchableOpacity
        style={styles.topRightButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    topRightButton: {
      position: 'absolute',
      top: 10,
      left: 10,
      backgroundColor: '#1e90ff',
      padding: 10,
      borderRadius: 50,
    },

    buttonText: {
      color: "#FFFFFF",
      fontSize: 15,
    }
  });

export default Playlist;