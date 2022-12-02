import React, { useState } from 'react'
import { View, Text , StyleSheet, StatusBar, Dimensions, TouchableHighlight, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native'
import { Constants } from 'expo-constants'
import Feather from 'react-native-vector-icons/Feather' 
import AntDesign from 'react-native-vector-icons/AntDesign' 
// import VideoPlayer from 'react-native-video-player'
import * as Progress from 'react-native-progress'

import { Video, AVPlaybackStatus } from 'expo-av';



  const data = [{key:1,
    video_url:'https://951199.smushcdn.com/2589717/wp-content/uploads/2019/12/React-950x500.png?lossy=1&strip=1&webp=1',
    title: "React Tutorial and Project course (2022)",
    name: "JohnSmilga",
    rate: "10% Complete"
},
{key:2,
    video_url: 'https://miro.medium.com/max/4800/1*i1j6yKvTIgXkaVlOWG1tzg.webp',
    title: "React Front to Back 2022",
    name: "Brass Traversy",
    rate: "30% Complete"
},
{key:3,
    video_url:'https://951199.smushcdn.com/2589717/wp-content/uploads/2019/12/React-950x500.png?lossy=1&strip=1&webp=1',
    title: "Build your Web Apps with React and Firebase",
    name: "The NetNinja (Shaun Pelling)",
    rate: "30% Complete"
},
{key:4,
    video_url:'https://blog.logrocket.com/wp-content/uploads/2021/05/displaying-images-react-native-image-component.png',
    title: "React Native -The Practical Guide [2023]",
    name: "Academind by Maximilian Schwarzmuller",
    rate: "10% Complete"
},
{key:5,
    video_url:'https://www.shutterstock.com/image-photo/through-glass-thoughtful-asian-long-260nw-2103777482.jpg',
    title: "Create Learning Coaurses with Articulate Storyline 360",
    name: "Jeff Batt",
    rate: "30% Complete"
},
{key:6,
    video_url:'https://www.angularjswiki.com/angular/use-ngoptimizedimage-to-improve-image-loading-performance-in-angular/featured.png',
    title: "Build your mobile App with Angular",
    name: "Andrew Pach",
    rate: "30% Complete"
},
{key:7,
    video_url:'https://wallpaperaccess.com/full/4584350.jpg',
    title: "Build your mobile App with Vue/Vlite",
    name: "Andrew Pach",
    rate: "30% Complete"
},
{key:8,
    video_url:'https://www.angularjswiki.com/angular/use-ngoptimizedimage-to-improve-image-loading-performance-in-angular/featured.png',
    title: "Build your mobile App with Angular",
    name: "Andrew Pach",
    rate: "30% Complete"
},
{key:9,
    video_url:'https://wallpaperaccess.com/full/4584350.jpg',
    title: "Build your mobile App with Vue/Vlite",
    name: "Andrew Pach",
    rate: "30% Complete"
},
{key:10,
    video_url:'https://w7.pngwing.com/pngs/781/301/png-transparent-microsoft-powerpoint-application-software-ios-presentation-powerpoint-2013-icon-text-trademark-orange.png',
    title: "PowerPoint 2016, 2019 365 - Master Powerpoint Presentation",
    name: "Andrew Pach",
    rate: "30% Complete"
},
{key:11,
    video_url: 'https://miro.medium.com/max/4800/1*i1j6yKvTIgXkaVlOWG1tzg.webp',
    title: "React Front to Back 2022",
    name: "Brass Traversy",
    rate: "30% Complete"
},
{key:12,
    video_url:'https://951199.smushcdn.com/2589717/wp-content/uploads/2019/12/React-950x500.png?lossy=1&strip=1&webp=1',
    title: "Build your Web Apps with React and Firebase",
    name: "The NetNinja (Shaun Pelling)",
    rate: "30% Complete"
},




]


interface Props {
    navigation:any;
  }




const Featured = (props: Props) => {
    const [selectedId, setSelectedId] = useState(null);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});



    const navigateToNamePage =() => props.navigation.navigate("mylearning")
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';
       
    
        return (
         <TouchableHighlight  style={styles.touch} onPress={navigateToNamePage}>
            {/* <VideoPlayer video={{uri:item.video_url}}
            autoplay={false}

            /> */}
           <View style={styles.card}>
           <Image
      
        style={styles.video}
        source={{
          uri: item. video_url,
        }}
        

      />

<View style={styles.next_section}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Progress.Bar progress={0.3} width={250} style={styles.progress} color="green" unfilledColor="grayr" />
        
        <Text style={styles.rate}>{item.rate}</Text>

      </View>
           </View>

     


         </TouchableHighlight>
        );
      };
      





    
  return (
    
  
         <View  style={styles.main}>
            <View style={styles.flexsection}>

            <View>
                <Text style={styles.first_txt}>My Courses</Text>
            </View>
            <View style={styles.icons}>
                <AntDesign name="search1" color={'#ffffff'}  size={20} style={styles.icn}/>
               <Feather name='shopping-cart' color={'#ffffff'} size={20} style={styles.icn}/>
               
            </View>
            </View>
            <View style={styles.btn_section}>
                <TouchableOpacity style={styles.btn_white}>
                    <Text style={styles.btn_text_white}>All</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.btn_back}>
                    <Text style={styles.btn_text_balck}>Downloaded</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_back}>
                    <Text style={styles.btn_text_balck}>Archived</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_back}>
                    <Text style={styles.btn_text_balck}>Favorite</Text>
                </TouchableOpacity>
            </View>
            

        

  
    <View>
    <FlatList
       data={data}
       renderItem={renderItem}
       keyExtractor={(item) => item.key.toString()}
       extraData={selectedId}/>
    </View>


   </View>
  

  )
}

export default Featured
const styles = StyleSheet.create({
    main:{
        // paddingHorizontal: 20,
        height:'100%',
        marginTop: StatusBar.currentHeight,
        padding:"5%",
        backgroundColor:'#000000'
        
          },
          touch:{
            marginTop:10
          },
          progress:{
            // width:"100%",
            borderColor:"gray",
            backgroundColor:"1d2124",
            marginTop:5,
           

          },
    card:{
        display:'flex',
        flexDirection:'row',
        width:"100%",
        // height:"30%"
    },
    video:{
        width:80,
        height:100,
        borderRadius:5,
        // backgroundColor:"#ffffff"

    },

    next_section:{
        display:"flex",
        flexDirection:'column',
        marginLeft:5,
        flex:1
  
      },
      title:{
        fontSize:18,
        fontWeight:'700',
        color:'#ffffff',
  
  
      },
    name:{
        fontSize:15,
        fontWeight:'400',
        color:'#ffffff',

    },
    rate:{
        fontSize:15,
        fontWeight:'400',
        color:'#ffffff',
    },
    icons:{
        display:'flex',
       
        flexDirection:'row'

    },
    icn:{
        marginLeft:6,
    },
    flexsection:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    first_txt:{
        color:'#ffffff',
        fontSize:20
        
        
    },
    btn_section:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:10,
        marginBottom:10

    },
    btn_back:{
        paddingHorizontal:10,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#ffffff'
    

    },
    btn_white:{
       paddingHorizontal:15,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff'

    },

    btn_text_balck:{
        color:'#ffffff',
        fontWeight:'600',
        fontSize:18

    },
    btn_text_white:{
        color:'black',
        fontWeight:'600',
        fontSize:18

    }


})