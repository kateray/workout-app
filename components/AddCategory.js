import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {baseStyles} from '../BaseStyles'

export class AddCategory extends React.Component {
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
        <Text>Email:</Text>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({text})} onSubmitEditing={() => { this.submitCategory()} } value={this.state.text} />
        <TouchableOpacity>
          <Text style={styles.button} onPress={() => { this.submitCategory()} }>Submit</Text>
        </TouchableOpacity>
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
