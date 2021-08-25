import React,{Component} from 'react';
import { Text,TextInput,View } from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends Component{
    constructor(){
        super();
        this.state={
            latitude:'',
            longitude:''
        }
    }

    
    render(){
        
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TextInput style={{height:40,borderColor:'gray',borderWidth:1}}
                placeholder="Enter you latitude"
                placeholderTextColor="rgba(183,183,183,0.5)"
                onChangeText={(text)=>{
                    this.setState({latitude:text})
                }} />
                <TextInput style={{height:40,borderColor:'gray',borderWidth:1}}
                placeholder="Enter you longitude"
                placeholderTextColor="rgba(183,183,183,0.5)"
                onChangeText={(longi)=>{
                    this.setState({longitude:longi})
                }} />
                <WebView scalesPageToFit={true} source={{uri:path}} 
                style={{marginBottom:20,flex:1}}/>
            </View>
        )
    }
}

const path ='https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'

