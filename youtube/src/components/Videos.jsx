import React from 'react'
import "./youtube.css"
import Cards from './Cards'
import Iqram from './Iqram'
import Navs from './Navs'

const Videos = () => {
  return (
    <div className='VideoSideContainer'>
      <div className='nabila'>
         <Navs />
      </div>
      <div className="iqram">
          <Cards/>
      </div>

    <div className="iqram">
      <Iqram/>
      </div> 
       
        </div>
  )
}

export default Videos