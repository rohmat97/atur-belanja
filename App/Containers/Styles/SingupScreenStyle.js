import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  textInput: {height: 40,width:'100%', borderColor: 'gray', borderWidth: 1,borderRadius:8,padding:12,marginBottom:20}
})
