import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
