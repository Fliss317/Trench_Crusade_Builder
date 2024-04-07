import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';

const RangedDropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null); const placeholder = {
        label: 'Select a weapon...',
        value: null,
    }; const options = [
        {label: 'Musket', value: '5 ducats'},
        {label: 'Jezzail', value: '7 ducats'},
        {label: 'Pistol', value: '10 ducats'},
        {label: 'Grenades', value: '10 ducats'},
        {label: 'Shotgun', value: '20 ducats'},
        {label: 'Siege Jezzail', value: '30 ducats'},
        {label: 'Sniper Rifle', value: '35 ducats'},
        {label: 'Flamethrower', value: '40 ducats'},
        {label: 'Machine Gun', value: '60 ducats'},
    ]; return (
        <View>
          <Text>Select a Ranged Weapon:</Text>
          <RNPickerSelect
            placeholder={placeholder}
            items={options}
            onValueChange={(value) => setSelectedValue(value)}
            value={selectedValue}
        />
        {selectedValue && <Text>Cost: {selectedValue}</Text>}
        </View>
    );
   };

export default RangedDropdown