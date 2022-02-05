import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput } from 'react-native';
import Item from './Item'
import { cats, dogs } from './breeds'
import SpeciesToggle from './SpeciesToggle';

export default function App() {
  const species = [cats, dogs]
  const [breedData, setBreedData] = useState(1)
  const [filteredSpeciesData, setFilteredSpeciesData] = useState(species[breedData])
  const [query, setQuery] = useState('')

  const setSpecies = (index) => {
    setBreedData(index)
    setFilteredSpeciesData(species[index])
    setQuery("")
  }

  const updateQuery = (searchText) => {
    setFilteredSpeciesData(
      species[breedData].filter((breed) => {
        return breed.breed.toLowerCase().includes(searchText.toLowerCase())
      })
    )
    setQuery(searchText)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.breedsScroll}>
        <SpeciesToggle setSpecies={setSpecies} species={breedData} />
        <TextInput
          style={styles.searchBar}
          onChangeText={updateQuery}
          value={query}
          placeholder='Search Breeds...'
        />
        <FlatList
          data={filteredSpeciesData}
          renderItem={({ item, index }) => {
            return <Item title={`${item.breed}`} data={item} />
          }}
          keyExtractor={item => item.breed}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  breedsScroll: {
    width: '100%',
    height: '100%',
    backgroundColor: 'cornflowerblue',
    borderRadius: 10,
  },
  searchBar: {
    height: 45,
    fontSize: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
});
