import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";

import db from "../config";
import firebase from "firebase";

import LoginScreen from './LoginScreen';
import MyHeader from '../components/MyHeader';

export default class HomeScreen extends Component {
    
        constructor(){
          super()
          this.state = {}
        }
      
      
        keyExtractor = (item, index) => index.toString()
      
        renderItem = ( {item, i} ) =>{
          return (
            <ListItem
              key={i}
              title={item.subjects}
              
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              
              rightElement={
                  <TouchableOpacity style={styles.button}
                    onPress ={()=>{
                      this.props.navigation.navigate("Classes",{"classes": item})
                    }}
                    >
                    <Text style={{color:'#ffff'}}>View</Text>
                  </TouchableOpacity>
                }
              bottomDivider
            />
          )
        }
      
        render(){
          return(
            <View style={{flex:1}}>
              <MyHeader title="Donate Books" navigation ={this.props.navigation}/>
              
            </View>
          )
        }
      }
      
      const styles = StyleSheet.create({
        subContainer:{
          flex:1,
          fontSize: 20,
          justifyContent:'center',
          alignItems:'center'
        },
        button:{
          width:100,
          height:30,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:"#ff5722",
          shadowColor: "#000",
          shadowOffset: {
             width: 0,
             height: 8
           }
        }
      })
