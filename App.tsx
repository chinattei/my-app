import React from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  View, 
  SafeAreaView, 
  Text, 
  Alert,
 } from 'react-native';

const App = () => {
  return(
  <SafeAreaView style={styles.container}>
    <View>
         <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('これはアラートちなってぃね')}
      >
        <Text>これはボタンです</Text>
      </TouchableOpacity>
    </View>
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
  button:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  
  }
});

export default App;