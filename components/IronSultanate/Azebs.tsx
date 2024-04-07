import { StyleSheet, Text, View } from 'react-native';
import SultanateMeleeWeapons from './SultanateMeleeWeapons';
import SultanateRangedWeapons from './SultanateRangedWeapons';
import SultanateArmour from './SultanateArmour';
import SultanateEquipment from './SultanateEquipment';
import StatBlock from './StatBlock';

export default function AzebInfantry() {
    return (
    <View style={styles.container}>
    <Text style={{fontWeight: 'bold'}}>Azeb Infantry (25 ducats each):</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>Azebs are soldiers recruited from the multitude of provinces of the sultanate, where every house in twenty is required to equip and provide a warrior to serve the Prince of Those Who Believe. They are often used by their superiors as light skirmishers to harass and tie down enemies while heavier troops close in for the kill.</Text>
        <Text></Text>
    <StatBlock move={'6"/Infantry'} ranged={'+0 dice'} melee={'-1 dice'} armour={0} base={'25mm'} />
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Equipment:</Text>
        <Text></Text>
    <Text>Azebs may be equipped with any weapons, armour, or equipment from the lists below:</Text>
        <Text></Text>
        <SultanateMeleeWeapons/>
        <Text></Text>
        <SultanateRangedWeapons/>
        <Text></Text>
        <SultanateArmour/>
        <Text></Text>
        <SultanateEquipment/>
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Abilities:</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Skirmishers</Text>:  Any Azebs can be made into SKIRMISHERS at the cost of +5 ducats per model. Unless engaged in melee, when an enemy model declares a charge against any Skirmisher Azeb, they can immediately move D3” in any direction they wish (except within 1” of any enemy or out of the battlefield). After this manoeuvre, the charging model is moved as normal. This may lead to the charger being unable to enter into Melee. This move cannot be taken by a mode that is Down.</Text>
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Keywords:</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>SULTANATE</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 10,
      backgroundColor: '#255',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dataTable: {
        alignItems: 'stretch',
    },
    tableHeader: {
      backgroundColor: 'green', 
    },
    tableRow: {
        backgroundColor: '#fff',
    }
  });
  