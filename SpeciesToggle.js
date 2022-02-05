import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

function SpeciesToggle({ setSpecies, species }) {

  return (
    <View style={styles.speciesButtons}>
      <Button onPress={() => setSpecies(1)} title="Dogs" color={species === 1 ? '#fff' : '#000'} style={styles.speciesButton}></Button>
      <Button onPress={() => setSpecies(0)} title="Cats" color={species === 1 ? '#000' : '#fff'} style={styles.speciesButton}></Button>
    </View >
  );
}

const styles = StyleSheet.create({
  speciesButtons: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  speciesButton: {
    flex: 1,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 5,
  }
});

export default SpeciesToggle