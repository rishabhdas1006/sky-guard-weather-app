import { useContext,createContext,useState,useEffect } from "react";
import axios from 'axios'
const StateContext=createContext()

export const StateContextProvider = ({children}) => {
    const [weather,setWeather]=useState({});

    const [values,setValues]=useState([]);

    const [place,setPlace]=useState("New Delhi")
    const [thisLocation,setLocation]=useState("")

    const fetchWeather = async ()=>{
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key': 'ac0720c9c1mshee3090a3942379dp107189jsn58963e995380',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }

        try {
            const response = await axios.request(options);
            const thisData = await Object.values(response.data.locations)[0]
            
            setLocation(thisData.address)
            console.log("Location")
            console.log(thisData.address)
            console.log(thisLocation)
            setValues(thisData.values)
            setWeather(thisData.values[0])
            
        } catch (e) {
            console.error(e);
            alert('Sorry , We are unable to find this city')
        }
    }

    useEffect(()=>{
        fetchWeather()
        
    },[place])

    useEffect(()=>{
        console.log(values)
    },[values])
    

    return(
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation
            
        }}>
            {children}
        </StateContext.Provider>
    )
    
}


export const useStateContext=()=> useContext(StateContext)

