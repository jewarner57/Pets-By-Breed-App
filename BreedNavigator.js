import { useState } from 'react';
import { StyleSheet, View, FlatList, TextInput, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BreedScreen from './BreedScreen';
import BreedDetail from './BreedDetail'

export default function BreedNavigator({ species, speciesName }) {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name={speciesName+'-list'}>
        {(props) => <BreedScreen {...props} species={species} speciesName={speciesName} />}
      </Stack.Screen>
      <Stack.Screen name="BreedDetail" component={BreedDetail} />
    </Stack.Navigator>
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
