
import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView,Alert} from 'react-native'
import {Header} from 'native-base';




export default function Menu() {

 
  return (
 <View>
    <Header  style={{backgroundColor:'rgb(36, 68, 92)'}}>
        <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 16,
              fontWeight:'bold',
              textAlign:'center'
              
            }}
          >
           restaurant-menu
          </Text>

        </Header>  
<ScrollView  vertical={true} style={{marginBottom: 120}}>
     <FlatList
     data={DATA}
     renderItem={renderItem}
     keyExtractor={item => item.id}
     />
  </ScrollView>  
 </View>
  )
}



    


const styles = StyleSheet.create({
card: {
 paddingHorizontal: 10,
 paddingVertical: 10,
 margin: 10,
 borderRadius: 50,
 backgroundColor: '#95afc0',
 elevation: 10

},
 button: {
   backgroundColor: 'rgb(36, 68, 92)',
   paddingHorizontal: 10,
   paddingVertical: 10,
   borderRadius:15,
   marginTop: 10,
   width:200,
   marginLeft:60
  
 },
 textButton:{
  color:'white',
  fontSize:18,
  fontWeight:'bold',
  textAlign:'center'
 },
 title:{
   fontSize:16,
   fontWeight:'bold',
   color:'white',

 },
 price:{
  fontSize:16,
  fontWeight:'bold',
  color:'white',
 },
 desc:{
  fontSize:16,
  fontWeight:'bold',
  color:'white',
  textAlign:'center',
  margin:10,

 }
});