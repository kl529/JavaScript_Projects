import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar }from "react-native";
import { LinearGradient} from "expo-linear-gradient";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName:"weather-lightning",
        gradient:["#373B44","#4286f4"],
        title:"Thunderstorm",
        subtitle:"ThunderstormThunderstorm"
    },
    Drizzle: {
        iconName:"weather-hail",
        gradient:["##89F7FE","#66A6FF"],
        title:"Drizzle",
        subtitle:"DrizzleDrizzle"
    },
    Rain: {
        iconName:"weather-rainy",
        gradient:["#00C6EB","#005BEA"],
        title:"Rain",
        subtitle:"RainRain"
    },
    Snow: {
        iconName:"weather-snowy",
        gradient:["#7DE2FC","#B9B6E5"],
        title:"Snow",
        subtitle:"SnowSnow"
    },
    Clear: {
        iconName:"weather-sunny",
        gradient:["#FEF253","#FF7300"],
        title:"Clear",
        subtitle:"ClearClear"
    },
    Clouds: {
        iconName:"weather-cloudy",
        gradient:["#D7D2CC","#304352"],
        title:"Clouds",
        subtitle:"CloudsClouds"
    },
    Haze: {
      iconName: "weather-hail",
      gradient:["#4DA0B0","#D39D38"],
      title:"Haze",
      subtitle:"HazeHaze"
    }
};

export default function Weather({temp,condition}){
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}
            >

            <StatusBar barStyle="light-content"/>

            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
              <Text style={styles.title}> {weatherOptions[condition].title}</Text>
              <Text style={styles.subtitle}> {weatherOptions[condition].subtitle}</Text>
            </View>

        </LinearGradient>
     );
}

Weather.propTypes ={
    temp: PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze"]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  halfContainer:{
      flex:1,
      justifyContent: "center",
      alignItems: "center"
  },
  temp:{
        fontSize: 36,
        color:"white"
  },
  title:{
    color: "white",
    fontSize:44,
    fontWeight:"300",
    marginBottom:10
  },
  subtitle:{
    color: "white",
    fontWeight:"600",
    fontSize:24,
  },
  textContainer:{
    paddingHorizontal:20,
    alignItems:"flex-start"
  }

 });
