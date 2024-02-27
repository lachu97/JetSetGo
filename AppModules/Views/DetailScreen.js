import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

const DetailScreen = () => {
  return (
    <View style={{flex:1}}>
      <Text>Detail</Text>
    </View>
  );
};
export default React.memo(DetailScreen);
