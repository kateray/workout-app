import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, FlatList, View, KeyboardAvoidingView } from 'react-native'
import {baseStyles} from '../BaseStyles'
import { AddCategory } from './AddCategory'
import {CategoryItem} from './CategoryItem'
import { deleteCategory } from '../actions'

export class EditWorkoutScreenInternal extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { editing: false }
  }

  _keyExtractor = (item, index) => item.name

  _renderItem = ({item}) => (
    <CategoryItem
      editing={this.state.editing}
      chooseCategory={this._chooseCategory}
      deleteCategory={this.props.deleteCategory}
      {...item}
    />
  )

  _toggleEdit = () => (
    this.setState({editing: !this.state.editing})
  )

  componentDidMount(){
    this.props.navigation.setParams({ toggleEdit: this._toggleEdit })
  }

  _chooseCategory = (categoryId) => (
    this.props.navigation.navigate('EditCategory', {categoryId: categoryId})
  )

  render () {
    return (
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={64}>
        <FlatList style={styles.container}
          data={this.props.categories}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          extraData={this.state}
        />
        <AddCategory />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  ...baseStyles,
  container: {
  }
})

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteCategory: (categoryId) => dispatch(deleteCategory(categoryId)),
  }
}

export const EditWorkoutScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditWorkoutScreenInternal)
