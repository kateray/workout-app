import React, { PureComponent } from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {baseStyles} from '../BaseStyles'

export class ExerciseItem extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.name}
        </Text>
        <Button title='Edit' onPress={() => this.props.editExercise(this.props.categoryId, this.props.name)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...baseStyles,
  container: {
    padding: 8,
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1
  },
  button: {
    ...baseStyles.button,
    backgroundColor: 'green'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})
