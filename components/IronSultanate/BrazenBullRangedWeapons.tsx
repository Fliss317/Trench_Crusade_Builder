import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';

const BBRangedDropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null); const placeholder = {
        label: 'Select a weapon...',
        value: null,
    }; const options = [
        {label: 'Siege Jezail', value: '30 ducats'},
        {label: 'MURAD Bombard', value: '50 ducats'},
        {label: 'Machine Gun', value: '60 ducats'},
        {label: 'Flame Cannon', value: '65 ducats'},
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

export default BBRangedDropdown