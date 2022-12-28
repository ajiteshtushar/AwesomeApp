import React from 'react';
import {View, Text} from 'react-native';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
//import Root from './src/root';
import configureStore from './src/store';
LogBox.ignoreAllLogs(true);
const nativeStore = configureStore();
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const persistor = persistStore(nativeStore);
    return (
      <Provider store={nativeStore}>
        <PersistGate persistor={persistor}>
          <View>
            <Text>This is my first App</Text>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
