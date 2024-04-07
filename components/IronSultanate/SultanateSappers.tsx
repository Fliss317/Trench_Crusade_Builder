import { StyleSheet, Text, View } from 'react-native';
import SultanateMeleeWeapons from './SultanateMeleeWeapons';
import SultanateRangedWeapons from './SultanateRangedWeapons';
import SultanateArmour from './SultanateArmour';
import SultanateEquipment from './SultanateEquipment';
import StatBlock from './StatBlock';

export default function Sappers() {
    return (
    <View style={styles.container}>
    <Text style={{fontWeight: 'bold'}}>0-2 Sultanate Sappers (50 ducats each):</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>Sappers are highly respected and valued specialists in the Sultan's army. They are expected to man the great cannons of the Iron Wall no matter what the enemies throw at them, and since their mighty artillery is prone to overheating, they are easily identified by the terrible burns all over their bodies. Many have lost their lives firing their guns until the heat and smoke overcame them. On the battlefield they are experts at using their Tufenjieff anti-personnel mines, denying buildings and trenches to their enemies, demining areas and creating trenches and fortifications.</Text>
        <Text></Text>
    <StatBlock move={'6"/Infantry'} ranged={'+0 dice'} melee={'+0 dice'} armour={0} base={'25mm'} />
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Equipment:</Text>
        <Text></Text>
    <Text>Sappers are equipped with shovels and Tufenjieff anti-personnel mines in addition to any other weapons, armour, or equipment from the lists below:</Text>
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
    <Text><Text style={{fontStyle: 'italic'}}>Mine-setting</Text>: As an ACTION with +2 DICE, the Sapper can mine a piece of terrain they alone are touching, no bigger than 8”X8” (a 8” section of a trench, a wall, a tree, a building etc). If successful, the terrain piece is now mined. Any model (except the Sapper who set the mine) who moves into contact with the terrain piece will trigger the mine. Roll on the Injury chart to see what happens to the model. The mine has the Keyword SHRAPNEL.</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Demine</Text>: As a RISKY ACTION the Engineer can disable any mine they move in contact with. If they fail, the mine blows and causes damage as specified in the rules.</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Dig In</Text>: During their Activation, an Engineer can take a RISKY ACTION with +1 DICE. If successful, the engineer is considered to be in Cover until the model moves. This can only be done on the ground.</Text>
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
  