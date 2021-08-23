import React, { Component } from 'react';
import AddDeck from '../components/AddDeck'
import { Entypo
} from '@expo/vector-icons'
import {
    createAppContainer
} from 'react-navigation';
import {createMaterialTopTabNavigator,} from 'react-navigation-tabs'
import DeckList from '../components/DeckList'
import { appTheme } from '../utils/Helper';

const { themeBgColor, lineColor } = appTheme
const TabNavigator = createMaterialTopTabNavigator(
    {
        Decks: {
            screen: DeckList,
            navigationOptions: {
             tabBarIcon: () => <Entypo name='home'  color = "#F51720" size = {23} />
            }
        },
        Add: {
            screen: AddDeck,
            navigationOptions: {
                tabBarIcon: () => <Entypo name='plus' 
               color = "#F51720"
                 size = {27}/>,
            }
        },
    },
    {
        initialRouteName: "Decks",
        tabBarPosition: 'bottom',
        
        tabBarOptions: {
            showIcon: true,
            labelStyle: {
                fontSize: 14,
                color: '#000000',
                fontWeight: 'bold'    
                    },
            style: {
              backgroundColor: "#ffffff",
                position : "absolute",
                bottom : 25,
                left : 30,
                right : 30,
                elevation : 0,
                borderRadius : 90,
                height : 50,
                marginTop : 100
            },
            indicatorStyle: {
                backgroundColor: lineColor,
                borderRadius : 20,
            },
            showLabel : false
        },
    },


);

export default createAppContainer(TabNavigator);
