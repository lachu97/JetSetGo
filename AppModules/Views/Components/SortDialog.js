import React from 'react';
import {Dialog, Text, Button, Chip} from 'react-native-paper';

const SortDialog = ({isVisible, onDismiss, onChipPress}) => {
  return (
    <Dialog visible={isVisible} onDismiss={onDismiss}>
      <Dialog.Title>Sort By Price</Dialog.Title>
      <Dialog.Content>
        <Chip style={{marginVertical:2}} onPress={() => onChipPress('hl')}>Low to High</Chip>
        <Chip style={{marginVertical:2}} onPress={() => onChipPress('lh')}>High to Low</Chip>
      </Dialog.Content>
    </Dialog>
  );
};
export const AirlineDialog = ({isVisible, onDismiss, onChipPress}) => {
  return (
    <Dialog visible={isVisible} onDismiss={onDismiss}>
      <Dialog.Title>Sort By Airline</Dialog.Title>
      <Dialog.Content>
        <Chip style={{marginVertical:2}} onPress={() => onChipPress('Air India')}>Air India</Chip>
        <Chip style={{marginVertical:2}} onPress={() => onChipPress('JetSpice')}>JetSpice</Chip>
      </Dialog.Content>
    </Dialog>
  );
};
export default React.memo(SortDialog);
