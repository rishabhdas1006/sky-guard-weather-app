import React, { useState ,useEffect } from 'react'
import './MiniCard.css'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

const MiniCard = ({time,temp,iconString}) => {
  const [icon,setIcon]=useState()

  useEffect(()=>{
    if(iconString){
      if(iconString.toLowerCase().includes('cloud') || iconString.toLowerCase().includes('overcast')){
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
    <div className='glassCard card-wrapper' >
      <p className='date-container'>{new Date(time).toLocaleTimeString('en',{weekday:'long'}).split(" ")[0]}</p>

      <hr></hr>
      <div className='image-container'>
        <img src={icon} alt='weather' className='image'></img>
      </div>
      <p className='text-container'>
        {temp }&deg;C
      </p>
    </div>
    
  )
}

export default MiniCard