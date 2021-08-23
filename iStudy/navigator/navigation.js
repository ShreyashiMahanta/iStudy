import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Todo from '../screens/todo.js';
import Home from '../screens/home.js';
import Pomodoro from '../screens/pomodoro';
import Resources from '../screens/studyRes.js';

//import {MyTabs} from './tabNavigator';
import Dashboard from "../flashcardApp/components/Dashboard";

import AppInfo from "../screens/appInfo";

const Stack = createStackNavigator();

const screenOptionStyle ={
    headerShown : true
}


const HomeStackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>


            <Stack.Screen 
                name="Home"
                component={Home}
                options ={{
                    title : "Home",
                    headerStyle : {backgroundColor : "black"},headerTintColor : "white"
                    
                }}
            />
            <Stack.Screen 
                name="Todo"
                component={Todo}
            />
            <Stack.Screen 
            name="Pomodoro"
            component={Pomodoro}
            />
              <Stack.Screen 
            name="Resources"
            component={Resources}
            />

        <Stack.Screen 
            name="Flashcards"
            component={Dashboard}
            />

        <Stack.Screen 
                name="AppInfo"
                component={AppInfo}
                options ={{
                    title : "App Information",
                    headerStyle : {backgroundColor : "black"},headerTintColor : "white"
                    
                }}
            />
       
            
        </Stack.Navigator>

        
        
    )
}

export default HomeStackNavigator;
/* 

import Home from "../screens/home";
import React from "react"

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AppInfo" component={AppInfo} />
    </Tab.Navigator>
  );
}
export default MyTabs();
const StackNavigator = createStackNavigator(
    {
        Main: {
            screen: Tab,
            navigationOptions: {
                headerShown: true,
                title : "Home"
            }
        },
        Todo: {
            screen: Todo,
            navigationOptions:  {
                title: "Tasks"
            }
        },
        Pomodoro: {
            screen: Pomodoro,
            navigationOptions: {
                title: "Pomodoro timer",
            }
        },
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
                title: "Flashcards",
            }
        },
        Resources : {
            screen: Resources,
            navigationOptions: {
                title: "Resources",
            }
        },
    },
    {
     
        initialRouteName: "Main",
    },


);


export default (createAppContainer(StackNavigator));*/