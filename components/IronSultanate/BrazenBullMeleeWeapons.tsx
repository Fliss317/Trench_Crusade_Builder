import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';

const BBMeleeDropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null); const placeholder = {
        label: 'Select a weapon...',
        value: null,
    }; const options = [
        {label: 'Great Hammer', value: '15 ducats'},
        {label: 'Great Sword', value: '17 ducats'},
        {label: 'Great Axe', value: '17 ducats'},
        {label: 'Titan Zulfiqar', value: '35 ducats'},
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

export default BBMeleeDropdown