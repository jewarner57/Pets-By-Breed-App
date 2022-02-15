import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { cats, dogs } from './breeds'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BreedNavigator from './BreedNavigator';

export default function App() {
  const species = [cats, dogs]
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={() => ({
              headerShown: false,
              tabBarStyle: {
                backgroundColor: 'cornflowerblue',
                height: 100,
                position: 'absolute',
              },
              tabBarLabelStyle: {
                fontSize: 20,
              },
              tabBarActiveTintColor: '#fff',
              tabBarInactiveTintColor: '#000',
              tabBarActiveBackgroundColor: '#3f7deb',
              
            })}
          >
            <Tab.Screen name="Dogs" options={{ tabBarIcon: () => (<Text style={styles.icon}>🐕‍🦺</Text>)}}>
              {(props) => <BreedNavigator {...props} species={dogs} speciesName={'Dogs'} />}
            </Tab.Screen>
            <Tab.Screen name="Cats" options={{ tabBarIcon: () => (<Text style={styles.icon}>🐈</Text>) }}>
              {(props) => <BreedNavigator {...props} species={cats} speciesName={'Cats'} />}
            </Tab.Screen>
          </Tab.Navigator>
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
  icon: {
    fontSize: 50,
  }
});
