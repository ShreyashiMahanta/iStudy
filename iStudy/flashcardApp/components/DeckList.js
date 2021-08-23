import React from 'react';
import { isNoDeck, appTheme } from '../utils/Helper';
import { withNavigation } from 'react-navigation';
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'

function DeckList(props) {
    const { decks } = props.screenProps
    const navigation = props.navigation
    let bgColorIndex = -1

    return (
        <ScrollView>
            <View style={styles.view}>

            
            {
                (isNoDeck(decks))
                    ? 
                    <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={styles.header}>
                        No decks to display.Create your first deck and get revising!
                    </Text></View>
                    : Object.values(decks).map((deck) => {
                        return (!deck.title) ? null
                            : (
                                <TouchableOpacity
                                    key={deck.title}
                                    style={[
                                        styles.deckBoxes,
                                        { backgroundColor: (bgColorIndex >= (deckBgColorList.length - 1)) ? deckBgColorList[bgColorIndex = 0] : deckBgColorList[++bgColorIndex] }
                                    ]}
                                    onPress={() => navigation.navigate('Deck', { deck: deck })}
                                >
                                    <View style={styles.titleView}>
                                        <Text style={styles.title}>
                                            {deck.title}
                                        </Text>
                                        <Text style={[styles.title,{marginTop : 15}]}>
                                            {` ${deck.questions.length} cards`}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                    }
                    )
            }
            </View>
        </ScrollView>
    )
}
const { themeBgColor, deckBgColorList, deckBorderColor, deckFontColor, lineColor } = appTheme
const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 50,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop : 100,

    },
    deckBoxes: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop : 30,
        backgroundColor : '#9c6545',
        width : 170,
        height: 170,
        margin : 10,
       backgroundColor : "white",

    },
    title: {
      //  color: "#fbf8f3",
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    view : {
       justifyContent: 'center',
        alignItems: 'center',
        flexDirection : "row",
         padding: 6,
        flexWrap :"wrap",
        flex : 1,

    }

})


export default withNavigation(DeckList)