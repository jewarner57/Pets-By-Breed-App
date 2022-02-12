import { StyleSheet, View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';

export default function BreedDetail({ route, navigation }) {

  const { breed_name, breed_properties, breed_rating, data } = route.params;

  return (
    <ScrollView style={styles.breed}>
      <View style={styles.breedContainer}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>{"<"} Back</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.info} >{breed_name}</Text>
        <Text style={styles.rating} >Average Rating: {isNaN(breed_rating) ? '0' : breed_rating.toFixed(2)}</Text>
        {breed_properties.map((prop) => {
          return (
            prop !== 'breed' ?
              <View style={styles.propertyContainer} key={breed_name + prop}>
                <Text style={styles.propInfo}>{prop}</Text>
                <Text style={styles.propInfo}>{data[prop]}</Text>
              </View>
              : null
          )
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  breed: {
    flex: 1,
    backgroundColor: '#333',
    padding: 25,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  breedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    color: '#fff',
    fontSize: 40,
    paddingBottom: 20,
  },
  rating: {
    color: '#fff',
    fontSize: 25,
    paddingBottom: 20,
  },
  propertyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  propInfo: {
    color: '#fff',
    fontSize: 20,
    paddingVertical: 10,
  },
  backButton: {
    fontSize: 20,
    color: '#fff',
  },
  backButtonContainer: {
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 30,
  }
});
