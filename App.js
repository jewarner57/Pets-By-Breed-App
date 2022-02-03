import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Item from './Item'
import { cats } from './breeds'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.breedsScroll}>
        <FlatList
          data={cats}
          renderItem={({ item, index }) => {
            return <Item title={`${index} ${item.breed}`} data={item} />
          }}
          keyExtractor={item => item.breed}
        />
      </SafeAreaView>
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
  breedsScroll: {
    width: '100%',
    backgroundColor: 'cornflowerblue',
    borderRadius: 10,
  }
});
