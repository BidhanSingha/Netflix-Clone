import React from 'react'
import{view, StyleSheet, Image, Text, Button} from 'react-native'

export default class Jumbotron extends React,Component{

    onClickButton=()=>{
        console.log('play')
    }
    render(){
        return(
            <view style={styles,JumbotronContainer}>
                <Image style={styles,Jumpimage}
                resizeMode={'contain'}
                source={{uri: 'https://firebasestorage.googleapis.com/v0/b/workshop-57074.appspot.'
            <View style={{width: '100%', flexDirection: 'row', justifyContetent: 'center',margin}}>
            <Text style={styles, jumboText}>
                </Text>}}

            </view>
        )
    }
}

const styles= StyleSheet,create({
    JumbotronContainer: {
        height: 500,
        backgroundcolor: 'black'
    },
    jumpImage: {
        height: 400,
        },
})
