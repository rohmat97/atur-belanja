import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Alert, ActivityIndicator, Dimensions } from 'react-native'
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
    selectedMenu:'DASHBOARD',
    search:'',
    visible:false
  }
  toggleOverlay = () => {
    this.setState({visible:!this.state.visible});
  };
  //  MenuBar=(selected)=>{
  //   return(
  //     <View style={{position:'absolute',bottom:0,width:'100%', height:80, backgroundColor:'#add8e6',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
  //       <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>this.setState({selectedMenu:'HOME'})}>
  //         <View style={{width:60,height:60, alignItems:'center',justifyContent:'center',backgroundColor:selected==='HOME'?'white':'#add8e6',borderRadius:32}}>
  //            <Image source={Images.launch} style={{width:32,height:32}}/>
  //         </View>
  //         <Text style={{color:selected==='HOME'?'white':'black',marginBottom:4,marginTop:-4}}>Home</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>this.setState({selectedMenu:'PRODUCT'})}>
  //         <View style={{width:60,height:60, alignItems:'center',justifyContent:'center',backgroundColor:selected==='PRODUCT'?'white':'#add8e6',borderRadius:32}}>
  //            <Image source={Images.launch} style={{width:32,height:32}}/>
  //         </View>
  //         <Text style={{color:selected==='PRODUCT'?'white':'black',marginBottom:4,marginTop:-4}}>Product</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginBottom:20}} onPress={()=>this.setState({selectedMenu:'EXPLORE'})}>
  //         <View style={{backgroundColor:selected==='EXPLORE'?'white':'#add8e6',borderRadius:60, width:100,height:100,alignItems:'center',justifyContent:'center',marginHorizontal:-16,flexDirection:'column'}}>
  //           <Image source={Images.launch} style={{width:48,height:48}}/>
  //         </View>
  //         <Text style={{color:selected==='explore'?'white':'black'}}>Explore</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>this.setState({selectedMenu:'INVESTMENT'})}>
  //         <View style={{width:60,height:60, alignItems:'center',justifyContent:'center',backgroundColor:selected==='INVESTMENT'?'white':'#add8e6',borderRadius:32}}>
  //            <Image source={Images.launch} style={{width:32,height:32}}/>
  //         </View>
  //         <Text style={{color:selected==='INVESTMENT'?'white':'black',marginBottom:4,marginTop:-4}}>Invesment</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>this.setState({selectedMenu:'PROFILE'})}>
  //         <View style={{width:60,height:60, alignItems:'center',justifyContent:'center',backgroundColor:selected==='PROFILE'?'white':'#add8e6',borderRadius:32}}>
  //            <Image source={Images.launch} style={{width:32,height:32}}/>
  //         </View>
  //         <Text style={{color:selected==='PROFILE'?'white':'black',marginBottom:4,marginTop:-4}}>Profile</Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }
  Dashboard =()=>{
    return(
      <View>
        <Text>Dashboard</Text>
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
  Order =()=>{
    return(
      <View>
        <Text>Order</Text>
      </View>
    )
  }
  Payment =()=>{
    return(
      <View>
        <Text>Investment</Text>
      </View>
    )
  }
  Report =()=>{
    return(
      <View>
        <Text>Report</Text>
      </View>
    )
  }
  Analyzer =()=>{
    return(
      <View>
        <Text>Analyzer</Text>
      </View>
    )
  }
  Addons =()=>{
    return(
      <View>
        <Text>Addons</Text>
      </View>
    )
  }
  Mutasi =()=>{
    return(
      <View>
        <Text>Mutasi</Text>
      </View>
    )
  }
  Settings =()=>{
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
          leftComponent={<TouchableOpacity onPress={()=>this.toggleOverlay()}><Icon name="menu" color="#2D4070" ></Icon></TouchableOpacity>}
          centerComponent={<Image source={Images.logo} style={{width:Dimensions.get('screen').width*0.3,height:Dimensions.get('screen').height*0.05}}/>}
          rightComponent={
            <View style={{flexDirection:'row',justifyContent:'space-around', width:100}}>
              <TouchableOpacity
                onPress={() =>Alert.alert('in development')}
                style={{alignItems:'center'}}
              >
                <Image source={Images.icon_notif} style={{width:28,height:28}}/>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() =>Alert.alert('in development')}
              style={{alignItems:'center'}}
            >
             <Image source={Images.icon_gift} style={{width:28,height:28}}/>
            </TouchableOpacity>
          </View>
          }
          backgroundColor={'#fff'}
          containerStyle={{marginTop:0}}
        /> 
        }
      
        <KeyboardAvoidingView>
         {
           selectedMenu ==='DASHBOARD'?
            this.Dashboard():null
         }
         {
             selectedMenu === 'PRODUCT' ?
             this.Product():null
         }
         {
          selectedMenu === 'ORDER' ?
          this.Order():null
         }
         {
          selectedMenu==='PAYMENT' ?
          this.Payment():null
         }
         {

          selectedMenu==='REPORT' ?
          this.Report():null
         }
         {
          selectedMenu==='ANALYZER' ?
          this.Analyzer():null
         }
         {

          selectedMenu==='ADDONS'?
          this.Addons():null
         }
         {
          selectedMenu==='MUTASI' ?
          this.Mutasi():null
         }
         {
          selectedMenu === 'SETTINGS'?
          this.Settings():
          null
         }
        </KeyboardAvoidingView>
        {/* {this.MenuBar(selectedMenu)} */}
        <Overlay 
          isVisible={visible} 
          onBackdropPress={()=>this.toggleOverlay()} 
          overlayStyle={{width:'50%',height:'100%',marginLeft:'-50%'}}
          animated={true}
          animationType={'fade'}
          >
            <View style={{width:'100%',height:'12%',flexDirection:'row',alignItems:'center',justifyContent:'space-around',padding:10,paddingVertical:20}}>
              <Image source={Images.user_icon} style={{width:40,height:40, borderRadius:20}} />
              <Text style={{color:'#2C7D28',fontSize:20,lineHeight:25, fontWeight:'700',width:'50%'}} numberOfLines={3}>Rohmat Dasuki</Text>
            </View>
            <TouchableOpacity style={styles.sideBar} 
              onPress={()=>
                {
                  this.setState({selectedMenu: 'DASHBOARD'}) 
                  this.toggleOverlay()
                }
              }>
              <Image source={Images.user_icon} style={styles.iconMenuSideBar} />
              <Text style={styles.textMenuSidebar} >Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBar} 
              onPress={()=>
                {
                  this.setState({selectedMenu: 'PRODUCT'}) 
                  this.toggleOverlay()
                }}>
              <Image source={Images.user_icon} style={styles.iconMenuSideBar} />
              <Text style={styles.textMenuSidebar} >Product</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBar} 
              onPress={()=>
                {
                  this.setState({selectedMenu: 'ORDER'}) 
                  this.toggleOverlay()
                }}>
              <Image source={Images.user_icon} style={styles.iconMenuSideBar} />
              <Text style={styles.textMenuSidebar} >Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBar} 
              onPress={()=>
                {
                  this.setState({selectedMenu: 'PAYMENT'}) 
                  this.toggleOverlay()
                }}>
              <Image source={Images.user_icon} style={styles.iconMenuSideBar} />
              <Text style={styles.textMenuSidebar} >Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBar} 
              onPress={()=>
                { 
                  this.setState({selectedMenu: 'REPORT'}) 
                  this.toggleOverlay()
                 
                }}>
              <Image source={Images.user_icon} style={styles.iconMenuSideBar} />
              <Text style={styles.textMenuSidebar} >Report</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBar} 
              onPress={()=>
                {
                  this.setState({selectedMenu: 'ANALYZER'}) 
                  this.toggleOverlay()
                }}>
              <Image source={Images.user_icon} style={styles.iconMenuSideBar} />
              <Text style={styles.textMenuSidebar} >Analyzer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBar} 
              onPress={()=>
                {
                  this.setState({selectedMenu: 'ADDONS'}) 
                  this.toggleOverlay()
                }
              }>
              <Image source={Images.user_icon} style={styles.iconMenuSideBar} />
              <Text style={styles.textMenuSidebar} >Addons</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBar} 
              onPress={()=>
                {
                  this.setState({selectedMenu: 'MUTASI'}) 
                  this.toggleOverlay()
                }
              }>
              <Image source={Images.user_icon} style={styles.iconMenuSideBar} />
              <Text style={styles.textMenuSidebar} >Mutasi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBar} 
              onPress={()=>
                {
                  this.setState({selectedMenu: 'SETTINGS'}) 
                  this.toggleOverlay()
                }
              }>
              <Image source={Images.user_icon} style={styles.iconMenuSideBar} />
              <Text style={styles.textMenuSidebar} >Settings</Text>
            </TouchableOpacity>
            
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
