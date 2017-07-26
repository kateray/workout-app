import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { AddCategory } from './AddCategory'
import { CategoryList } from './CategoryList'

export class EditWorkoutScreen extends PureComponent {
  static navigationOptions = {
    title: 'Edit Workout'
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <View>
        <AddCategory />
        <CategoryList chooseCategory={(categoryId) => { navigate('EditCategory', {categoryId: categoryId}) }} />
      </View>
    )
  }
}
