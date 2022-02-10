import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

function SpeciesToggle({ navigation, species }) {

  return (
    <View style={styles.speciesButtons}>
      <Button onPress={() => navigation.navigate('Dogs')} title="Dogs" color={species == 'Dogs' ? '#fff' : '#000'} style={styles.speciesButton}></Button>
      <Button onPress={() => navigation.navigate('Cats')} title="Cats" color={species == 'Cats' ? '#fff' : '#000'} style={styles.speciesButton}></Button>
    </View >
  );
}

const styles = StyleSheet.create({
  speciesButtons: {
    flex: 0,
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
  },
  speciesButton: {
    flex: 1,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 5,
  }
});

export default SpeciesToggle