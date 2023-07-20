import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Routes from './navigation/Routes';
import TrackPlayer from 'react-native-track-player';
import { LogBox } from 'react-native'; 



const App = () => {
  React.useEffect(async () => {
    await TrackPlayer.setupPlayer();
  })
  React.useEffect(() => {
    LogBox.ignoreAllLogs(true)
 }, [])
  return (
    <Provider store={store}>
     <Routes/>   
    </Provider>
  );
};

export default App;
