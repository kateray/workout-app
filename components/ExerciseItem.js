import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {baseStyles} from '../BaseStyles'

export const ExerciseItem = ({amount, amountType, name, categoryId, editExercise}) => (
  <View style={styles.container}>
    <View style={styles.fullWidthButton}>
      <Text>
        {amount} {amountType} {name}
      </Text>
    </View>
    <Button style={styles.editButton} title='Edit' onPress={() => editExercise(categoryId, name)} />
  </View>
)

const styles = StyleSheet.create({
  ...baseStyles,
  container: {
    flexDirection: 'row'
  },
  editButton: {
    width: 40,
    backgroundColor: 'red',
    alignSelf: 'flex-end'
  }
})
