import { StyleSheet, View } from 'react-native';
import SpeciesLabel from './SpeciesLabel';
import BreedList from './BreedList';

export default function BreedScreen({ species, speciesName, navigation}) {

  return (
    <View style={styles.container}>
      <SpeciesLabel species={speciesName}/>
      <BreedList species={species} navigation={navigation} />
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
