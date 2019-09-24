import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>soulo App</Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 80,
    color:'#ffffff',
    backgroundColor:'#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
