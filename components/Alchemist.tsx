import { StyleSheet, Text, View, FlatList } from 'react-native';
import SultanateMeleeWeapons from './SultanateMeleeWeapons';
import SultanateRangedWeapons from './SultanateRangedWeapons';
import SultanateArmour from './SultanateArmour';
import SultanateEquipment from './SultanateEquipment';
import StatBlock from './StatBlock';

export default function JabireanAlchemist() {
    return (
    <View style={styles.container}>
    <Text style={{fontWeight: 'bold'}}>0-1 Jabirean Alchemist (55 ducats):</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>Jabirean Alchemists are masters of esoteric power, able to control fire and ice, metal and liquid; capable of creating intricate mechanical devices and artificial life as well as weapons of calamitous potency. In exchange for the freedom to practise their arts, the Alchemists supply the Sultanate with the peerless Jabirean battle lions, and serve on the front lines where their devastating alchemical compounds melt the flesh from the bones of enemies of the Believers, or dissolve through even the toughest armour.</Text>
    <Text></Text>
    <StatBlock move={'6"/Infantry'} ranged={'+2 dice'} melee={'+1 dice'} armour={0} base={'32mm'} />
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Equipment:</Text>
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
    <Text><Text style={{fontStyle: 'italic'}}>Mastery of the Elements</Text>: At the beginning of the battle, all the weapons of the Alchemist (but not any other models) have one of the following Keywords: SHRAPNEL, FIRE or GAS. All the weapons the Alchemist has will share the same Keyword. With a RISKY ACTION with +1 DICE, the Alchemist can change this Keyword into one of the others</Text>
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Keywords:</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>ELITE, SULTANATE</Text>
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
  