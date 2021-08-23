

import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
const COLORS = {primary: '#1f145c', white: '#fff',background : "#e27d67"};


const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [textInput, setTextInput] = React.useState('');

  React.useEffect(() => {
    getTodosFromUserDevice();
  }, []);

  React.useEffect(() => {
    saveTodoToUserDevice(todos);
  }, [todos]);


  const addTodo = () => {
    if (textInput == '') {
      Alert.alert('Error', 'Please input todo');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };

  const saveTodoToUserDevice = async todos => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem('todos', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const getTodosFromUserDevice = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');
      if (todos != null) {
        setTodos(JSON.parse(todos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const markTodoComplete = todoId => {
    const newTodosItem = todos.map(item => {
      if (item.id == todoId) {
        return {...item, completed: true};

      }
      return item;
    });

    setTodos(newTodosItem);

  };

  const deleteTodo = todoId => {
    const newTodosItem = todos.filter(item => item.id != todoId);
    setTodos(newTodosItem);
  };

  const clearAllTodos = () => {
    Alert.alert('Confirm', 'Clear todos?', [
      {
        text: 'Yes',
        onPress: () => setTodos([]),
      },
      {
        text: 'No',
      },
    ]);
  };

  

  const ListItem = ({todo}) => {

    const animation = React.useRef(null);


    return (
      <View style={styles.listItem}>
        <View style={{flex: 1,justifyContent: 'center'}}>

        

        {!todo?.completed && (
          <TouchableOpacity onPress={() => markTodoComplete(todo.id)}>
            <View style={[styles.actionIcon,{backgroundColor: '#b19d88',marginRight: -20,}]}>
              <Icon name="check-square" size={20} color="white" />
            </View>
          </TouchableOpacity>
          
        )}
        
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
              justifyContent: 'center',
              marginTop : -30,
              marginLeft : 50,
              margin : 5
            }}>
            {todo?.task}
          </Text>
        </View>

      
        
        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
          <View style={[styles.actionIcon,{backgroundColor : "#9e311d"}]}>
            <Icon name="trash" size={20} color="white"  backgroundColor="#C59894"
 />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
          }}>
         YOUR TASKS
        </Text>
        <Icon name="trash" size={25} color="red" onPress={clearAllTodos} />
      </View>
    
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={textInput}
            placeholder="Add Todo"
            onChangeText={text => setTextInput(text)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            <Icon name="plus" color="white" size={30} />
          </View>
         
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    bottom: -10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    marginTop : -10,
    alignSelf : 'center',

  },
  inputContainer: {
    height: 50,
    elevation: 40,
    borderRadius: 15,
    width : 260,
    paddingHorizontal: 20,  
    backgroundColor: "#E7F2F8",
    alignSelf : 'center',
    margin : 30,
    justifyContent : "center",
    marginRight : 10
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: "#7e5758",
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
   },

  listItem: {
    padding: 20,
   backgroundColor: COLORS.white,
    flexDirection: 'row',
    elevation: 2,
    borderRadius: 7,
    marginVertical: 10,
    width : 350,
   alignSelf: 'center',
   borderWidth : 4,
   borderColor : COLORS.background,
   borderLeftWidth : 0,
   borderTopWidth : 0,
  },

  actionIcon: {
    height: 35,
    width: 35,
    backgroundColor: "#9e311d",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C59894',
    borderRadius: 3,
  },
 
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
  },

});

export default Todo;
