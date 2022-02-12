import { useState } from 'react';
import { StyleSheet, View, FlatList, TextInput, Text } from 'react-native';
import Item from './Item'

export default function BreedList({ species, navigation }) {
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
        <TextInput
          style={styles.searchBar}
          onChangeText={updateQuery}
          value={query}
          placeholder='Search Breeds...'
        />
        {filteredSpeciesData.length < 1 ? <Text styles={styles.noneFound}> No Breeds Found</Text> : null}
        <FlatList
          data={filteredSpeciesData}
          renderItem={({ item, index }) => {
            return <Item title={`${item.breed}`} data={item} navigation={navigation}/>
          }}
          keyExtractor={item => item.breed}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  noneFound: {
    textAlign: 'center',
  }
});
