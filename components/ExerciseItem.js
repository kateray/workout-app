import React, { PureComponent } from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {baseStyles} from '../BaseStyles'

export class ExerciseItem extends PureComponent {
  render () {
    return (
      <View style={styles.fullWidthButton}>
        <Text>
          {this.props.amount} {this.props.amountType} {this.props.name}
        </Text>
        <Button title='Edit' onPress={() => this.props.editExercise(this.props.categoryId, this.props.name)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...baseStyles
})
