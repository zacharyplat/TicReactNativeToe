import React from 'react';
import { StyleSheet, Pressable, Text, Alert, View } from 'react-native';

export default function Square() {

  const alertFunction = () => {
    Alert.alert('Left button pressed')
    debugger;
  };

  return (
    <Pressable onPress={alertFunction} style={styles.float}>
      <View style={styles.square}>
      </View>
    </Pressable>
  );

}

const styles = StyleSheet.create({
  square: {
    background: '#fff',
    border: '1px solid #999',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '34px',
    height: '34px',
    marginRight: '-1px',
    marginTop: '-1px',
    padding: '0',
    textAlign: 'center',
    width: '34px',
  },

  float: {
    float: 'left',
  },
});
