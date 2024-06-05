
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navber/Navbar'
import Recipes from './Components/Recipes/Recipes'

function App() {
  

  return (
    <>
     <div className='bg-slate-200 m-4'>
         <h1 className='text-3xl text-center'> React</h1>
         <Navbar ></Navbar>
         <Banner></Banner>
         <Recipes></Recipes>
     </div>
      
   
     
    </>
  )
}

export default App
