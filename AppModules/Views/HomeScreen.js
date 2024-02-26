import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-paper';
import homeStyles from '../Styles/HomeStyles';
import {useDispatch, useSelector} from 'react-redux';
import {getFlightDataAction} from '../Redux/AppActions';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const flightData = useSelector(state => state.home.flightData);
  useEffect(() => {
    dispatch(getFlightDataAction());
  }, [dispatch]);
  useEffect(() => {
    console.log(JSON.stringify(flightData[0]));
  }, [flightData]);
  return (
    <View style={homeStyles.container}>
      <SafeAreaView>
        <Text style={homeStyles.textStyles}>Flight Search App</Text>
      </SafeAreaView>
    </View>
  );
};
export default React.memo(HomeScreen);
