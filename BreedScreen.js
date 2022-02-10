import { StyleSheet, View } from 'react-native';
import SpeciesToggle from './SpeciesToggle';
import BreedList from './BreedList';

export default function BreedScreen({ species, speciesName, navigation}) {

  return (
    <View style={styles.container}>
      <SpeciesToggle species={speciesName} navigation={navigation}/>
      <BreedList species={species} />
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
});
