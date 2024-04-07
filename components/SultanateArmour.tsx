import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';

const ArmourDropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null); const placeholder = {
        label: 'Select Armour...',
        value: null,
    }; const options = [
        {label: 'Combat Helmet', value: '5 ducats'},
        {label: 'Trench Shield', value: '15 ducats'},
        {label: 'Standard Armour', value: '20 ducats'},
        {label: 'Heavy Armour', value: '40 ducats'},
        {label: 'Alchemist Armour', value: '50 ducats'},
    ]; return (
        <View>
          <Text>Select armour:</Text>
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

export default ArmourDropdown