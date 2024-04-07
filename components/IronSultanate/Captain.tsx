import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SultanateMeleeWeapons from './SultanateMeleeWeapons';
import SultanateRangedWeapons from './SultanateRangedWeapons';
import SultanateArmour from './SultanateArmour';
import SultanateEquipment from './SultanateEquipment';
import StatBlock from './StatBlock';

export default function YüzbaşıCaptain() {

    return (
    <View style={styles.container}>
    <Text style={{fontWeight: 'bold'}}>1 Yüzbaşı Captain (70 ducats):</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>Military expeditions over the Great Iron Wall into No Man’s Land carry many risks, and their commanders are field officers known as Yüzbaşı. They are expected to lead from the front and their selection is solely on merit, with no consideration given to family pedigree or wealth.</Text>
        <Text></Text>
    <StatBlock move={'6"/Infantry'} ranged={'+2 dice'} melee={'+2 dice'} armour={0} base={'32mm'} />
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Equipment:</Text>
        <Text></Text>
    <Text>Your Captain may be equipped with any weapons, armour, or equipment from the lists below:</Text>
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
    <Text><Text style={{fontStyle: 'italic'}}>Tough</Text>: Yüzbaşı captains are selected amongst the very best soldiers of the Sultanate, and their bodies are hardened against injury by the Jabirean arts. They are subject to the rules for TOUGH creatures.</Text>
        <Text></Text>
    <Text><Text style={{fontStyle: 'italic'}}>Mubarizun</Text>: Yüzbaşı are expected to face the mightiest of the Sultan's enemies in personal combat, inspiring their troops to victory through personal prowess. Yüzbaşı are Immune to the effects of the Keyword FEAR, and add +1 DICE to Injury rolls against TOUGH opponents.</Text>
        <Text></Text>
    <Text style={{fontWeight: 'bold'}}>Keywords:</Text>
        <Text></Text>
    <Text style={{fontStyle: 'italic'}}>ELITE, SULTANATE, TOUGH</Text>
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
  