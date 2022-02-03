import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Item({ title, data }) {
  const properties = Object.keys(data)
  const propertyAverage = getBreedAverageRating(data)


  function getBreedAverageRating(data) {
    let averageRating = 0
    let propertyCount = 0
    for (let rating of Object.values(data)) {
      if (!isNaN(rating)) {
        averageRating += rating
        propertyCount += 1
      }
    }
    averageRating /= propertyCount
    return averageRating
  }

  return (
    <View style={styles.breed}>
      <Text style={styles.info} >{title}</Text>
      <Text style={styles.rating} >Average Rating: {isNaN(propertyAverage) ? '0' : propertyAverage.toFixed(2)}</Text>
      {properties.map((prop) => {
        return (
          prop !== 'breed' ?
            <View style={styles.propertyContainer}>
              <Text style={styles.propInfo}>{prop}</Text>
              <Text style={styles.propInfo}>{data[prop]}</Text>
            </View>
            : null
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  breed: {
    flex: 1,
    backgroundColor: '#333',
    padding: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
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
  }
});

export default Item