import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';

const EquipmentDropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null); const placeholder = {
        label: 'Select a weapon...',
        value: null,
    }; const options = [
        {label: 'Alchemical Ammunition', value: '3 ducats'},
        {label: 'Gas Mask', value: '5 ducats'},
        {label: 'Shovel', value: '5 ducats'},
        {label: 'Medical Kit', value: '5 ducats'},
        {label: 'Wind Amulet', value: '10 ducats'},
        {label: 'Binoculars', value: '10 ducats'},
        {label: 'Musical Instrument', value: '15 ducats'},
        {label: 'Cloak of Almut', value: '25 ducats'},
        {label: 'Troop Flag', value: '1 Glory Point'},
        {label: 'Holy Relic', value: '2 Glory Points'},
    ]; return (
        <View>
          <Text>Select a Melee Weapon:</Text>
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

export default EquipmentDropdown