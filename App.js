import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Item from './Item'
import { cats } from './breeds'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.breedsScroll}>
        <ScrollView style={styles.breedsScroll}>
          {cats.map((item, index) => {
            return <Item title={`${index} ${item.breed}`} />
          })}
        </ScrollView>
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
