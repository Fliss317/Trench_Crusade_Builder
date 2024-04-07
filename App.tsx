import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Sultanate from './components/Sultanate';

export default function App() {
  return (
    <ScrollView>
      <Text style={{fontWeight: 'bold'}}>WELCOME TO THE TRENCH CRUSADE!</Text>
      <Text>This is a work in progress - eventually the aim is to have a fully functioning warband builder for the game TRENCH CRUSADE.</Text>
      <StatusBar style="auto" />
      <Sultanate/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
