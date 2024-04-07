import { StyleSheet, Text, View } from 'react-native';
import SultanateMeleeWeapons from './SultanateMeleeWeapons';
import SultanateRangedWeapons from './SultanateRangedWeapons';
import SultanateArmour from './SultanateArmour';
import SultanateEquipment from './SultanateEquipment';
import StatBlock from './StatBlock';

export default function SultanateAssassin() {
    return (
    <View style={styles.container}>
    <Text style={{fontWeight: 'bold'}}>0-1 Sultanate Assassin (85 ducats):</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>Assassins are part of a legendary order of mystic warriors, whispered about the world over for their secrecy and ruthlessness. Assassins are able to bend space and time using the sacred rituals and powerful hallucinogens discovered by magi of the order. With this esoteric power they prowl behind enemy lines, hunting their targets with merciless efficiency. They can seemingly appear in two places simultaneously, strike an enemy with startling speed and then travel back into time to a moment a few heartbeats before, safe from any retaliation.</Text>
        <Text></Text>
    <StatBlock move={'6"/Infantry'} ranged={'+1 dice'} melee={'+2 dice'} armour={0} base={'32mm'} />
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Equipment:</Text>
        <Text></Text>
    <Text>Assassins may be equipped with any weapons, armour, or equipment from the lists below:</Text>
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
    <Text><Text style={{fontStyle: 'italic'}}>Time Slip</Text>:  If any type of attack (melee, ranged, mine etc.) misses an Assassin, the Assassin may slip into a moment in the future. The Assassin can move into any unoccupied space within 6”, though the Assassin cannot be moved within 1” of any enemy model or off the gaming table.</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Temporal Assassin</Text>: When the Assassin charges an enemy, check if there are any other enemies that the Assassin can reach with the charge move. If there is more than one eligible target, you may move the Assassin into base contact with up to two enemy models one after the other, then resolve the Assassin attacking both of the models separately, including any Injuries. You can attack each model with only one of the Melee Attacks available to the Assassin. After resolving both attacks, you can decide which of the two positions the Assassin ends up in after making the melee attacks.</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Infiltrator</Text>: The Assassin can be placed anywhere on the table out of line of sight of any enemies, and at least 8” away from the closest enemy. Deployed after all other models without the Keyword INFILTRATOR.</Text>
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Keywords:</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>ELITE, SULTANATE, INFILTRATOR</Text>
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
  