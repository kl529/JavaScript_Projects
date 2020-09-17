import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";
import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "785d68be9b9111ec73003f4961feba9b";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  // 37.3907, 126.7888
    getWeather = async(latitude, longitude) =>{
      const { data : {main:{temp}, weather } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=37.3907&lon=126.7888&APPID=${API_KEY}&units=metric`);
      // const { dati } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=37.3907&lon=126.7888&APPID=785d68be9b9111ec73003f4961feba9b&units=metric`);
      // console.log("*******************");
      // console.log("VVVVVVVVV",dati);
      this.setState({isLoading:false, condition:weather[0].main, temp});
    };

  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      // const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      // console.log(latitude, longitude);
      this.getWeather(37.3907,126.7888)
      this.setState({isLoading:false});
    } catch(error){
      Alert.alert("Can't find you", "so sad");
    }
  };


  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition} = this.state;
      return isLoading ? <Loading /> : <Weather temp = {Math.round(temp)} condition={"Haze"}/>;
  }
}

// "Thunderstorm",
// "Drizzle",
// "Rain",
// "Snow",
// "Clear",
// "Clouds",
// "Haze"
