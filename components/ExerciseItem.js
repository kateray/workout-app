import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {baseStyles} from '../BaseStyles'

export const ExerciseItem = ({amount, amountType, name, categoryId, editExercise}) => (
  <View style={styles.fullWidthButton}>
    <Text>
      {amount} {amountType} {name}
    </Text>
    <Button title='Edit' onPress={() => editExercise(categoryId, name)} />
  </View>
)

const styles = StyleSheet.create({
  ...baseStyles
})
