import { useState } from 'react';
import { StyleSheet, View, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
import Item from './Item'

export default function BreedList({ species }) {
  const [filteredSpeciesData, setFilteredSpeciesData] = useState(species)
  const [query, setQuery] = useState('')

  const updateQuery = (searchText) => {
    setFilteredSpeciesData(
      species.filter((breed) => {
        return breed.breed.toLowerCase().includes(searchText.toLowerCase())
      })
    )
    setQuery(searchText)
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.breedsScrollContainer}
      >
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
      </KeyboardAvoidingView>
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
  breedsScrollContainer: {
    backgroundColor: 'cornflowerblue',
  },
  searchBar: {
    height: 45,
    fontSize: 20,
    padding: 10,
    backgroundColor: '#fff',
  },
});
