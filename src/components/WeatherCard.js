import React, { useEffect,useState } from 'react'
import { useDate } from '../utils/useDate'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import './WeatherCard.css'
const WeatherCard = ({temperature,windspeed,humidity,place,heatIndex,iconString,conditions}) => {
  
  const [icon,setIcon]=useState(sun)
  const {time}=useDate()
  console.log(iconString)
  useEffect(()=>{
    if(iconString){
      if(iconString.toLowerCase().includes('cloud')){
        setIcon(cloud)
      }else if(iconString.toLowerCase().includes('rain')){
        setIcon(rain)
      }else if(iconString.toLowerCase().includes('clear')){
        setIcon(sun)
      }else if(iconString.toLowerCase().includes('thunder')){
        setIcon(storm)
      }else if(iconString.toLowerCase().includes('fog')){
        setIcon(fog)
      }else if(iconString.toLowerCase().includes('snow')){
        setIcon(snow)
      }else if(iconString.toLowerCase().includes('wind')){
        setIcon(wind)
      }
    }
  },[iconString])
  
  return (
    <div className='weather-wrapper glassCard1'>
      <div className='weather-container'> 
         <img src={icon} alt='weather-icon'></img>
         <p className='temp'>{temperature} &deg;C</p>
      </div>

      <div className='place'>
        {place}
      </div>

      <div className='date-container1'>
        <p className='date-para'>
          {new Date().toDateString()}
        </p>
        <p className='date-para'>
          {time}
        </p>
      </div>

      <div className='wind-container'>
        <p className='wind-para'>Wind Speed <p style={{fontWeight:"normal",margin:"0px"}}>{windspeed} km/h</p></p>
        <p className='humidity-para'>Humidity <p style={{fontWeight:"normal",margin:"0px"}}>{humidity} gm/m&#179;</p> </p>
      </div>

      <div className='heatindex-container'>
        <p className='heatindex-para'>Heat Index</p>
        <p className='heatindex-para1'>
          {heatIndex?heatIndex:'N/A'}
        </p>
      </div>

      <hr className='hr-container'></hr>
        <div className='condition'>
          {conditions}
        </div>
      
    </div>
  )
}

export default WeatherCard