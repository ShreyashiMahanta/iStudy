import React, { Component } from 'react';
import ShowResult from './ShowResult'
import { appTheme } from '../utils/Helper';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

class Quiz extends Component {
    state = {
        currentQuestion: 0,
        correctCount: 0,
        faceUp: true,
    }

    
    static getDerivedStateFromProps(props) {
        const { deck } = props.navigation.state.params
        return { deck }
    }

    handleCorrect = () => {
        this.setState((prevState) => ({
            correctCount: ++prevState.correctCount,
            currentQuestion: ++prevState.currentQuestion
        }))
    }

    handleIncorrect = () => {
        this.setState((prevState) => ({
            currentQuestion: ++prevState.currentQuestion
        }))
    }

    toggleFace = () => {
        this.setState((prevState) => ({
            faceUp: !prevState.faceUp
        }))
    }

    restartQuiz = () => {
        this.setState({
            currentQuestion: 0,
            correctCount: 0,
            faceUp: true,
        })
    }

   

    render() {


        const { currentQuestion } = this.state
        const totalQuestions = this.state.deck.questions.length
        const { question, answer } = (totalQuestions) && (currentQuestion < totalQuestions)
            ? this.state.deck.questions[currentQuestion]
            : { question: null, answer: null }


        return (!totalQuestions)
            ? (
                <View style={styles.root}>
                    <Text style={styles.questionAnswerText}>
                        There is no question to quiz in this deck
                </Text>
                </View>
            )
            : (currentQuestion >= totalQuestions) ? (
                <ShowResult
                    totalQuestions={totalQuestions}
                    correctCount={this.state.correctCount}
                    deck={this.state.deck}
                    restartQuiz={this.restartQuiz}
                />
            )
                : (
                    <ScrollView>
                        <View style={styles.root}>
                            <Text style={styles.questionCount}>
                                {
                                    `${currentQuestion + 1} / ${totalQuestions}`
                                }
                            </Text>

                            <View style = {styles.view}>
                            <Text style={styles.questionAnswerText}>
                                {
                                    (this.state.faceUp) ? question : answer
                                }
                            </Text>
                            </View>
                            
                            <TouchableOpacity
                                onPress={this.toggleFace}>
                                <Text style={styles.questionAnswerButton}>
                                    {
                                        `SHOW ${(this.state.faceUp) ? 'ANSWER' : 'QUESTION'}`
                                    }
                                </Text>
                            </TouchableOpacity>
                            <View style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                            }}>
                                <View style={[styles.buttonBorder,{ backgroundColor: '#34c558' }]}>
                                    <TouchableHighlight
                                        style={[styles.button,{backgroundColor : "#fff"}]}
                                        onPress={this.handleCorrect}
                                    >
                                        <Text style={[styles.answerButtonText,]}>
                                            CORRECT
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                                <View style={[styles.buttonBorder,{ backgroundColor: 'red' }]}>
                                    <TouchableHighlight
                                        style={[styles.button, { backgroundColor: '#fff' }]}
                                        onPress={this.handleIncorrect}
                                    >
                                        <Text style={styles.answerButtonText}>
                                            INCORRECT
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View >
                    </ScrollView>
                );
    }
}

const { themeBgColor } = appTheme

const styles = StyleSheet.create({
    button: {
        width: 140,
        margin: 20,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor : "#010101",
        borderWidth : 3
    },
    buttonBorder: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 150,
        margin: 30,
        
    },
    answerButtonText: {
        fontSize: 18,
        color: '#010101',
        fontWeight: 'bold',
    },
    questionAnswerButton: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#63537a',
        margin: 30
    },
    questionAnswerText: {
        fontSize: 28,
        color: themeBgColor,
      //  marginBottom: 30,
        textAlign: 'center',
        margin : 20

    },
    questionCount: {
        fontSize: 15,
        color: themeBgColor,
        marginBottom: 30,
        alignItems: 'flex-start',
        textAlign: 'left',
        justifyContent: 'flex-start',
        margin : 20
    },
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    view : {
        width: 300,
        backgroundColor : "#fbd153",
        height : 230,
        borderRadius : 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})

export default Quiz