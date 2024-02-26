import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import homeStyles from '../Styles/HomeStyles';
import {useDispatch} from 'react-redux';
import {getFlightDataAction} from '../Redux/AppActions';
const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlightDataAction());
  }, [dispatch]);
  return (
    <View style={homeStyles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};
export default React.memo(HomeScreen);
