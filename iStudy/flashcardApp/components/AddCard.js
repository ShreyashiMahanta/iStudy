import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { appTheme } from '../utils/Helper';
import CustomKeyboardAvoidingView from '../utils/KeyboardShift'
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    StyleSheet,
} from 'react-native'

class AddCard extends Component {

    state = {
        question: '',
        answer: '',
    }

    handleQuestionChange = (newInput) => {
        this.setState({
            question: newInput
        })
    }

    handleAnswerChange = (newInput) => {
        this.setState({
            answer: newInput
        })
    }

    handleSubmit = () => {
        const { handleNewQuestionSubmition } = this.props.screenProps
        const { question, answer } = this.state
        const { title } = this.props.navigation.state.params

        if (question && answer) {
            handleNewQuestionSubmition(title, this.state)
                .then((newDeck) => {
                    this.setState({
                        question: '',
                        answer: '',
                    })
                    this.props.navigation.navigate('Deck', { deck: newDeck })
                })
        }
        else {
            alert("Question or it's answer cannot be submitted empty!")
        }
    }

    render() {
        const { title } = this.props.navigation.state.params

        return (
            <CustomKeyboardAvoidingView behavior='padding' style={styles.root}>
                {() => (
                    <View>


                        <Text style={styles.title}>
                            {`Deck: ${title}`}
                        </Text>
                        <Text style={styles.inputBoxLabel}>
                            Question:
                            </Text>
                        <TextInput
                            value={this.state.question}
                            onChangeText={this.handleQuestionChange}
                            style={styles.inputBox}
                        />
                        <Text style={[styles.inputBoxLabel,{marginTop : 50}]}>
                            Answer:
                            </Text>
                        <TextInput
                            value={this.state.answer}
                            onChangeText={this.handleAnswerChange}
                            style={styles.inputBox}
                        />

                        <View style={{
                            alignItems: 'center',
                        }}>
                            <TouchableHighlight
                                style={styles.button}
                                onPress={this.handleSubmit}
                            >
                                <Text style={styles.buttonText}>
                                    SUBMIT
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                )}
            </CustomKeyboardAvoidingView>
        );
    }
}

const { themeBgColor, lineColor } = appTheme

const styles = StyleSheet.create({
    button: {
        width: 250,
        marginTop: 100,
        height: 60,
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: themeBgColor,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    inputBox: {
        borderColor: 'black',
        borderBottomWidth: 2,
        margin: 5,
        paddingLeft: 5,
        width : "70%",
        alignSelf : "center",
        height : 40,
        borderColor : "#2d3236"
    },
    inputBoxLabel: {
        fontSize: 24,
        marginBottom: 25,
        textAlign: 'center',
        color : "#2d3236",
        fontWeight :"bold"
    },
    title: {
        fontSize: 30,  
        fontWeight: 'bold',
        color: themeBgColor,
        margin: 50,
        textAlign: 'center'
    },
    root: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
    }
})

export default withNavigation(AddCard)