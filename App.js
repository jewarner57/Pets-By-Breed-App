import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { cats, dogs } from './breeds'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BreedScreen from './BreedScreen';

export default function App() {
  const species = [cats, dogs]
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            >
            <Stack.Screen name="Dogs">
              {(props) => <BreedScreen {...props} species={dogs} speciesName={'Dogs'} />}
            </Stack.Screen>
            <Stack.Screen name="Cats">
              {(props) => <BreedScreen {...props} species={cats} speciesName={'Cats'} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
  },
});
