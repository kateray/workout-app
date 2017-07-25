import React, { PureComponent } from 'react'
import {StyleSheet, Text, FlatList} from 'react-native'
import {baseStyles} from '../BaseStyles'
import {CategoryItem} from './CategoryItem'

export class CategoryList extends PureComponent {

  _keyExtractor = (item, index) => item.id

  render(){
    return (
      <FlatList style={styles.container}
        data={this.props.categories}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => <CategoryItem {...item} />}
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
