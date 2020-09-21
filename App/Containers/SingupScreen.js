import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, Image, TouchableOpacity, Linking, Alert } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import RegisterActions from '../Redux/RegisterRedux'

// Styles
import styles from './Styles/SingupScreenStyle'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { bindActionCreators } from 'redux'

class SingupScreen extends Component {
  state={
    username:'',
    email:'',
    password:'',
    repassword:'',
    display_name:'',
    validationEmail:false,
    validationPassword:false,
    submitted:false
  }
  componentWillMount(){
    this.setState({
      username:'',
      email:'',
      password:'',
      repassword:'',
      display_name:'',
      validationEmail:false,
      validationPassword:false,
      submitted:false
    })
  }
  componentDidUpdate(){
    if(this.props.status&&this.state.submitted){
      Alert.alert(
        "Berhasil",
        this.props.message,
        [
          { text: "Lanjut Login", onPress: () =>this.props.navigation.popToTop() }
        ],
        { cancelable: false }
      );
    }
  }
  Register=()=>{
    const { username,display_name,email,password,validationEmail,validationPassword} = this.state
    if(validationEmail===true && validationPassword===true) {
      const payload ={
        "username": username,
        "password": password,
        "email":email,
        "display_name": display_name
      }
      this.props.registerRequest(payload)
      this.setState({submitted:true})
    }else{
      Alert.alert('Failed','please, correct input')
    }
    
  }
  validatePassword = (text,index) => {
    const {password,repassword} = this.state
    if(index===1){
      this.setState({password:text})
    }else{
      this.setState({repassword:text})
    }

    if(password===text || repassword===text) {
      this.setState({validationPassword:true})
      console.log("Password is  Correct");
    }else{
      this.setState({validationPassword:false})
      console.log("Password is Not Correct");
    }
  }

  validateEmail = (text) => {
    this.setState({ email: text })
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      return false;
    }
    else {
      this.setState({ email: text, validationEmail:true })
      console.log("Email is Correct");
    }
  }

  render () {
    const {validationEmail,validationPassword,username,email,password,display_name} = this.state
    return (
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={[styles.container,{alignItems:'baseline',padding:12}]}>
            <View style={{width:'100%',height:48, flexDirection:'row', justifyContent:'space-between',marginTop:-12,backgroundColor:'whitesmoke',alignItems:'center'}}>
              <TouchableOpacity onPress={()=> this.props.navigation.pop()}>
              <Image source={Images.backButton} style={{width:80,height:20,marginLeft:-24}}/>
              </TouchableOpacity>
              <Text style={{fontWeight:'bold', fontSize:20}}>Daftar</Text>
              <TouchableOpacity onPress={()=> Linking.openURL('https://www.lipsum.com/')}>
              <Text style={{fontWeight:'bold', fontSize:16}}>Bantuan?</Text>
              </TouchableOpacity>
            </View>
            <View style={{width:'100%', justifyContent:'center',alignItems:'center',padding:12}} >
            <Image source={Images.igniteClear} style={{width:120,height:200}}/>
            </View>
            <View style={{padding:24,width:'100%'}}>
              <Text>Username</Text>
              <TextInput 
                style={[styles.textInput]} 
                value={this.state.username} 
                onChangeText={(username=>this.setState({username}))}></TextInput>
                <Text>Email</Text>
              <TextInput 
                style={[styles.textInput]} 
                value={this.state.email} 
                textContentType={'emailAddress'}
                onChangeText={(email=>this.validateEmail(email))}></TextInput>
                {this.state.email?
                validationEmail?null:
                <Text style={{marginTop:-20,marginBottom:20,color:'red'}}>Email is Not Correct'</Text>:null}
                <Text>Display Name</Text>
              <TextInput 
                style={[styles.textInput]} 
                value={this.state.display_name} 
                onChangeText={(display_name=>this.setState({display_name}))}></TextInput>
                <Text>Password</Text>
              <TextInput 
                style={[styles.textInput]} 
                value={this.state.password} 
                secureTextEntry={true}
                onChangeText={(password=>this.validatePassword(password,1))}></TextInput>
                <Text>Re-Password</Text>
              <TextInput 
                style={[styles.textInput]} 
                value={this.state.repassword} 
                secureTextEntry={true}
                onChangeText={(repassword=>this.validatePassword(repassword,2))}></TextInput>
                {
                this.state.repassword?
                validationPassword?null:
                <Text style={{marginTop:-20,marginBottom:20,color:'red'}}>Re-Check Password'</Text>:null
                }
            </View>
              <TouchableOpacity onPress={()=> this.Register()} style={{width:'100%',alignItems:'center'}}>
                <View style={{width:'80%',alignItems:'center',justifyContent:'center',backgroundColor:'#87ceeb',height:48,borderRadius:20}}>
                  <Text style={{color:'white',fontSize:18,fontWeight:'700'}}>Submit</Text>
                </View>
              </TouchableOpacity>
              
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  const {register} = state
  const {payload} = register
  return {
    status: payload?payload.success:false,
    message: payload?payload.message:''
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(RegisterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SingupScreen)
