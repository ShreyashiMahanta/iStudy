import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,ScrollView,ImageBackground,Linking} from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

function Resources({navigation}) {
        return(
            <View style = {styles.view}>
                <ScrollView>
                    <Card 
                     onPress={()=>Linking.openURL('https://www.khanacademy.org/')} style = {styles.card} >
                         <Image  source = {require("../assets/resourceIcons/KA.png") }  style = {[styles.img,{ height : 70,width : 70,}]}/>
                    <Card.Title title="Khan Academy" style = {styles.cardText}
                    />
                </Card>

                <Card 
                     onPress={()=>Linking.openURL('https://brainly.in/')} style = {styles.card} >
                         <Image  source = {require("../assets/resourceIcons/brainly.png") }  style = {[styles.img,{width : 160,height : 70}]}/>
                    <Card.Title title="Brainly" style = {styles.cardText}
                    />
                </Card>

                <Card 
                     onPress={()=>Linking.openURL('https://www.toppr.com/')} style = {styles.card} >
                         <Image  source = {require("../assets/resourceIcons/toppr.png") }  style = {[styles.img,{width : 170,height : 50,borderRadius : 5,marginTop : 60}]}/>
                    <Card.Title title="Toppr" style = {styles.cardText}
                    />
                </Card>

                <Card 
                     onPress={()=>Linking.openURL('https://oyc.yale.edu/')} style = {styles.card} >
                         <Image  source = {require("../assets/resourceIcons/yale.png") }  style = {[styles.img,{width : 130,height : 55,borderRadius : 5,marginTop : 50}]}/>
                    <Card.Title title="Open Yale Courses" style = {styles.cardText}
                    />
                </Card>           

                <Card 
                     onPress={()=>Linking.openURL('https://www.jagranjosh.com/')} style = {styles.card} >
                         <Image  source = {require("../assets/resourceIcons/jj.png") }  style = {[styles.img,{width : 130,height : 55,borderRadius : 5,marginTop : 50}]}/>
                    <Card.Title title="JagranJosh" style = {styles.cardText}
                    />
                </Card>

                <Card 
                     onPress={()=>Linking.openURL('https://www.britannica.com/')} style = {styles.card} >
                         <Image  source = {require("../assets/resourceIcons/britannica.png") }  style = {[styles.img,{width : 100,height : 75,borderRadius : 5,marginTop : 30}]}/>
                    <Card.Title title="Britannica" style = {styles.cardText}
                    />
                    
                </Card>

                <Card 
                     onPress={()=>Linking.openURL('https://cosmolearning.org/')} style = {[styles.card,{marginBottom : 30}]} >
                         <Image  source = {require("../assets/resourceIcons/cosmoLearning.png") }  style = {[styles.img,{width : 195,height : 45,borderRadius : 5,marginTop : 60}]}/>
                    <Card.Title title="CosmoLearning" style = {styles.cardText}
                    />
                    
                </Card>

            
                    
            </ScrollView>
            </View>
        )
    }


const styles = StyleSheet.create({

    view : {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : "row",
         padding: 6,
        flexWrap :"wrap",
        flex : 1,
    },

    card : {
        height: 180, 
        width : 250, 
        borderColor : '#BE9391',
        marginTop : 30,
        borderRadius : 14,
        shadowOpacity : 0.3,
        elevation : 10,
        alignSelf : 'center',
        borderWidth : 2,
        alignItems : 'center',
        justifyContent : 'center',
    },
    cardText : {
        fontSize : 36,
        fontWeight : 'bold',
        color : '#ffffff',
        position : 'absolute',
        bottom : 0,
        alignSelf  : 'center',
    },
    img : {   
        alignSelf  : 'center',
        marginTop : 40
    }

})


export default Resources;