import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { appTheme } from '../utils/Helper';
import {
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableHighlight,
    StyleSheet,
} from 'react-native'

class AddDeck extends Component {

    state = {
        deckName: '',
    }


    handleDeckNameInputChange = (newInput) => {
        this.setState({
            deckName: newInput
        })
    }

    handleSubmit = () => {
        const { handleNewDeckSubmition } = this.props.screenProps
        const userInput = this.state.deckName

        if (userInput) {
            if (userInput === 'dateLatestAttempted') {
                alert("dateLatestAttempted is a reserve word in this app, kindly use another Title for the Deck")
            } else {
                handleNewDeckSubmition(userInput.trim())
                    .then((newDeck) => {
                        this.setState({ deckName: '' })
                        this.props.navigation.navigate('Deck', { deck: newDeck })
                    })
            }
        }
        else { alert("Deck name cannot be submitted empty!") }

    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={[styles.root]}>
                <Text style={styles.header}>
                    Add a Deck
                </Text>
                <Text style={styles.subHead}>
                    What would be the title of your new deck?
                </Text>
                <TextInput    
                   placeholder  = "Deck title"     
                   value={this.state.deckName}
                    onChangeText={this.handleDeckNameInputChange}
                    style={styles.textbox}
                />

                <View style={{
                    alignItems: 'center',
                }}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.handleSubmit}
                    >
                        <Text style={styles.submit}>
                            SUBMIT
                    </Text>
                    </TouchableHighlight>
                </View>
            </KeyboardAvoidingView >
        );
    }
}
const { themeBgColor, lineColor } = appTheme
const styles = StyleSheet.create({
    button: {
        width: 210,
        marginTop: 80,
        height: 60,
        borderRadius: 9,
        alignItems: 'center',
        backgroundColor: "#f75",
        justifyContent: 'center',
    },
    root: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "#131012",
        marginBottom: 50,
        textAlign: 'center'
    },
    subHead: {
        fontSize: 24,
        margin : 20,
        marginBottom: 25,
        textAlign: 'center',
        color : "#131012"
    },
    textbox: {
        borderColor: '#cc4e24',
        borderBottomWidth: 1,
        margin: 5,
        paddingLeft: 5,
        width : '70%',
        height : '10%',
        alignSelf: 'center',
        borderRadius: 5

    },
    submit: {
        fontSize: 20,
        color: 'white'
    }
})


export default withNavigation(AddDeck)