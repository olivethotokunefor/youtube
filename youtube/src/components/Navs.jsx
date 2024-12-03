import React from 'react'

const Navs = () => {
    const textes = [
        { name: "All" },
        { name: "Feature" },
        { name: "Gmmtv" },
        { name: "Music" },
        { name: "Straykids" },
        { name: "Mixes" },
        { name: "Live" },
        { name: "LCDSs" },
        { name: "Power Tool" },
        { name: "Cameras" },
        { name: "Automobile Repair" },
        { name: "Shops" },
        { name: "AirSoft" },
        { name: "Comic Books" },
        { name: "Basketball" },
        { name: "Basketball" }
      ];
  return (
    




  
    <>
      {textes.map((text, index) => (
        <div key={index} className='Headersssconta'>
            {/* <div className="kk"> */}
          <div className='devil'><b>{text.name}</b></div>
          </div>
        // </div>
      ))}
    </>
  



    
  )
}

export default Navs