import React, { PureComponent } from 'react'
import {StyleSheet, View, TouchableHighlight, Text, TouchableOpacity} from 'react-native'
import {baseStyles} from '../BaseStyles'

export class CategoryItem extends PureComponent {
  render () {
    return (
      <View>
        {this.props.editing &&
          <TouchableOpacity style={styles.deleteButton} onPress={()=> this.props.deleteCategory(this.props.id)}>
            <Text style={styles.deleteButtonText}>XX</Text>
          </TouchableOpacity>
        }
        <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.props.chooseCategory(this.props.id)}>
          <Text style={styles.fullWidthButtonText}>{this.props.name}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...baseStyles,
  deleteButton: {
    width: 50
  },
  deleteButtonText: {
    fontSize: 20,
    color: 'red'
  }
})
