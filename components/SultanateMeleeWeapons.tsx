import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';

const MeleeDropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null); const placeholder = {
        label: 'Select a weapon...',
        value: null,
    }; const options = [
        {label: 'Trench Knife', value: '2 ducats'},
        {label: 'Bayonet', value: '3 ducats'},
        {label: 'Trench Club', value: '4 ducats'},
        {label: 'Sword', value: '5 ducats'},
        {label: 'Axe', value: '5 ducats'},
        {label: 'Polearm', value: '10 ducats'},
        {label: 'Great Hammer', value: '15 ducats'},
        {label: 'Great Sword', value: '17 ducats'},
        {label: 'Great Axe', value: '17 ducats'},
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

export default MeleeDropdown