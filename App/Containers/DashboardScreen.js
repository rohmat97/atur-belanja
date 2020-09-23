import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Alert, ActivityIndicator, Dimensions } from 'react-native'
import { View } from 'react-native-animatable'
import { connect } from 'react-redux'
import { sliderWidth, itemWidth } from './Styles/SliderEntery.styles';
import SliderEntry from './components/SliderEntry';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Images } from '../Themes'
import { SearchBar,Header,Icon,Image,Card,ListItem,Button,Overlay, Divider } from 'react-native-elements';
// Add Actions - replace 'Your' with whatever your reducer is called :)
import AuthActions from '../Redux/AuthRedux'

// Styles
import styles from './Styles/DashboardScreenStyle'
import { bindActionCreators } from 'redux'

class DashboardScreen extends Component {
  state={
    selectedMenu:'DASHBOARD',
    search:'',
    visible:false,
    slider1ActiveSlide:0,
    suggestion:[ {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
  },
  {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
      title: 'Middle Earth, Germany',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/lceHsT6l.jpg'
  }]
  }
  toggleOverlay = () => {
    this.setState({visible:!this.state.visible});
  };
  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <SliderEntry
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={true}
          parallaxProps={parallaxProps}
        />
    );
}

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
      <ScrollView>
        <View style={{flex:1}}>
          <View style={{backgroundColor:'#2D4070',width:"100%",alignItems:'center'}}>
            {/* intro */}
            <View style={{width:"100%", height:Dimensions.get('screen').height*0.15, backgroundColor:'#50E348', borderBottomLeftRadius:12,borderBottomRightRadius:12,padding:12}}>
              <View style={{flexDirection:'row'}}><Text  style={{fontSize:20}}>Hi, </Text><Text style={{fontWeight:'bold',fontSize:20}}>Rohmat</Text></View>
              <Text style={{fontSize:20}}>your free trial will expire in 6 days</Text>
              <View style={{width:'100%', flexDirection:'row',justifyContent:'flex-end',paddingTop:Dimensions.get('screen').height*0.03}}>
                <Text style={{color:'#4C4F4C',marginRight:4}}>Select Package</Text> 
                <Icon name="chevron-right" size={24} color="#4C4F4C" style={{width:24,height:24,backgroundColor:'white',justifyContent:'center',paddingRight:5, borderRadius:20,borderWidth:1,borderColor:'#4C4F4C'}}/>
              </View>
            </View>
            <Text style={{fontSize:20, lineHeight:25,fontWeight:'700', color:'white', paddingVertical:32}}>Manage your stock and order easier</Text>
            {/* menu atas */}
            <View style={{width:'100%',height:150,flexDirection:'row',alignItems:'center',alignItems:'center',justifyContent:'center'}}>
              <View style={{alignItems:'center',width:'30%'}}>
                <Image source={Images.icon_add} style={{width:60,height:60}}/>
                <Text style={{color:'#fff',marginTop:8}}>Add Product</Text>
              </View>
              <View style={{alignItems:'center',width:'30%'}}>
                <Image source={Images.icon_shipping} style={{width:60,height:60}}/>
                <Text style={{color:'#fff',marginTop:8,textAlign:'center'}} numberOfLines={2}>Arrage{'\n'} Your Shipping</Text>
              </View>
              <View style={{alignItems:'center',width:'30%'}}>
               <Image source={Images.icon_order} style={{width:60,height:60}}/>
               <Text style={{color:'#fff',marginTop:8,textAlign:'center'}} numberOfLines={2}>Your{'\n'} First Order</Text>
              </View>
            </View>
            {/* menu bawah */}
            <View style={{width:'100%',height:150, flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <View style={{alignItems:'center',width:'30%'}}>
                <Image source={Images.icon_courier} style={{width:60,height:60}}/>
                <Text style={{color:'#fff',marginTop:8,textAlign:'center'}} numberOfLines={2}>Choose Courier</Text>
              </View>
              <View style={{alignItems:'center',width:'30%'}}>
                <Image source={Images.icon_addons} style={{width:60,height:60}}/>
                <Text style={{color:'#fff',marginTop:8,textAlign:'center'}} numberOfLines={2}>Addons{'\n'} Functionality</Text>
              </View>
              <View style={{alignItems:'center',width:'30%'}}>
                <Image source={Images.icon_more} style={{width:60,height:60}}/>
               <Text style={{color:'#fff',marginTop:8,textAlign:'center'}} numberOfLines={2}>More</Text>
              </View>
            </View>
            {/* menu info */}
            <View style={{width:'100%',backgroundColor:'#DDE3E9',justifyContent:'space-around',borderTopLeftRadius:50,borderTopRightRadius:50,marginTop:150,paddingBottom:150}}>
              <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around',paddingHorizontal:'2%',marginTop:-75}}>
                <View style={{width:'45%',height:175, backgroundColor:'#fff',borderRadius:8,borderColor:'#50E348',borderWidth:2,justifyContent:'center',alignItems:'center'}}>
                    <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                      <Image source={Images.menu_info_order} style={{width:60,height:60,marginLeft:40}}/>
                      <View style={{width:'60%',flexDirection:'column',alignItems:'center',marginLeft:-8}}>
                        <Text style={{fontWeight:'bold', fontSize:30}}>5</Text>
                        <Text style={{fontWeight:'700',fontSize:10}}>Today’s Order</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={{width:'80%',height:30,backgroundColor:'#50E348',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:20}}>
                      <Text style={{fontWeight:'700'}}>See Details</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'45%',height:175, backgroundColor:'#fff',borderRadius:8,borderColor:'#50E348',borderWidth:2,justifyContent:'center',alignItems:'center'}}>
                    <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                      <Image source={Images.menu_info_process} style={{width:60,height:60,marginLeft:40}}/>
                      <View style={{width:'60%',flexDirection:'column',alignItems:'center',marginLeft:-8}}>
                        <Text style={{fontWeight:'bold', fontSize:30}}>5</Text>
                        <Text style={{fontWeight:'700',fontSize:10}}>On Process</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={{width:'80%',height:30,backgroundColor:'#50E348',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:20}}>
                      <Text style={{fontWeight:'700'}}>See Details</Text>
                    </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around',paddingHorizontal:'2%',paddingTop:48}}>
                <View style={{width:'45%',height:175, backgroundColor:'#fff',borderRadius:8,borderColor:'#50E348',borderWidth:2,justifyContent:'center',alignItems:'center'}}>
                      <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Image source={Images.menu_info_sold} style={{width:60,height:60,marginLeft:40}}/>
                        <View style={{width:'60%',flexDirection:'column',alignItems:'center',marginLeft:-8}}>
                          <Text style={{fontWeight:'bold', fontSize:30}}>5</Text>
                          <Text style={{fontWeight:'700',fontSize:10}}>Sold</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={{width:'80%',height:30,backgroundColor:'#50E348',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:20}}>
                        <Text style={{fontWeight:'700'}}>See Details</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{width:'45%',height:175, backgroundColor:'#fff',borderRadius:8,borderColor:'#50E348',borderWidth:2,justifyContent:'center',alignItems:'center'}}>
                      <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Image source={Images.menu_info_order} style={{width:60,height:60,marginLeft:40}}/>
                        <View style={{width:'60%',flexDirection:'column',alignItems:'center',marginLeft:-8}}>
                          <Text style={{fontWeight:'bold', fontSize:30}}>5</Text>
                          <Text style={{fontWeight:'700',fontSize:10}}>Gross Profit</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={{width:'80%',height:30,backgroundColor:'#50E348',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:20}}>
                        <Text style={{fontWeight:'700'}}>See Details</Text>
                      </TouchableOpacity>
                  </View>
                </View>
                {/* text Monthly Item Sales */}
                <View style={{padding:24,width:'100%', height:200,backgroundColor:'#50E348',marginTop:100,borderTopRightRadius:150}}>
                  <Text style={{color:'#2D4070', fontSize:28, fontStyle:'italic',fontWeight:'bold'}}>Monthly Item Sales</Text>
                </View>
                {/* menu sales chart */}
                <View style={{width:'100%',height:400,backgroundColor:'#455A90',marginTop:-130,borderTopRightRadius:150,alignItems:'center',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
                  <View style={{width:'100%',flexDirection:'row', padding:20}}>
                    <View style={{width:'60%',flexDirection:'column',alignItems:'flex-end'}}>      
                      <Text style={{color:'#fff',fontSize:24, fontWeight:'bold',fontStyle:'italic'}}>Sales Chart</Text>
                      <Text style={{color:'#fff',fontSize:18, fontWeight:'bold',fontStyle:'italic'}}>July 2020</Text>
                    </View>
                    <TouchableOpacity onPress={()=>Alert.alert('on development')} style={{width:'20%',alignItems:'flex-end',justifyContent:'center'}}><Icon name="menu" color="black" size={24} style={{backgroundColor:'#50E348'}}></Icon></TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity onPress={()=>Alert.alert('on development')} style={{width:'100%',alignItems:'center',justifyContent:'center'}}><Icon name="arrow-drop-down" color="black" size={32} style={{backgroundColor:'#C4C4C4'}}></Icon></TouchableOpacity>
                <Divider style={{ backgroundColor: 'white',width:'100%',marginTop:20,height:8 }} />
                {/* Aricle Suggestions */}
                <View style={{width:'100%',height:80,flexDirection:'row'}}>
                    <View style={{width:'70%',justifyContent:'center',alignItems:'center', backgroundColor:'#50E348',height:'100%', borderTopRightRadius:20,borderBottomRightRadius:20, borderBottomColor:'rgba(0, 0, 0, 0.25)', borderBottomWidth:2}}>
                      <Text style={{fontSize:32,fontWeight:'bold',fontStyle:'italic',lineHeight:32}}>Article Suggestions</Text>
                    </View>
                    <View style={{width:'30%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{fontWeight:'700',lineHeight:13}}>See All</Text>
                        <TouchableOpacity onPress={()=>Alert.alert('on development')} style={{alignItems:'center',justifyContent:'center'}}><Icon name="chevron-right" color="black" size={24} style={{backgroundColor:'#50E348',borderRadius:40,marginLeft:12,marginRight:8}}></Icon></TouchableOpacity>
                    </View>
                </View>
                {/* slider */}
                <View style={styles.exampleContainer}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={this.state.suggestion}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={{
                    marginTop: 15,
                    overflow: 'visible' // for custom animations
                }}
                  contentContainerCustomStyle={{paddingVertical: 10}}
                  loop={true}
                  loopClonesPerSide={1}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={this.state.suggestion.length}
                  activeDotIndex={this.state.slider1ActiveSlide}
                  containerStyle={{ paddingVertical: 8}}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginHorizontal: 8
                }}
                  inactiveDotColor={'#000'}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
            </View>

          </View>
        </View>
      </ScrollView>
      
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
