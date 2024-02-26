import React from 'react';
import {View} from 'react-native';
import homeStyles from '../Styles/HomeStyles';
const HomeScreen = () => {
  return (
    <View style={homeStyles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};
export default React.memo(HomeScreen);
