import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Item({ title, data }) {
  const properties = Object.keys(data)

  return (
    <View style={styles.breed}>
      <Text style={styles.info} >{title}</Text>
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
    fontSize: 30,
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