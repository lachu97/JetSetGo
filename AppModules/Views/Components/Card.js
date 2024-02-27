import React from 'react';
import {Card, Divider, Text} from 'react-native-paper';
import {Button, useWindowDimensions, View} from 'react-native';
import {getDate, getTime} from '../../Helpers/Helpers';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

const CardComponet = ({data}) => {
  const {width} = useWindowDimensions();
  const item = data.displayData;
  return (
    <Card
      style={{width: width * 0.94, marginVertical: 4, borderRadius: 5}}
      onPress={() => {}}>
      <Card.Title
        titleStyle={{fontWeight: 'bold', fontSize: 14}}
        subtitle={`Rs: ${data.fare}`}
        subtitleStyle={{fontWeight: 500, padding: 1}}
        title={`From ${item.source.airport.cityName} -> To ${item.destination.airport.cityName}`}
      />
      <Card.Content>
        <View style={{padding: 2, margin: 1}}>
          <Text>Boarding: {item.source.airport.airportName}</Text>
          <Text>City: {item.source.airport.cityName}</Text>
          <Text>
            Departure Date: {getDate(item.source.depTime)}{' '}
            {getTime(item.source.depTime)}
          </Text>
          <Text>Departure Time: {getTime(item.source.depTime)}</Text>
          <Divider style={{margin: 1}} />
          <Text>Arrival : {item.destination.airport.airportName}</Text>
          <Text>City : {item.destination.airport.cityName}</Text>
          <Text>
            Arrival Date: {getDate(item.destination.arrTime)}{' '}
            {getTime(item.source.depTime)}
          </Text>
          <Text>Arrival Time: {getTime(item.destination.arrTime)}</Text>

          <Divider bold />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 3,
            }}>
            <Text>Airline: {item.airlines[0].airlineName}</Text>
            <Text>{item.stopInfo}</Text>
          </View>
          <Divider />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 3,
            }}>
            <Text>Total Duration :</Text>
            <Text>{item.totalDuration}</Text>
          </View>
        </View>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => {
            Toast.showWithGravity(
              'Booking Successful',
              Toast.LONG,
              Toast.BOTTOM,
            );
          }}
          title={'Book Now'}
        />
      </Card.Actions>
    </Card>
  );
};
export default React.memo(CardComponet);
