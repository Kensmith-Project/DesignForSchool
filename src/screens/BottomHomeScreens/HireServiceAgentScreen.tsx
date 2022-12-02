import React from 'react'
import { View , Text, ScrollView, FlatList, StyleSheet, ImageBackground, Alert, Image, Pressable, StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native'

import HireSlides from '../../components/HireSlides'

import {COLOR} from '../../components/Color'
import HireServiceAgentFeatureComponent from '../../components/HireAgentFeatureComponent'




/* 
ImUrl?: any;
  likes?: string;
  name?: string;
  jobtitle?: string;
  rate?:string;
  phone?: string;

*/

const HireServiceAgentScreen = () => {
  return (
    <SafeAreaView>
     <View style={{
        paddingTop: StatusBar.currentHeight
      }}>
     <Text style={styles.bigTex}>Courses For Frontend Developers</Text>
      <View >
      <FlatList horizontal={true} 
      pagingEnabled={true} data={HireSlides} renderItem={({item})=>
       <HireServiceAgentFeatureComponent
       ImUrl={item.ImUrl}
       likes={item.likes}
       name={item.name}
       rate={item.rate}
       phone={item.phone}
       jobtitle={item.jobtitle}
       />} 
     
     />
      </View>
     <ScrollView>
     <View>
      <View style={styles.topContainer}>
        
      </View>
      <View style={{paddingLeft: 20, paddingRight: 20, marginTop: 44}}>
      <Text style={styles.bigTex}>Categories</Text>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable >
              <ImageBackground
                source={{uri:'https://951199.smushcdn.com/2589717/wp-content/uploads/2019/12/React-950x500.png?lossy=1&strip=1&webp=1'}}
                style={{width: 160, height: 160}}>
                <View
                  style={{
                    backgroundColor: COLOR.buttonPrimary,
                    width: 145,
                    height: 150,
                    opacity: 0.8,
                    alignSelf: 'center',
                    marginTop: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                 
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '900',
                      lineHeight: 23,
                      marginTop: 8,
                      color: COLOR.baseColorPrimary,
                    }}>
                  React
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>

            <Pressable >
              <ImageBackground
                source={{uri:'https://www.angularjswiki.com/angular/use-ngoptimizedimage-to-improve-image-loading-performance-in-angular/featured.png'}}
                style={{width: 160, height: 160}}>
                <View
                  style={{
                    backgroundColor: COLOR.buttonPrimary,
                    width: 145,
                    height: 150,
                    opacity: 0.8,
                    alignSelf: 'center',
                    marginTop: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '900',
                      lineHeight: 23,
                      marginTop: 8,
                      color: COLOR.baseColorPrimary,
                    }}>
                    Angular
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
          <View style={{marginTop: 22}}>
            <Pressable
             >
              <ImageBackground
                source={{uri:'https://wallpaperaccess.com/full/4584350.jpg'}}
                style={{width: 160, height: 160}}>
                <View
                  style={{
                    backgroundColor: COLOR.buttonPrimary,
                    width: 160,
                    height: 160,
                    opacity: 0.8,
                    alignSelf: 'center',
                    marginTop: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                 
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '900',
                      lineHeight: 23,
                      marginTop: 8,
                      color: COLOR.baseColorPrimary,
                    }}>
                   Vue js/Vlite
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
     </ScrollView>
     </View>
      
        

      
    
    </SafeAreaView>
  
  )
}
const styles = StyleSheet.create({
  bigTex:{
    fontSize:24,
    fontWeight:'600',
    
    marginVertical:'7%',
    paddingHorizontal: '5%'

  },
  topContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  
})

export default HireServiceAgentScreen