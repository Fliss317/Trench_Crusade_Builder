import { StyleSheet, Text, View } from 'react-native';
import YüzbaşıCaptain from './Captain';
import JabireanAlchemist from './Alchemist';
import SultanateAssassin from './Assassin';
import AzebInfantry from './Azebs';
import Sappers from './SultanateSappers';
import JabireanLions from './JabireanLions';
import Janissaries from './Janissaries';


export default function Sultanate() {
    return (
    <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>THE SULTAN'S ELITE</Text>
        <YüzbaşıCaptain/>
        <JabireanAlchemist/>
        <SultanateAssassin/>
        <Text style={{fontWeight: 'bold'}}>THOSE WHO BELIEVE</Text>
        <AzebInfantry/>
        <Sappers/>
        <JabireanLions/>
        <Janissaries/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 10,
      backgroundColor: 'green',
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
  