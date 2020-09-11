import { symbol } from 'prop-types'
import React, { Component } from 'react'
import { Image, Text, KeyboardAvoidingView, Button } from 'react-native'
import { View } from 'react-native-animatable'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  state = {
    email: 'akunMT_31',
    password:'1234'
  };

  Submit=()=>{
    // const {Login}=this.props
    let data={
      "username": "akunMT_31",
      "password": "1234"
    }
    // Login(data)
  }

  render () {
    return (
      <View style={{flex:1, justifyContent:'flex-start', alignItems:'center', top:'10%'}}>  
        <Text style={[styles.titleText,{fontSize:32,marginBottom:24}]}>Welcome Back !</Text>
        <View style={[styles.centered,{marginBottom:48}]}>
          <Image source={Images.launch} style={styles.logo} />
        </View>
        <Text>Email</Text>
        <TextInput style={[styles.textInput]} value={this.state.email} onChangeText={(email=>this.setState({email}))}></TextInput>
        <Text>Password</Text>
        <TextInput style={styles.textInput} value={this.state.password} onChangeText={(password=>this.setState({password}))}></TextInput>
        <Text style={{color:'red'}}>Forgot Password ?</Text>
        <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row',width:'100%',position:'absolute',bottom:'15%'}}>
          <View
            style={{width:'40%',alignItems:'center',padding:20, backgroundColor:'blue', borderRadius:8}}
            onPress={() =>this.Submit()}
          >
            <Text style={{color:'white'}}>Login</Text>
          </View>
          <View
            info
            style={{width:'40%',alignItems:'center',padding:20,backgroundColor:'green',borderRadius:8}}
            onPress={() =>this.Submit()
            }
          >
            <Text style={{color:'white'}}>Signup</Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
