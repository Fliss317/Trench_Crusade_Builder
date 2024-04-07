import { StyleSheet, Text, View } from 'react-native';
import SultanateArmour from './SultanateArmour';
import SultanateEquipment from './SultanateEquipment';
import StatBlock from './StatBlock';

export default function JabireanLions() {
    return (
    <View style={styles.container}>
    <Text style={{fontWeight: 'bold'}}>0-2 Lions of Jabir (60 ducats each):</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>Named after the deadly hunters of the plains, the Lions of Jabir can take many forms, not all of them leonine. Each one is a unique masterwork, and they are grown according to the skills and artistry of the Jabirean scientist that created them. The speed and ferocity of the Lions is nearly unmatched, and some even have strange powers granted by their alchemical birth.</Text>
        <Text></Text>
    <StatBlock move={'8"/Infantry'} ranged={'N/A'} melee={'+1 dice'} armour={0} base={'32mm'} />
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Equipment:</Text>
        <Text></Text>
    <Text>Lions never carry any type of weapons nor do they suffer penalties for fighting unarmed. They may be given armour - but not shields - from the Armour list, and may also take Wind Amulets from the Equipment list:</Text>
        <Text></Text>
        <SultanateArmour/>
        <Text></Text>
        <SultanateEquipment/>
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Abilities:</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Artificial Body</Text>: All injury rolls against the Lion are made with -1 DICE.</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Mauling</Text>: A Downed opponent cannot stand up if it is in melee combat with a Lion of Jabir, unless it is on a 40mm or larger base.</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Lion's Grace</Text>: Lions of Jabir may take any Dash ACTION or jump/climb/Diving Charge ACTION with a bonus +1 DICE.</Text>
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
  