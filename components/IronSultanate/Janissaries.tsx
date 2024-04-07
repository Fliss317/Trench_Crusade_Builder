import { StyleSheet, Text, View } from 'react-native';
import SultanateMeleeWeapons from './SultanateMeleeWeapons';
import SultanateRangedWeapons from './SultanateRangedWeapons';
import SultanateArmour from './SultanateArmour';
import SultanateEquipment from './SultanateEquipment';
import StatBlock from './StatBlock';

export default function Janissaries() {
    return (
    <View style={styles.container}>
    <Text style={{fontWeight: 'bold'}}>0-6 Janissaries (55 ducats each):</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>The janissaries are the Sultanate’s elite warriors, raised from childhood in the arts of war. Captured during raids upon the desolate northern and eastern marches beyond the Iron Wall, they are subjected to rigorous martial training and indoctrination from an early age. On the battlefield, Janissaries excel at devastating counter-charges, crushing the enemy elite formations and acting as the bodyguard for high-ranking individuals.</Text>
        <Text></Text>
    <StatBlock move={'6"/Infantry'} ranged={'+1 dice'} melee={'+1 dice'} armour={0} base={'32mm'} />
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Equipment:</Text>
        <Text></Text>
    <Text>Janissaries can be equipped with any weapons, armour, or equipment from the lists below:</Text>
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
    <Text><Text style={{fontStyle: 'italic'}}>Strong</Text>: Janissaries ignore the effect of the Keyword HEAVY on any weapon they wield.</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Counter-Charge</Text>: If the first move a Janissary makes during their Activation is a Charge, they can add +1 DICE to their Melee Attack ACTIONS during this Activation.</Text>
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Keywords:</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>SULTANATE, STRONG</Text>
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
  