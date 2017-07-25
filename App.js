import React, { PureComponent } from 'react'
import { Text, ListView, View } from 'react-native'
import { AddCategory } from './components/AddCategory'
import { CategoryList } from './components/CategoryList'
import { connect, Provider } from 'react-redux'
import { addCategory } from './actions'
import { configureStore } from './configureStore'

const store = configureStore()

class AppInternal extends PureComponent {
  render() {
    return (
      <View>
        <AddCategory addCategory={this.props.addCategory} />
        <CategoryList categories={this.props.categories} />
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

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <AppTo />
        </Provider>
    )
  }
}
