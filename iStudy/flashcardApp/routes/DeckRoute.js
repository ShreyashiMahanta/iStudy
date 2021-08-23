import {
    createAppContainer
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack'

import Deck from '../components/Deck'
import AddCard from '../components/AddCard'
import Quiz from '../components/Quiz'
import TabNavigator from './TabNavigator' 

const StackNavigator = createStackNavigator(
    {
        Main: {
            screen: TabNavigator,
            navigationOptions: {
                headerShown: false,
            }
        },
        Deck: {
            screen: Deck,
            navigationOptions: ({ navigation }) => ({
                title: navigation.state.params.deck.title
            })
        },
        AddCard: {
            screen: AddCard,
            navigationOptions: {
                title: "ADD Card",
            }
        },
        StartQuiz: {
            screen: Quiz,
            navigationOptions: {
                title: "QUIZ",
            }
        },
    },
    {
     
        initialRouteName: "Main",
    },


);


export default (createAppContainer(StackNavigator));