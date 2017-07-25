import React, { PureComponent } from 'react'
import { Text, ListView, View } from 'react-native'
import { AddCategory } from './components/AddCategory'
import { AddExercise } from './components/AddExercise'
import { CategoryList } from './components/CategoryList'
import { ExerciseList } from './components/ExerciseList'
import { connect, Provider } from 'react-redux'
import { addCategory } from './actions'
import { configureStore } from './configureStore'
import { StackNavigator } from 'react-navigation'

const store = configureStore()

class xChatScreen extends PureComponent {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Category: ${navigation.state.params.name}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <AddExercise categoryName={params.name} />
        <ExerciseList categoryName={params.name} />
      </View>
    );
  }
}

function xmapStateToProps (state) {
  return {
    categories: state.categories
  }
}

function xmapDispatchToProps (dispatch) {
  return {
    addExercise: (payload) => dispatch(addExercise(payload))
  }
}

const ChatScreen = connect(
  xmapStateToProps,
  xmapDispatchToProps
)(xChatScreen)

class AppInternal extends PureComponent {
  static navigationOptions = {
    title: 'Welcome'
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <AddCategory addCategory={this.props.addCategory} />
        <CategoryList chooseCategory={(name) => {navigate('Chat', {name: name})}} categories={this.props.categories} />
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addCategory: (payload) => dispatch(addCategory(payload))
  }
}

const AppTo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppInternal)

const SimpleApp = StackNavigator({
  Home: { screen: AppTo },
  Chat: { screen: xChatScreen }
})

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <SimpleApp />
        </Provider>
    )
  }
}
