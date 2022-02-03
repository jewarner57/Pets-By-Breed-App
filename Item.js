import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Item({ title }) {
  return (
    <View style={styles.breed}>
      <Text style={styles.info} >{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  breed: {
    flex: 1,
    backgroundColor: '#333',
    padding: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    color: '#fff',
  }
});

export default Item