import React from 'react'
import {StyleSheet, View, TouchableHighlight, Text, TouchableOpacity} from 'react-native'
import {baseStyles} from '../BaseStyles'

export const CategoryItem = ({ editing, name, id, deleteCategory, chooseCategory }) => (
  <View>
    {editing &&
      <TouchableOpacity style={styles.deleteButton} onPress={()=> deleteCategory(id)}>
        <Text style={styles.deleteButtonText}>XX</Text>
      </TouchableOpacity>
    }
    <TouchableHighlight style={styles.fullWidthButton} onPress={() => chooseCategory(id)}>
      <Text style={styles.fullWidthButtonText}>{name}</Text>
    </TouchableHighlight>
  </View>
)

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
