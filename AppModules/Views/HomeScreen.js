import React, {useCallback, useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  LayoutAnimation,
  SafeAreaView,
  useWindowDimensions,
  View,
} from 'react-native';
import {ActivityIndicator, MD2Colors, Text} from 'react-native-paper';
import homeStyles from '../Styles/HomeStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  getFlightDataAction,
  sortAirlineAction,
  sortDataAction,
} from '../Redux/AppActions';
import CardComponet from './Components/Card';
import SortDialog, {AirlineDialog} from './Components/SortDialog';
import { FlashList } from "@shopify/flash-list";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const [showSort, setShowSort] = useState(false);
  const [showAirline, setShowAirline] = useState(false);
  const [sortValue, setSortValue] = useState('');
  const [sortAirline, setAirline] = useState('');
  const {width, height} = useWindowDimensions();
  const loading = useSelector(state => state.home.loading);
  const flightData = useSelector(state => state.home.flightData);
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    dispatch(getFlightDataAction());
  }, [dispatch]);
  const onChipPress = useCallback(async item => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    await setSortValue(item);
    await setShowSort(false);
  }, []);
  useEffect(() => {
    dispatch(
      sortDataAction({
        data: flightData,
        sortOrder: sortValue,
      }),
    );
  }, [sortValue]);
  const onAirlineChipPress = useCallback(async item => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    await setAirline(item);
    await setShowAirline(false);
  }, []);
  useEffect(() => {
    dispatch(
      sortAirlineAction({
        data: flightData,
        airline: sortAirline,
      }),
    );
  }, [sortAirline]);
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.textStyles}>Flight Search App</Text>

      <View
        style={{flexDirection: 'row', justifyContent: 'space-evenly', width}}>
        <Button
          title={'Filter By Airline'}
          onPress={() => {
            setShowAirline(true);
          }}
        />
        <Button
          title={'Sort By Price'}
          onPress={() => {
            setShowSort(true);
          }}
        />
      </View>
      {loading ? (
        <ActivityIndicator
          style={homeStyles.loader}
          animating={true}
          color={MD2Colors.black}
        />
      ) : null}
      <FlatList
        keyExtractor={item => item.id.toString()}
        style={{flex: 1, height: height, margin: 2}}
        data={flightData}
        removeClippedSubviews
        windowSize={10}
        initialNumToRender={25}
        renderItem={({item}) => <CardComponet data={item} />}
      />
      <SortDialog
        isVisible={showSort}
        onDismiss={() => setShowSort(false)}
        onChipPress={onChipPress}
        sortValue={sortValue}
      />
      <AirlineDialog
        isVisible={showAirline}
        onDismiss={() => setShowAirline(false)}
        onChipPress={onAirlineChipPress}
        airline={sortAirline}
      />
    </View>
  );
};
export default React.memo(HomeScreen);
