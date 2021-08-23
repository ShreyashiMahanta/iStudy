import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,ScrollView,ImageBackground} from 'react-native';
import { Card, } from 'react-native-paper'; 
import LottieView from "lottie-react-native"  
  

function Home({navigation}) {
        return(
            <View> 
                  <ScrollView>
                  <View>
                  <ImageBackground source = {require("../assets/home.png")} style = {styles.homeImg}   >
                    </ImageBackground>

                    <TouchableOpacity style = {styles.about} onPress={()=>navigation.navigate('AppInfo')}>
                        <Text style = {styles.butText}>App information</Text>
                    </TouchableOpacity>
                  </View>
                          
                
                   <View style = {{borderRadius : 10,marginBottom : 50}}>
                     
                    <Card 
                     onPress={()=>navigation.navigate('Todo')}
                     style = {styles.card}>   
                       <ImageBackground source = {require("../assets/todo.png")} style = {styles.cardImg}   imageStyle={{ borderRadius: 14}}>
                       <LottieView
               source={require('../assets/notes.json')}
               autoPlay = {true}
               loop = {false}
              style = {{marginRight : -140}}
                 />
                       <Card.Title title="Todo List" style = {styles.titleStyle}/>
                </ImageBackground>

                </Card>

                <Card 
                     onPress={()=>navigation.navigate('Pomodoro')}
                     style = {styles.card}>
                          <ImageBackground source = {require("../assets/2.png")} style = {styles.cardImg}   imageStyle={{ borderRadius: 14}}>
                          <LottieView
               source={require('../assets/timer.json')}
               autoPlay = {true}
               loop = {false}
              style = {{marginRight : -125}}
                 />
                          <Card.Title title="Pomodoro Timer" style = {styles.titleStyle}/>
                </ImageBackground>
                </Card>

                <Card 
                     onPress={()=>navigation.navigate('Flashcards')}
                     style = {styles.card}>
                     <ImageBackground source = {require("../assets/3.png")} style = {[styles.cardImg,{color : "#27231F"}]}  imageStyle={{ borderRadius: 14}}>
                     <LottieView
               source={require('../assets/flashcards.json')}
               autoPlay = {true}
               loop = {false}
              style = {{marginRight : -110}}
                 />
                          <Card.Title title="Flashcards" style = {styles.titleStyle}/>
                </ImageBackground>
                </Card>

                <Card 
                     onPress={()=>navigation.navigate('Resources')}
                     style = {[styles.card,{marginBotom : 50}]}>
                        <ImageBackground source = {require("../assets/5.png")} style = {[styles.cardImg,{color : "#27231F"}]}   imageStyle={{ borderRadius: 14}}>
                        <LottieView
               source={require('../assets/books.json')}
               autoPlay = {true}
               loop = {false}
              style = {{marginRight : -110}}
                 />
                            
                          <Card.Title title="Study Resources" style = {styles.titleStyle}/>
                </ImageBackground>             
                   </Card>
</View>
                </ScrollView>
            </View>
        )

}

const styles = StyleSheet.create({
      
      
        titleStyle : {
            fontSize : 36,
            fontWeight : 'bold',
            marginTop : 60,
            color : '#27231F',
            
        },

        card : {
            height: 120, 
            width : 350,             
            backgroundColor : '#BE9391',
            marginTop : 30,
            borderRadius : 14,
            shadowOpacity : 0.3,
            elevation : 10,
            alignSelf : 'center', 
            margin : 20
        },
   
     cardImg : {
         borderRadius : 20,
         height : 120,
         alignItems : "flex-end"

     },

     homeImg : {
        height :160,
        alignItems : "center",
        justifyContent : "center",
    },

    about : {
        backgroundColor :"#201a39",
        borderRadius : 50,
        width : 250,
        alignItems : "center",
        justifyContent: "center",
        alignSelf : "center",
        height : 50,
        marginTop : -20
    },
    butText : {
        color : "#FFFFFF",
        
    }

});


export default Home;