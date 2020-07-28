import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
export default function ProductListScreen({ navigation }) {
    const [proInfo, setproInfo] = useState([
        {proId:'0001',proName:'Apple 11 Pro',proPice:'1100', proBrand:'Apple'}, 
        {proId:'0002',proName:'Samsung Note 10',proPice:'890', proBrand:'Samsung'},
        {proId:'0003',proName:'Vivo x50',proPice:'850', proBrand:'Vivo'},
        {proId:'0004',proName:'Samsung Note 9',proPice:'680', proBrand:'Samsung'},
        {proId:'0005',proName:'Oppo Reno 2',proPice:'340', proBrand:'Oppo'},
        {proId:'0006',proName:'Samsung S 10+',proPice:'560', proBrand:'Samsung'},
        {proId:'0007',proName:'Nokia',proPice:'270', proBrand:'Nokia'},
        {proId:'0008',proName:'Huwie 40 Pro',proPice:'1200', proBrand:'Huwie'},
        {proId:'0009',proName:'Mac Book Pro',proPice:'1700', proBrand:'Apple'},
        {proId:'0010',proName:'Asus Game',proPice:'980', proBrand:'Asus'}
    ]);
    return (
      <View style={styles.container}>
        <FlatList
            data={proInfo}
            renderItem={({ item }) =>(
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', item)}>
                    <Text style={styles.item}>{item.proId}: {item.proName} ( {item.proBrand} )</Text>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.proId}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin:5
    },
    item: {
      backgroundColor: '#ff8080',
      paddingTop: 15,
      paddingBottom: 15,
      paddingStart:35,
      paddingEnd: 35,
      marginVertical: 5,
      fontSize:18,
    }
  });