import React from 'react'
import "./components/youtube.css"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Videos from './components/Videos'

const App = () => {
  return (
    <div>

  
      <Header/>
     <div className='bodycontainerside'>
      <div className="leftside">
      <Sidebar/>
      </div>
      <div className="rightside">
         < Videos />
      </div>
     </div>
    </div>
  )
}





export default App