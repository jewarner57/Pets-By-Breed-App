import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function SpeciesLabel({ species }) {

  return (
    <View style={styles.speciesHeader}>
      <Text style={styles.speciesLabel}>{`${species} Breeds`}</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  speciesHeader: {
    flex: 0,
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
  },
  speciesLabel: {
    color: '#fff',
    fontSize: 20,
  }
});