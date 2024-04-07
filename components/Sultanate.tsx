import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import YüzbaşıCaptain from './Captain';


export default function Sultanate() {
    return (
    <View style={styles.container}>
        <YüzbaşıCaptain/>
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
  