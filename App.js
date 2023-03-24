import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class WeatherScreen extends Component {
  constructor() {
    super()
    this.state = {
      weather: ''
    }
  }
  componentDidMount = () => {
    this.getWeather()
  }
  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=23&lon=85'
    return fetch(url).then(response => response.json()).then(responseJSON => { this.setState({ weather: responseJSON }) }).catch(error => { console.log(error) })
  }
  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}><Text>Loading...</Text></View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.titleText}>Weather Forecast</Text>
            <Image style={styles.imageContainer} source={require('./assets/clouds.png')}></Image>
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 18 }}>Temperature:{this.state.weather.main.temp}</Text>
              <Text style={{ fontSize: 18 }}>Humidity{this.state.weather.main.humidity}</Text>
              <Text style={{ fontSize: 18 }}>Description:{this.state.weather.weather[0].description}</Text>
            </View>
          </View>
        </View>
      )
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    borderWidth: 2,
    alignItems: 'center'
  },
  titleText: {
    marginTop: 50,
    fontsize: 30,
    fontWeight: '570',
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginTop: 20,

  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',

  }

});
