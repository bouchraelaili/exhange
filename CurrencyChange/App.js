import React, {useState} from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import Home from './Component/Home'
import Cart from './Component/Cart'
import { AntDesign } from '@expo/vector-icons';






 function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Home/>
    </View>
  );
}



function CartScreen() {
  return (
    <View>
      <Cart/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer >
    <Tab.Navigator
     tabBarOptions={{
      labelStyle: { fontSize: 16,marginBottom:15,color:'white' },
      tabStyle: { width: 100 },
      style: { backgroundColor: '#B50004' },
    }}
    >
      <Tab.Screen
      name="Home"   component={HomeScreen}    />
     

<Tab.Screen
     
          
   name="Exchange" component={CartScreen} />
     
    </Tab.Navigator>
  </NavigationContainer>




  );
}


