import React, { PureComponent } from 'react'
import { Text, ListView, View } from 'react-native'
import { AddCategory } from './components/AddCategory'
import { connect, Provider } from 'react-redux'
import { addCategory } from './actions'
import { configureStore } from './configureStore'

const store = configureStore()

class AppInternal extends PureComponent {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged});
    this.state = {
      dataSource: ds
    };
  }

  _rowHasChanged(oldRow, newRow) {
    return oldRow !== newRow;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.categories !== this.props.categories) {
      let data = nextProps.categories.map( c => {return c.name})
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      })
    }
  }

  render() {
    return (
      <View>
        <AddCategory addCategory={this.props.addCategory} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
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
