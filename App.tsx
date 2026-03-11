import {  StyleSheet } from 'react-native';
import TrafficSignalScreen from './src/screens/TrafficSignalScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated style='light'/>
      <TrafficSignalScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
});
