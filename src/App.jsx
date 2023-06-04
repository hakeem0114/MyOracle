//Css Imports
import './App.css'

//Image Imports
import searchArrow from './assets/images/icon-arrow.svg'
import backGround from './assets/images/pattern-bg-desktop.png'

//Leaflet Imports
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MarkerLocation from './MarkerLocation'



//React Imports
import { useState,useEffect } from 'react'

//console.log('test')
//const apiKey = import.meta.env.VITE_API_KEY
//const apiKey = 

function App() {

  //States
  const [address, setAddress] = useState(null)
  const [ipAddress, setIpAddress] = useState('')


  //Initial API call from geo IPIFY
  useEffect(()=>{
    try{
      const getInitialData = async ()=>{
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_wZjnR34rIco5CG811TnOtstknoZYX&ipAddress=8.8.8.8&domain=google.com`)
      
        const jsonData = await res.json();
        
        //Update states
        setAddress(jsonData);

        //console.log(jsonData)
      }

      //Call API
      getInitialData()

    }catch(err){
      console.log(err)
    }
  },[])


    
    // function validateIPaddress(ipAddress) {  
    //   if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {  
    //     return true
    //   }else{return false}
    // }  


    // function validateDomain(ipAddress){
    //   if(/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(ipAddress)){
    //     return true
    //   }else{return false}
    // }

    //Regex IP & domain validation
    const validateIPaddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
    const validateDomain =    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/
  
        
  //User API call (onSubmit)
  const handleUserAddress = async ()=>{

    //Validate user's IP address & domain before using
    // const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_wZjnR34rIco5CG811TnOtstknoZYX&ipAddress=${validateIPaddress?`{ipAddress}`:`${validateDomain}`?`${ipAddress}`:''}`)

    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_wZjnR34rIco5CG811TnOtstknoZYX&${
      validateIPaddress.test(ipAddress)
        ? `ipAddress=${ipAddress}`
        : validateDomain.test(ipAddress)
        ? `domain=${ipAddress}` 
        : ""
    }`)

    const userAddress = await res.json()

    //Update userAddress
    setAddress(userAddress)
  }

  //Handle user submission data
  const handleSubmit  = (e)=>{
    e.preventDefault() //stop default submission till explicitly handled

   //console.log(ipAddress)
   handleUserAddress()
   //console.log(ipAddress)
 
   //Reset IP Address
    setIpAddress('')

  }


  return (
    <>
      <section>
        <div className='absolute -z-20 ' >
            <img 
              src={backGround} 
              alt="backGround Image" 
              className=' object-cover w-screen h-96 -lg:mt-44  md:h-96 sm:h-96 sm:-mb-60  '
          />
        </div>

          <article className='p-8' >
              <h1  className='text-5xl text-center text-white font-bolder mb-8 ' >
                      My Oracle
              </h1>
              

              <form onSubmit={handleSubmit} className='flex justify-center max-w-xl mx-auto  sm:max-xl ' >
                    
                    <input 
                      className='w-full px-6 py-2  rounded-l-xl '

                      type="text" 
                      name='ipAddress' 
                      id ='ipAddress' 
                      placeholder='Query for IP address'
                      value={ipAddress}
                      onChange={(e)=>setIpAddress(e.target.value)}
                      required
                    />

                    <button type='submit' className=' bg-black  hover:opacity-50 px-6 py-3.5 rounded-r-xl' >
                      <img src={searchArrow} alt="search arrow" />
                    </button>
              </form>
          </article>

          {address &&
            <>  
                        <article className=' text-center bg-white rounded-xl shadow p-8 mx-20 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl text-left lg:grid-cols-4 max-w-6xl mx-10 lg:mx-auto -mb-20' >
                              <div className='lg:border-r  shadow-stone-400 lg:border-stone-600 shadow-stone-300'>
                                  <h2 className='text-sm uppercase font-bold text-neutral-500 tracking-wider mb-3'
                                  >Ip Address</h2>

                                  <p  className='font-medium text-stone-900 text-lg -mx-2 md:text-xl xl:text-2xl'  
                                  >{address.ip}</p>
                              </div>
                              <div className='lg:border-r  lg:border-stone-600'>
                                  <h2 className='text-sm uppercase font-bold text-neutral-500 tracking-wider mb-3'
                                  >Location</h2>

                                  <p  className='font-medium text-stone-900 text-lg  md:text-xl xl:text-2xl'  
                                  >{address.location.region} ,{address.location.country}</p>
                              </div>
                              <div className='lg:border-r  lg:border-stone-600'>
                                  <h2 className='text-sm uppercase font-bold text-neutral-500 tracking-wider mb-3'
                                  >Timezone</h2>

                                  <p  className='font-medium text-stone-900 text-lg  md:text-xl xl:text-2xl'  
                                  >UTC {address.location.timezone}</p>
                              </div>
                              <div className=''>
                                  <h2 className='text-sm uppercase font-bold text-neutral-500 tracking-wider mb-3'
                                  >ISP</h2>

                                  <p  className='font-medium text-stone-900 text-lg  md:text-xl xl:text-2xl'  
                                  >{address.isp}</p>
                              </div>
                          </article>

                          <MapContainer 
                            center={[address.location.lat,address.location.lng]} 
                            zoom={13} 
                            scrollWheelZoom={true}
                            style={{ width: "100%" , height: "90%" }}
                            className='lg: absolute -z-20 -mt-32  '
                          >
                            <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                              <MarkerLocation
                                address = {address}
                              />
                          </MapContainer>
            </>
          
          
          }


      </section>
    </>
  )
}

export default App
