import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {StyleSheet, FlatList} from 'react-native'
import {baseStyles} from '../BaseStyles'
import {CategoryItem} from './CategoryItem'

class CategoryListInternal extends PureComponent {
  _keyExtractor = (item, index) => item.name

  _renderItem = ({item}) => (
    <CategoryItem
      chooseCategory={this.props.chooseCategory}
      {...item}
    />
  )

  render () {
    return (
      <FlatList style={styles.container}
        data={this.props.categories}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  ...baseStyles,
  container: {
    height: 1000,
    width: 250
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

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

export const CategoryList = connect(
  mapStateToProps
)(CategoryListInternal)
