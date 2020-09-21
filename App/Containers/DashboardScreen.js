import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { View } from 'react-native-animatable'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import { SearchBar,Header,Icon,Image,Card,ListItem,Button,Overlay } from 'react-native-elements';
// Add Actions - replace 'Your' with whatever your reducer is called :)
import AuthActions from '../Redux/AuthRedux'

// Styles
import styles from './Styles/DashboardScreenStyle'
import { bindActionCreators } from 'redux'

class DashboardScreen extends Component {
  state={
    selectedMenu:'HOME',
    search:'',
    visible:false
  }
  toggleOverlay = () => {
    this.setState({visible:!this.state.visible});
  };
   MenuBar=(selected)=>{
    return(
      <View style={{position:'absolute',bottom:0,width:'100%', height:80, backgroundColor:'#add8e6',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>this.setState({selectedMenu:'HOME'})}>
          <View style={{width:60,height:60, alignItems:'center',justifyContent:'center',backgroundColor:selected==='HOME'?'white':'#add8e6',borderRadius:32}}>
             <Image source={Images.launch} style={{width:32,height:32}}/>
          </View>
          <Text style={{color:selected==='HOME'?'white':'black',marginBottom:4,marginTop:-4}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>this.setState({selectedMenu:'PRODUCT'})}>
          <View style={{width:60,height:60, alignItems:'center',justifyContent:'center',backgroundColor:selected==='PRODUCT'?'white':'#add8e6',borderRadius:32}}>
             <Image source={Images.launch} style={{width:32,height:32}}/>
          </View>
          <Text style={{color:selected==='PRODUCT'?'white':'black',marginBottom:4,marginTop:-4}}>Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginBottom:20}} onPress={()=>this.setState({selectedMenu:'EXPLORE'})}>
          <View style={{backgroundColor:selected==='EXPLORE'?'white':'#add8e6',borderRadius:60, width:100,height:100,alignItems:'center',justifyContent:'center',marginHorizontal:-16,flexDirection:'column'}}>
            <Image source={Images.launch} style={{width:48,height:48}}/>
          </View>
          <Text style={{color:selected==='explore'?'white':'black'}}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>this.setState({selectedMenu:'INVESTMENT'})}>
          <View style={{width:60,height:60, alignItems:'center',justifyContent:'center',backgroundColor:selected==='INVESTMENT'?'white':'#add8e6',borderRadius:32}}>
             <Image source={Images.launch} style={{width:32,height:32}}/>
          </View>
          <Text style={{color:selected==='INVESTMENT'?'white':'black',marginBottom:4,marginTop:-4}}>Invesment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>this.setState({selectedMenu:'PROFILE'})}>
          <View style={{width:60,height:60, alignItems:'center',justifyContent:'center',backgroundColor:selected==='PROFILE'?'white':'#add8e6',borderRadius:32}}>
             <Image source={Images.launch} style={{width:32,height:32}}/>
          </View>
          <Text style={{color:selected==='PROFILE'?'white':'black',marginBottom:4,marginTop:-4}}>Profile</Text>
        </TouchableOpacity>
      </View>
    )
  }
  Home =()=>{
    return(
      <View>
        <Text>Home</Text>
      </View>
    )
  }
  Product =()=>{
    return(
      <View>
        <Text>Product</Text>
      </View>
    )
  }
  Explore =()=>{
    return(
      <View>
        <Text>Explore</Text>
      </View>
    )
  }
  Investment =()=>{
    return(
      <View>
        <Text>Investment</Text>
      </View>
    )
  }
  Profile =()=>{
    return(
      <ScrollView>
      <View style={{flex:1}}>
          <View style={styles.header}>
            <Image style={styles.avatar} source={Images.clearLogo} PlaceholderContent={<ActivityIndicator />}/>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=> Alert.alert('Whoopss','On Development')}>
                <Text>Edit Profile</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer} onPress={()=> {
                this.props.authSuccess('')
                this.props.navigation.replace('LoginScreen')
                }}>
                <Text>Logout</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
      </ScrollView>
    )
  }

  updateSearch = (search) => {
    this.setState({ search });
  };
  render () {
    const { selectedMenu,search,visible } = this.state
    return (
      <View style={[{flex:1,height:'100%',backgroundColor:'#F5F5F5'}]}>
        {
          selectedMenu ==='EXPLORE' ?
          <SearchBar
          placeholder="coba cari disini ....."
          onChangeText={this.updateSearch}
          value={search}
          leftIcon={Images.logo}
          lightTheme
          round
          placeholderTextColor={'#add8e6'}
          containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
          showLoading={true}
          style={{backgroundColor:"white"}}
          inputStyle={{backgroundColor: '#add8e6'}}
          inputContainerStyle={{backgroundColor: '#add8e6'}}
        />:
          selectedMenu==='PROFILE'?
          <Header
          placement="left"
          centerComponent={{ text: selectedMenu, style: { color: '#fff' } }}
          backgroundColor={'#add8e6'}
        />
          :
        <Header
            placement="left"
            leftComponent={<TouchableOpacity onPress={()=>this.toggleOverlay()}><Icon name="menu" color="white"></Icon></TouchableOpacity>}
            centerComponent={{ text: selectedMenu, style: { color: '#fff' } }}
            rightComponent={<TouchableOpacity onPress={()=>Alert.alert('On Development')}><Icon name="info" color="white"></Icon></TouchableOpacity>}
            backgroundColor={'#add8e6'}
          />
        }
      
        <KeyboardAvoidingView>
         {
           selectedMenu ==='HOME'?
            this.Home():
            selectedMenu === 'PRODUCT' ?
            this.Product():
            selectedMenu === 'EXPLORE' ?
            this.Explore():
            selectedMenu==='INVESTMENT' ?
            this.Investment():
            selectedMenu === 'PROFILE'?
            this.Profile():
            null
         }
        </KeyboardAvoidingView>
        {this.MenuBar(selectedMenu)}
        <Overlay isVisible={visible} onBackdropPress={()=>this.toggleOverlay()} overlayStyle={{width:'70%',height:'100%',marginLeft:'-30%'}}>
          <Text>On Development</Text>
        </Overlay>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)
