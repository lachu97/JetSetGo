import React, {useCallback, useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  LayoutAnimation,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  ActivityIndicator,
  MD2Colors,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import homeStyles from '../Styles/HomeStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  getFlightDataAction,
  sortAirlineAction,
  sortDataAction,
  sortStopAction,
} from '../Redux/AppActions';
import CardComponet from './Components/Card';
import SortDialog, {AirlineDialog, StopDialog} from './Components/SortDialog';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const [showSort, setShowSort] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showAirline, setShowAirline] = useState(false);
  const [showStop, setShowStop] = useState(false);
  const [sortValue, setSortValue] = useState('');
  const [stopField, setStopField] = useState('');
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
    if (sortValue === '') {
      return;
    }
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
  const onStopChipPress = useCallback(async item => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    await setStopField(item);
    await setShowStop(false);
  }, []);
  useEffect(() => {
    if (sortAirline === '') {
      return;
    }
    dispatch(
      sortAirlineAction({
        data: flightData,
        airline: sortAirline,
      }),
    );
  }, [sortAirline]);
  useEffect(() => {
    if (stopField === '') {
      return;
    }
    dispatch(
      sortStopAction({
        stopField: stopField,
      }),
    );
  }, [stopField]);
  const onPulltoRefresh = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    dispatch(getFlightDataAction());
  }, [dispatch]);

  const clearFilters = useCallback(async () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    dispatch(getFlightDataAction());
    await setSortValue('');
    await setAirline('');
    await setStopField('');
  }, []);
  const renderItems = useCallback(({item}) => {
    return <CardComponet data={item} />;
  }, []);
  const ListHeader = useCallback(() => {
    return (
      <Text style={homeStyles.text}>
        Total List Items : {flightData.length}
      </Text>
    );
  }, [flightData]);
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
        <Button
          title={'Sort By Stops'}
          onPress={() => {
            setShowStop(true);
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
      {sortAirline !== '' || sortValue !== '' || stopField !== '' ? (
        <TouchableRipple style={homeStyles.clearFilters} onPress={clearFilters}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              size={24}
              name={'delete'}
              color={MD2Colors.red500}
            />
            <Text style={homeStyles.text}>Clear Filters</Text>
          </View>
        </TouchableRipple>
      ) : null}

      <FlatList
        keyExtractor={item => item.id.toString()}
        style={{flex: 1, height: height, margin: 2}}
        data={flightData}
        renderItem={renderItems}
        removeClippedSubviews
        windowSize={10}
        initialNumToRender={25}
        refreshing={refresh}
        ListHeaderComponent={ListHeader}
        onRefresh={onPulltoRefresh}
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
      <StopDialog
        isVisible={showStop}
        onDismiss={() => setShowStop(false)}
        onChipPress={onStopChipPress}
        stop={stopField}
      />
    </View>
  );
};
export default React.memo(HomeScreen);
