import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Component/LoginScreen';
import HomePageScreen from './Component/HomePageScreen';
import { Icon } from 'react-native-elements'
import ProductScreen from './Component/ProductScreen';
import Settingscreenpage from './Component/Settingscreenpage';
import SearchScreen from './Component/SearchScreen';
import CartPageScreen from './Component/CartPageScreen';
import { CartContext, CartStore } from './Context/CartContext';


const Stack = createNativeStackNavigator();


export default function App() {

  
  return (
    <CartContext>
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      contentStyle:{
        backgroundColor:'#FFFFFF',
      },
    }}
    >
        <Stack.Screen name="Login" component={LoginScreen} options={{
            headerShown: false,
          }} />

         {/* <Stack.Screen name="Home" component={HomePageScreen} options={({ navigation }) => ({
           headerTitle: 'Home',
           headerStyle: {
             height: 80
           },
           headerRight: () => (
               <View style={styles.sidemenu}>
                 <Icon onPress={() => { navigation.navigate('settings')}} name="settings"  color="black" type="material-icons"/>
                 <Icon onPress={() => { navigation.navigate('cart')}} name="shopping-cart" color="black" type="feathers" />
                 <Icon onPress={() => { navigation.navigate('search')}} name="search" color="black" type="material-icons" />
              </View>
           )
         })}/> */}
         <Stack.Screen name="Home" component={HomePageScreen} options={{
           headerShown: false
         }} />

         <Stack.Screen name="Product" component={ProductScreen}  options ={({ navigation }) => ({
          contentStyle: {
            backgroundColor: '#dddddd'
          },
          headerStyle: {
                height: 100
          },
          headerRight: () => (
            <Text><Icon onPress={() => { navigation.navigate('cart')}} name="shopping-cart"  color="black" type="material-icons"/> </Text>
          )

         })} />
         <Stack.Screen name="settings" component={Settingscreenpage} />
         <Stack.Screen name="cart" component={CartPageScreen} options={{
           contentStyle: {
             backgroundColor: 'white'
           }
         }} />
         <Stack.Screen name="search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </CartContext>
  );
}


const styles = StyleSheet.create({
  sidemenu: {
    flexDirection: 'row',
  }
})