import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { AddCategory } from './AddCategory'
import { CategoryList } from './CategoryList'

export class EditWorkoutScreen extends PureComponent {
  static navigationOptions = {
    title: 'Welcome'
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <View>
        <AddCategory />
        <CategoryList chooseCategory={(name) => { navigate('EditCategory', {name: name}) }} />
      </View>
    )
  }
}
