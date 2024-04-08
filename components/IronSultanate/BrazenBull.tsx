import { StyleSheet, Text, View } from 'react-native';
import BBMeleeDropdown from './BrazenBullMeleeWeapons';
import BBRangedDropdown from './BrazenBullRangedWeapons';
import SultanateArmour from './SultanateArmour';
import SultanateEquipment from './SultanateEquipment';
import StatBlock from './StatBlock';

export default function BrazenBull() {
    return (
    <View style={styles.container}>
    <Text style={{fontWeight: 'bold'}}>0-1 Brazen Bull (100 ducats):</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>The Brazen Bull is a monstrous being of immense power and vitality, capable of tearing even the bastard child of a devil clean in half. The Sultan’s armourers equip the Bulls with heavy artillery that even the superhuman Janissaries cannot lift, let alone use in battle: flame cannons, volley guns and holy blades blessed by the Word of the Great Protector.</Text>
        <Text></Text>
    <StatBlock move={'6"/Infantry'} ranged={'+0 dice'} melee={'+2 dice'} armour={0} base={'60mm'} />
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Equipment:</Text>
        <Text></Text>
    <Text>The Brazen Bull can be equipped with any weapons, armour, or equipment from the lists below:</Text>
        <Text></Text>
        <BBMeleeDropdown/>
        <Text></Text>
        <BBRangedDropdown/>
        <Text></Text>
        <SultanateArmour/>
        <Text></Text>
        <SultanateEquipment/>
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Abilities:</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Tough</Text>: Brazen Bulls are almost impervious to pain. They are subject to the rules for TOUGH creatures.</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Strong</Text>: The Brazen Bull ignores the effect of the Keyword HEAVY on any weapon they wield.</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Artificial Life</Text>: Created with Jabirean alchemy, the Brazen Bulls have no vital organs and they have to be hacked apart to kill them. All attacks against the Brazen Bull roll injuries with -1 DICE..</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Trample</Text>: Whenever the Brazen Bull is fighting any enemy model in melee that is Down, it can make a single additional Melee Attack ACTION any time during its Activation against one Downed opponent. Resolve the attack as if the Brazen Bull was armed with a Trench Club.</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Terrifying</Text>: The Brazen Bull is a monstrous, gigantic creature that causes FEAR.</Text>
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Keywords:</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>SULTANATE, FEAR, TOUGH, STRONG</Text>
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
  