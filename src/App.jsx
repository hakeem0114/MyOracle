//Css Imports
import './App.css'

//Image Imports
import searchArrow from './assets/images/icon-arrow.svg'
import backGround from './assets/images/pattern-bg-desktop.png'


function App() {


  return (
    <>
      <section>
        <div className='absolute -z-20' >
            <img 
              src={backGround} 
              alt="backGround Image" 
              className=' object-cover w-screen h-60'
          />
        </div>

          <box className='p-8' >
              <h1  className='text-5xl text-center text-white font-bolder mb-8' >
                      My Oracle
              </h1>
              

              <form action="#" className='flex justify-center max-w-xl mx-auto ' >
                    
                    <input 
                      className='w-full px-6 py-2  rounded-l-xl'

                      type="text" 
                      name='ipAdress' 
                      id ='ipAdress' 
                      placeholder='Query for IP address'
                      required
                    />

                    <button type='submit' className=' bg-black  hover:opacity-50 px-6 py-3.5 rounded-r-xl' >
                      <img src={searchArrow} alt="search arrow" />
                    </button>
              </form>
          </box>

          <box className='bg-white rounded-xl shadow p-8 m-12 flex justify-center gap-5 ' >
              <div className='lg:border-r-l '>
                  <h3>Ip Address </h3>
                  <h2>192.23.174.101</h2>
              </div>
              <div>
                  <h3>Ip Address </h3>
                  <h2>192.23.174.101</h2>
              </div>
              <div>
                  <h3>Ip Address </h3>
                  <h2>192.23.174.101</h2>
              </div>
              <div>
                  <h3>Ip Address </h3>
                  <h2>192.23.174.101</h2>
              </div>
          </box>



      </section>
    </>
  )
}

export default App
