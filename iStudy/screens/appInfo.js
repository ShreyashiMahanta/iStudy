import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,ScrollView,ImageBackground} from 'react-native';
import LottieView from "lottie-react-native"  

function AppInfo({navigation}) {
        return(
            <View style = {{backgroundColor : "#ffffff"}}>
            <View>         
                          
                <ScrollView>
                <Text style = {styles.titleStyle}>App Information</Text>

                    <View style = {styles.lottie}>
                 
               <LottieView
               source={require('../assets/info.json')}
               autoPlay = {true}
               loop = {false}
          //     style = {{position : 'absolute',}}
                 />
            </View>
                    <View>  

                     <Text style = {styles.main}>
                         {`
        iStudy is an app created for students by students. With the help of this app, you can increase your productivity and improve your revision skills and ace those exams!

        iStudy has various features that help you stay focused and motivated.
                         
        • It’s Todo list helps you to keep in track of all your tasks,whether it be completing your projects or studying a particular subject. Organise your day efficiently with the help of iStudy’s todo list features.
                         
        • There is an amazing feature which is the Pomodoro timer. The Pomodoro Technique helps you resist all of those self-interruptions and re-trains your brain to focus. You can take control of your time. It also avoids mental fatigue with the help of short breaks between every working period. You can also customize your working time and break time according to your choice.
                         
        • FLASHCARDS  gives your brain a very quick way to check if you got the answer correct. With this feature you can create Decks for each subject or chapter which contains as many number of Cards as you want. You can also quiz yourself and evaluate how much you scored. It makes revising much easier. 
                         
        • There is a Study resource section that contains links to all of your favourite educational sites - from Khan Academy to Jagran Josh, which will help you to clear all doubts about any topic that you had in mind.
                         
      Join us as we go on our quest to help you be focused and ACE YOUR EXAMS!
                         `}
                     </Text>
            
                  </View>
                </ScrollView>
            </View>
            </View>
        )

}

const styles = StyleSheet.create({
      
      
        titleStyle : {
            fontSize : 30,
            fontWeight : 'bold',
            marginTop : 20,
            color : '#27231F',
            alignSelf : 'center'
            
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
        },
   
     lottie : {
         height : 180
     },

     main : {
         alignSelf : 'center',
         margin : 30
     }

   

});


export default AppInfo;