import React, { useEffect, useState } from 'react'
import './BackgroundLayout.css'
import { useStateContext } from '../Context/ind.js'
// import Sunny from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Clear from '../assets/images/Sunny.jpg'


const BackgroundLayout = () => {

  
  const {weather}=useStateContext()
  console.log(weather);
  const [image,setImage]=useState(Clear)
  
  useEffect(()=>{
    let imageString=weather.conditions
    if(imageString){
      if(imageString.toLowerCase().includes('clear')){
        setImage(Clear);
      }else if(imageString.toLowerCase().includes('cloud') || imageString.toLowerCase().includes('overcast')){
        setImage(Cloudy);
      }else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')){
        setImage(Rainy);
      }else if(imageString.toLowerCase().includes('snow')){
        setImage(Snow);
      }else if(imageString.toLowerCase().includes('fog')){
        setImage(Fog);
      }else if(imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')){
        setImage(Stormy);
      }
    }
    



  },[weather])

  return (
    <img src={image} alt="weather-image" className='background-image'></img>
  )
}

export default BackgroundLayout