import React from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  View, 
  SafeAreaView, 
  Text, 
  Alert,
 } from 'react-native';
 import { AntDesign } from '@expo/vector-icons';

const App = () => {
  return(
  <SafeAreaView style={styles.container} >
         <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('これはアラートちなってぃね')}
      >
        <AntDesign name="pluscircle" size={80} color="#663700" />
      </TouchableOpacity>
  </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width:80,
    height: 80,
    position: 'absolute',
    right: 16,
    bottom: 16,
    borderRadius:50,
  }
});

export default App;