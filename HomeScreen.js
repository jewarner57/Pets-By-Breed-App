import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
import Item from './Item'
import { cats, dogs } from './breeds'
import SpeciesToggle from './SpeciesToggle';
import BreedList from './BreedList';

export default function HomeScreen({ navigation }) {
  const species = [cats, dogs]

  return (
    <View style={styles.container}>
      <SpeciesToggle setSpecies={setSpecies} species={breedData} />
      <BreedList species={cats}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
