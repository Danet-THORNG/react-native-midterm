import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function ProductDetailsScreen({ route, navigation }) {
    const { proId } = route.params;
    const { proName } = route.params;
    const { proPice } = route.params;
    const { proBrand } = route.params;
    return (
      <View style={ styles.container}>
        <Text style={styles.item}>Product Id: {proId}</Text>
        <Text style={styles.item}>Product Name: {proName}</Text>
        <Text style={styles.item}>Product Price: {proPice}</Text>
        <Text style={styles.item}>Product Brand: {proBrand}</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingTop: 30,
      paddingStart:50,
      paddingEnd: 30,
      backgroundColor: '#ff8080',
      fontSize:18,
    },
    item: {
      fontSize:17,
    }
  });