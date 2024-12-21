import React,{ useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState()
  const [taskItems , setTaskItems] = useState([])
  const [taskCompleted, setTaskCompleted] = useState([])

  const handleAddTask = () => {
    // Keyboard.dismiss()
    setTaskItems([...taskItems,task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }

  const handleLineThrough = (index) => {
    let completedTask = [...taskItems]
    completedTask[index] = !completedTask[index]
    setTaskCompleted(completedTask)
  }

    return (
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <Text style={styles.heading}>Today's task</Text>
          <View style={styles.task}>
            {/* This is where the task will be displayed  */}
            {
              taskItems.map((items, index) => {
                return <TouchableOpacity key={index} onPress={()=>handleLineThrough(index)} onLongPress={()=>completeTask(index)}> 
                  <Task text={items} style={taskCompleted[index] && styles.completedTask}/>
                </TouchableOpacity>
              })
            }
          </View>
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardWrapper}>
          <TextInput placeholder='Enter your task' style={styles.textInput} value={task} onChangeText={text => setTask(text)}></TextInput>
          <TouchableOpacity onPress={()=>handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addBtn}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#E8EAED'
  },
  taskWrapper : {
    paddingTop : 70,
    paddingHorizontal : 20
  },
  heading : {
    fontSize : 24,
    fontWeight : 'bold'
  },
  task : {
    marginTop : 20
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  keyboardWrapper : {
    width : '100%',
    position : 'absolute',
    bottom : 10,
    padding : 10,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignContent : 'center',
    // borderColor : 'red',
    // borderWidth : 1
  },
  textInput : {
    paddingHorizontal : 20,
    backgroundColor : '#FFF',
    borderRadius : 15,
    width : 300,
    height : 55,
    // borderColor : 'red',
    // borderWidth : 1
  },
  addWrapper : {
    height : 55,
    width : 40,
    justifyContent : 'center',
    alignItems : 'center',
    // borderColor : 'red',
    // borderWidth : 1,

  },
  addBtn : {
    fontSize : 35
  }
});
