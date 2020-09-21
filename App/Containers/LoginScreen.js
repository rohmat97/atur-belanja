import { symbol } from 'prop-types'
import React, { Component } from 'react'
import { Image, Text, KeyboardAvoidingView, Button, Dimensions, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { View } from 'react-native-animatable'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import LoginActions from '../Redux/LoginRedux'

// Styles
import styles from './Styles/LoginScreenStyle'
import { bindActionCreators } from 'redux'

class LoginScreen extends Component {
  state = {
    email: '',
    password:''
  };
  Submit=()=>{
    // const {Login}=this.props
    let data={
      "username": this.state.email,
      "password": this.state.password
    }
    this.props.loginRequest(data)
    // Login(data)
  }
  
  render () {
    const width = Dimensions.get('screen').width
    const heigth  =Dimensions.get('screen').height
    if(this.props.status) {
      this.props.navigation.replace('DashboardScreen')
    }
    return (
      <View style={{flex:1, justifyContent:'space-between', alignItems:'center', padding:12,paddingTop:"15%"}}>  
        <View style={{width:'100%', alignItems:'center'}}>
        <Text style={[styles.titleText,{fontSize:32,marginBottom:24}]}>Welcome Back !</Text>
        <View style={[styles.centered,{marginBottom:48}]}>
          <Image source={Images.launch} style={styles.logo} />
        </View>
        <Text>Email</Text>
        <TextInput 
          style={[styles.textInput]} 
          value={this.state.email} 
          onChangeText={(email=>this.setState({email}))}></TextInput>
        <Text>Password</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={(text) => this.setState({ password: text })}
          secureTextEntry={true}
          value={this.state.password} onChangeText={(password=>this.setState({password}))}
          ></TextInput>
        <TouchableOpacity onPress={()=> Alert.alert('Whooopss !!',' On Development')}>
          <Text style={{color:'red'}}>Forgot Password ?</Text>
        </TouchableOpacity>
        </View>
        <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row',width:'100%'}}>
          <TouchableOpacity
            style={{width:width*0.45,alignItems:'center',padding:20, backgroundColor:'blue', borderRadius:8}}
            onPress={() =>this.Submit()}
          >
            <Text style={{color:'white'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>this.props.navigation.navigate('SingupScreen')}
            style={{width:width*0.45,alignItems:'center',padding:20,backgroundColor:'green',borderRadius:8}}
          >
            <Text style={{color:'white'}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const {auth} = state
  const {payload} = auth
  // console.tron.log(state)
  return {
    status: payload?true:false
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(LoginActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
