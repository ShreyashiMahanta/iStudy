import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Vibration,
  ImageBackground,
  ScrollView,
  Image
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const INITIAL_WORK_MIN = '25';
const INITIAL_BREAK_MIN = '05';
const INITIAL_SEC = '00';
const WORK_LABEL = 'Work';
const BREAK_LABEL = 'Break';
const START_LABEL = 'Start';
const STOP_LABEL = 'Stop';

const COLORS = {background : "#d6b6ae",button : "#fdfdfd",text : "#d37fa0",mainGreen : "#60ddcb",mainText : "#ffffff"};


let interval = 0;

export default class Pomodoro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: INITIAL_WORK_MIN,
      seconds: INITIAL_SEC,
      session: WORK_LABEL,
      buttonLabel: START_LABEL,
      workInputValue: INITIAL_WORK_MIN,
      breakInputValue: INITIAL_BREAK_MIN,
    };

    this.secondsRemaining;
    this.isRunning = false;
  }

  startStopTimer = workSession => {
    // Stop/pause timer
    if (this.isRunning) {
      return this.pauseTimer();
    }

    // Start/Continue timer
    this.setState(previousState => ({
      buttonLabel: STOP_LABEL,
    }));

    if (!this.secondsRemaining) {
      this.secondsRemaining = this.state.minutes
        ? this.state.minutes * 60
        : INITIAL_WORK_MIN * 60;
    }

    this.isRunning = true;

    this.setupInteval();
  };

  setupInteval = () => {
    clearInterval(interval);

    interval = setInterval(() => this.onTick(), 1000);
  };
  playSound = async () => {
    await Audio.Sound.createAsync(
      require("../sound/ting.mp3"), { shouldPlay: true }
    );
  }
  onTick = () => {
    let minutes = Math.floor(this.secondsRemaining / 60);
    let seconds = this.secondsRemaining - minutes * 60;

    minutes = this.normalizeDigits(minutes);
    seconds = this.normalizeDigits(seconds);

    this.setState(previousState => ({
      minutes: minutes,
      seconds: seconds,
    }));

    this.secondsRemaining--;

    if (minutes == 0 && seconds == 0) {
      
        Vibration.vibrate([500, 500, 500])
        this.playSound()
      
      if (this.state.session == WORK_LABEL) {
        this.startBreak();
      } else {
        this.startWork();
      }
    }
  };

  pauseTimer = () => {
    clearInterval(interval);

    this.isRunning = false;

    this.setState(previousState => ({
      buttonLabel: START_LABEL,
    }));
  };

  startWork = () => {
    const that = this;

    this.setState(previousState => ({
      minutes: that.normalizeDigits(this.state.workInputValue),
      seconds: INITIAL_SEC,
      session: WORK_LABEL,
      buttonLabel: STOP_LABEL,
    }));

    this.secondsRemaining = this.state.workInputValue * 60;

    this.setupInteval();
  };

  startBreak = () => {
    const that = this;

    this.setState(previousState => ({
      minutes: that.normalizeDigits(this.state.breakInputValue),
      seconds: INITIAL_SEC,
      session: BREAK_LABEL,
      buttonLabel: STOP_LABEL,
    }));

    this.secondsRemaining = this.state.breakInputValue * 60;

    this.setupInteval();
  };

  resetTimer = () => {
    const that = this;

    this.isRunning = false;
    this.secondsRemaining = 0;

    clearInterval(interval);

    this.setState(previousState => ({
      session: WORK_LABEL,
      buttonLabel: START_LABEL,
      seconds: INITIAL_SEC,
      minutes: that.normalizeDigits(previousState.workInputValue),
    }));
  };

  onWorkInputChange = workMin => {
    const that = this;

    this.setState(previousState => ({
      workInputValue: workMin,
      minutes: that.normalizeDigits(workMin),
    }));

    this.resetTimer();
  };

  onBreakInputChange = breakMin => {
    const that = this;

    this.setState(previousState => ({
      breakInputValue: breakMin,
      minutes: that.normalizeDigits(this.state.workInputValue),
    }));

    this.resetTimer();
  };

  normalizeDigits = value => {
    if (value.toString().length < 2) {
      return '0' + value;
    }

    return value;
  };

  render(){ 
    return(
      <View style={styles.container}> 
     <ScrollView>
     

        <View> 
          
      <ImageBackground source = {require("../assets/big.png") } style = {{width : 400,height : 300,marginTop : 10,marginBottom : 30,alignSelf : "center"}}>  
         <View  style = {styles.timerView}> 
          <Text style={styles.timer}>
            {this.state.minutes}:{this.state.seconds}
          </Text>
          
          </View>
</ImageBackground>
          <Text style={styles.session}>{this.state.session} session</Text>


        </View>
          <Text style={styles.inputLabel}>Work :</Text>
          <TextInput
            defaultValue={`${this.state.workInputValue}`}
            maxLength={3}
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={this.onWorkInputChange}
            placeholder = "Work time in minutes"
            //placeholderTextColor="#fff"
          />
       
          <Text style={styles.BreakText}>Break :</Text>
          <TextInput
            defaultValue={`${this.state.breakInputValue}`}
            maxLength={3}
            style={styles.textInput1}
            keyboardType="numeric"
            onChangeText={this.onBreakInputChange}
            placeholder = "Break time in minutes"
          />
        <View style={styles.btnContainer} >

        <TouchableOpacity style = {[styles.button2,{backgroundColor : COLORS.mainGreen,opacity : 1,marginTop : 5,marginLeft : 15,}]}></TouchableOpacity>

          <TouchableOpacity
            style={[styles.button2,{marginLeft : -110,marginRight : 20}]}
            onPress={() => this.resetTimer()}>
              <Icon name="restart" size={80} color="black" style = {{padding : 10}}/>

              
          </TouchableOpacity>

                    <TouchableOpacity style = {[styles.button2,{backgroundColor : COLORS.mainGreen,opacity : 1,marginVertical : 5,marginLeft : 120,}]}></TouchableOpacity>

          <TouchableOpacity
            style={[styles.button2,{marginLeft : -110,marginRight :20 }]}
            onPress={() => this.startStopTimer()}>
              <Icon name="pause" size={80} color="black" style = {{paddingTop : 10}} />

            <Text style={styles.startStopBtnText}>

            </Text>
          </TouchableOpacity>
         



        </View>
        
    </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    margin : -30,
   width : 500,
   alignSelf: 'center',
   backgroundColor : "#02112e"
  },
  session: {
    fontSize: 30,
    textAlign: 'center',
    color : COLORS.mainText,
    fontWeight: 'bold',
    marginTop : 30,
    marginBottom : 30,

  },

  startStopBtn: {
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
    marginRight: 15,
    borderWidth: 3,
    borderColor: '#3B707D',
    borderRadius: 10,
  },

  btnContainer: {
     flex : 1,
      marginTop: 20,
      alignSelf : "center",
      marginBottom : 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  startStopBtnText: {
    fontSize : RFValue(20),
		fontWeight : 'bold',
		color : '#060606',
		alignSelf : 'center',
  },
 
 
  inputLabel: {
    fontSize : RFValue(20),
    color : COLORS.mainText,
    fontWeight : 'bold',
    alignSelf : 'flex-end',
    marginRight : RFValue(10),
    marginBottom : RFValue(10),
  },
 
  
  button2 : {
    backgroundColor : COLORS.button,
    alignItems : "center", 
    borderRadius : 205,
    marginBottom :  RFValue(100),
    width : RFValue(90),
    height : RFValue(90),
    justifyContent : 'center',
    borderWidth : 4,
  },
  BreakText : {
    fontSize : RFValue(20),
    color : COLORS.mainText,
    marginTop : RFValue(-105),
    marginLeft : RFValue(10),
    fontWeight : 'bold',
    alignSelf : 'flex-start',
    marginBottom : RFValue(10)
},
textInput : {
    width: "30%",
    height: RFValue(35),
    padding: RFValue(10),
    borderWidth:3,
    paddingBottom:RFValue(-25),
    alignSelf : 'flex-end',
    marginRight : RFValue(10),
    marginBottom:RFValue(32),
    borderRadius : 5,
    borderColor : COLORS.mainGreen,
    letterSpacing: 1.5,
    color : "#fff",

},
textInput1 : {
    width: "30%",
    height: RFValue(35),
    padding: RFValue(10),
    borderWidth:3,
    paddingBottom:RFValue(-25),
    marginLeft:RFValue(10),
    marginBottom:RFValue(50),
    borderRadius : 5,
    alignSelf : 'flex-start',
    borderColor : COLORS.mainGreen,
    color : "#fff"
},
 textView : {
   borderRightWidth : 4,
   borderBottomWidth : 4,
   backgroundColor : "#e1f5e5",
  width : RFValue(300),
  height : "45%",
  borderRadius : 20,
  marginTop : 20,
  justifyContent : 'center',
  borderColor : COLORS.mainGreen
 },

 timer: {
  fontSize: 110,
  alignSelf: 'center',
  color : "white",
},
 timerView : {
  borderWidth : 2,
  borderColor : COLORS.mainGreen,
  width : 340,
  alignSelf: 'center',
  height : 160,
  marginTop : 50,
  justifyContent : 'center',
  borderRadius : 10,
  backgroundColor : "#02112e"
 }
});