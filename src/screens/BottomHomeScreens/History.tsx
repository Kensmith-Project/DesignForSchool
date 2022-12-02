import React from 'react'
import { useState } from 'react';
import { Text, View, Image , StyleSheet, FlatList, StatusBar} from 'react-native'
import Constants from 'expo-constants';
import AccountIcon from '../../icons/AccountIcon'
import HistoryItem from '../../components/ListItem/HistoryItem';
import Feather from 'react-native-vector-icons/Feather' 

let imag= require('../../../assets/female.png' )

const DATA1 = [
  {
    id: "1",
    imag:require('../../../assets/male.png' ),
    amount: '+N2000',
    name: 'Daisy Black',
    date: '20 May, 2021'
  },
  {
    id: "2",
    imag:require('../../../assets/female.png' ),
    amount: '-N1500',
    name: 'Medley White',
    date: '20 May, 2021'
  },
 
 
 
];
const DATA2 = [
  {
    id: "1",
    imag:require('../../../assets/male.png' ),
    amount: '+N2000',
    name: 'Daisy Black',
    date: '20 May, 2021'
  },
  {
    id: "2",
    imag:require('../../../assets/female.png' ),
    amount: '-N1500',
    name: 'Medley White',
    date: '20 May, 2021'
  },
  {
    id: "3",
    imag:require('../../../assets/female2.png' ),
    amount: '+N2000',
    name: 'Sade Gold',
    date: '20 May, 2021'
  },
 
 
 
];

const History = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';
   

    return (
      <HistoryItem
        
        imag={item.imag}
        name={item.name}
        date={item.date}
        amount={item.amount}
       
      />
    );
  };


  return (
    <View style={styles.main}>
      <View style={styles.flex1}>
      <View>
        <Text style={styles.text_ealier1}>Today</Text>
       </View>
       <View>
        <Feather name='filter' size={20} color={'#ffffff'}/>
       
       </View>
      </View>
      <View style={styles.today}>
     <FlatList
     data={DATA1}
     renderItem={renderItem}
     keyExtractor={(item) => item.id}
     extraData={selectedId}/>

      </View>

      <View >
        <Text style={styles.text_ealier}>Earlier</Text>
       </View>
      <View style={styles.ealier}>

     <FlatList
     data={DATA2}
     renderItem={renderItem}
     keyExtractor={(item) => item.id}
     extraData={selectedId}/>

      </View>
      
      
      
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
    height:'100%',
    marginTop: StatusBar.currentHeight,
    padding:"5%",
    backgroundColor:'#000000'

  },
  flex1:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:Constants.statusBarHeight
  
  },
  today:{
    marginTop:10,
   
   

  },
  ealier:{
    marginTop:20,
   
   

  },
  text_ealier:{
    marginTop:30,
    fontSize:16,
    fontWeight:'600',
    color:'#ffffff'


  },
  text_ealier1:{
   
    fontSize:16,
    fontWeight:'600',
    color:'#ffffff'


  }
  
})

export default History