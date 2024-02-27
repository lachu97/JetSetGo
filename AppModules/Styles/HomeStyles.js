import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MD2Colors} from 'react-native-paper';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.light,
  },
  textStyles: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 5,
    marginVertical: 5,
  },
  flatListStyles: {},
  loader: {
    marginVertical: 2,
    paddingVertical: 1,
    marginHorizontal: 2,
  },
  clearFilters: {
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    padding:4,
    borderColor: MD2Colors.black,
  },
  text:{
    padding:5,
    fontWeight:'bold'
  }
});
