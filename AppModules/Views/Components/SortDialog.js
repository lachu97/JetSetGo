import React from 'react';
import {Dialog, Text, Button, Chip} from 'react-native-paper';

const SortDialog = ({isVisible, onDismiss, onChipPress, sortValue}) => {
  return (
    <Dialog visible={isVisible} onDismiss={onDismiss}>
      <Dialog.Title>Sort By Price</Dialog.Title>
      <Dialog.Content>
        <Chip
          icon={sortValue === 'hl' ? 'check-decagram' : null}
          style={{marginVertical: 2}}
          onPress={() => onChipPress('hl')}>
          Low to High
        </Chip>
        <Chip
          icon={sortValue === 'lh' ? 'check-decagram' : null}
          style={{marginVertical: 2}}
          onPress={() => onChipPress('lh')}>
          High to Low
        </Chip>
      </Dialog.Content>
    </Dialog>
  );
};
export const AirlineDialog = ({isVisible, onDismiss, onChipPress, airline}) => {
  return (
    <Dialog visible={isVisible} onDismiss={onDismiss}>
      <Dialog.Title>Sort By Airline</Dialog.Title>
      <Dialog.Content>
        <Chip
          icon={airline === 'Air India' ? 'check-decagram' : null}
          style={{marginVertical: 2}}
          onPress={() => onChipPress('Air India')}>
          Air India
        </Chip>
        <Chip
          style={{marginVertical: 2}}
          icon={airline === 'JetSpice' ? 'check-decagram' : null}
          onPress={() => onChipPress('JetSpice')}>
          JetSpice
        </Chip>
      </Dialog.Content>
    </Dialog>
  );
};
export const StopDialog = ({isVisible, onDismiss, onChipPress, stop}) => {
  return (
    <Dialog visible={isVisible} onDismiss={onDismiss}>
      <Dialog.Title>Sort By Stops</Dialog.Title>
      <Dialog.Content>
        <Chip
          icon={stop === 'Non stop' ? 'check-decagram' : null}
          style={{marginVertical: 2}}
          onPress={() => onChipPress('Non stop')}>
          Non stop
        </Chip>
        <Chip
          style={{marginVertical: 2}}
          icon={stop === '1 Stop' ? 'check-decagram' : null}
          onPress={() => onChipPress('1 Stop')}>
          1 Stop
        </Chip>
      </Dialog.Content>
    </Dialog>
  );
};
export default React.memo(SortDialog);
