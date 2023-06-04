//Leaflet.js only allows if its useContext (how it works with React), 
//to work in a <MapContainer/> descendant

//React Imports
import { useEffect, useMemo } from 'react'

//Leaflet Imports
import {Marker, Popup, useMap}from 'react-leaflet'
import icon from './icon'


export default function MarkerLocation(props){
    //Get position after "getInitialData" API call 
   // const position = [props.address.location.lat,props.address.location.lng]
 
    //ESLINT is giving a mild warning to use useMemo() to save positon into cache since it generates a anew per render
    //These two objects live separately in memory and are therefore not equal.

    const position = useMemo(()=> {
        return[props.address.location.lat,props.address.location.lng], [props.address.location.lat,props.address.location.lng]}, [props.address.location.lat,props.address.location.lng])

    //map from useMap() leaf component
    const map = useMap()

  //Useffect to move map screen location onSearch {leaflet.js}
  useEffect(()=>{
    map.flyTo(position, 13,{
      animate:true
    })
  }, [map, position])


    return(
        <>  
             <Marker icon={icon} position={position}>
                <Popup style={{ backgroundColor:'#67e8f9' }} >
                {props.address.location.region} ,{props.address.location.country}
                </Popup>
            </Marker>

        </>
    )
}