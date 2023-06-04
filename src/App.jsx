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

          <article className='p-8' >
              <h1  className='text-5xl text-center text-white font-bolder mb-8' >
                      My Oracle
              </h1>
              

              <form action="#" className='flex justify-center max-w-xl mx-auto  sm:max-xl' >
                    
                    <input 
                      className='w-full px-6 py-2  rounded-l-xl '

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
          </article>

          <article className=' text-center bg-white rounded-xl shadow p-8 mx-20 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl text-left lg:grid-cols-4 max-w-6xl mx-10 lg:mx-auto' >
              <div className='lg:border-r  shadow-stone-400 lg:border-stone-600 shadow-stone-300'>
                  <h2 className='text-sm uppercase font-bold text-neutral-500 tracking-wider mb-3'
                  >Ip Address</h2>

                  <p  className='font-medium text-stone-900 text-lg -mx-2 md:text-xl xl:text-2xl'  
                  >192.272.174.101</p>
              </div>
              <div className='lg:border-r  lg:border-stone-600'>
                  <h2 className='text-sm uppercase font-bold text-neutral-500 tracking-wider mb-3'
                  >Location</h2>

                  <p  className='font-medium text-stone-900 text-lg  md:text-xl xl:text-2xl'  
                  >Toronto, ON</p>
              </div>
              <div className='lg:border-r  lg:border-stone-600'>
                  <h2 className='text-sm uppercase font-bold text-neutral-500 tracking-wider mb-3'
                  >TimeZone</h2>

                  <p  className='font-medium text-stone-900 text-lg  md:text-xl xl:text-2xl'  
                  >EST</p>
              </div>
              <div className=''>
                  <h2 className='text-sm uppercase font-bold text-neutral-500 tracking-wider mb-3'
                  >ISP</h2>

                  <p  className='font-medium text-stone-900 text-lg  md:text-xl xl:text-2xl'  
                  >Canadian XTRX Sattelite</p>
              </div>
          </article>



      </section>
    </>
  )
}

export default App
