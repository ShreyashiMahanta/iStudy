import React, { Component } from 'react';
import { withNavigation } from 'react-navigation'
import { appTheme } from '../utils/Helper';
import { markDateAsQuizAttempted } from '../utils/AsyncAPI'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'
import LottieView from "lottie-react-native"  


class ShowResult extends Component {

    componentDidMount() {
        markDateAsQuizAttempted()
    }

    render() {
        const { totalQuestions, correctCount, restartQuiz, navigation } = this.props

        return (
            <View style={styles.root}>
                <Text style={styles.header}>
                    {`Quiz Result ${((correctCount / totalQuestions) * 100).toFixed(2)}%`}
                </Text>
                <Text style={styles.subHeading}>
                    {
                        `Total ${correctCount} question(s) answered correctlty out of total ${totalQuestions} questions(s)`
                    }
                </Text>

                <LottieView
              source = {require('../confetti.json')}
               autoPlay = {true}
               loop = {false}
                 />

                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={restartQuiz}>

                        <Text style={styles.buttonText}>
                            Restart  quiz
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>
                        Go to Deck   
                     </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const { themeBgColor } = appTheme

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 150,
        margin: 20,
        height: 50,
        alignItems: 'center',
        backgroundColor: themeBgColor,
        padding: 8,
        justifyContent: 'center',
        borderRadius : 10
    },
    header: {
        fontSize: 30,
        color: themeBgColor,
        marginBottom: 30,
        alignItems: 'flex-start',
        textAlign: 'left',
        justifyContent: 'flex-start'
    },
    subHeading: {
        fontSize: 20,
       // color: themeBgColor,
        marginBottom: 100,
        textAlign: 'center',
        margin : 20,
        marginTop : 70
    },
    buttonText: {
        fontSize: 15,
        color: 'white'
    }
})

export default withNavigation(ShowResult)