import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {baseStyles} from '../BaseStyles'

class AddCategoryInternal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  submitCategory(){
    this.props.addCategory({name: this.state.text})
    this.setState({text: ''})
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize='words'
          style={styles.input}
          returnKeyType='done'
          enablesReturnKeyAutomatically={true}
          placeholder='Add a Category'
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => { this.submitCategory()} }
          value={this.state.text} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...baseStyles,
  container: {
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
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    addCategory: (payload) => dispatch(addCategory(payload))
  }
}

export const AddCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategoryInternal)
