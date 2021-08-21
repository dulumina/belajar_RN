import React from 'react';
import {StyleSheet, View} from 'react-native';
// import RegPage from './App/screens/RegisterPage';
// import FlexDirectionBasics from './App/screens/FlexDirectionBasics';
// import DisplayAnImage from './App/screens/DisplayAnImage';
// import UselessTextInput from './App/screens/UselessTextInput';
// import FlatlistSimple from './App/screens/FlatlistSimple';
// import ScrollViewExample from './App/screens/ScrollViewExample';
// import TouchableOpacityExample from './App/screens/TouchableOpacityExample';
import MateriSlashing from './App/screens/MateriSlashing';

const app = () => {
  return (
    <View style={style.container}>
      {/* <RegPage /> */}
      {/* <FlexDirectionBasics /> */}
      {/* <DisplayAnImage /> */}
      {/* <UselessTextInput /> */}
      {/* <FlatlistSimple /> */}
      {/* <ScrollViewExample /> */}
      {/* <TouchableOpacityExample /> */}
      <MateriSlashing />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    // backgroundColor:'#5c6573',
  },
});

export default app;
