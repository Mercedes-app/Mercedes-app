import * as React from "react"; 
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator ();

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" >
         <Stack.Screen name ="Home" component = {home}/>
         <Stack.Screen name = "StepOne" component = {StepOne}/>
         <Stack.Screen name = "StepTwo" component = {StepTwo}/>
         <Stack.Screen name = "StepThree" component = {StepThree}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
