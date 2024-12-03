import React from 'react'

const Iqram = () => {
    const cardss = [
      {
        name: "Moonbug Kids",
        pfpp: "https://i.ytimg.com/vi/GzYCzJHJN1s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaFiNS25yQyAdSepqFhLTvMGtwjQ",
        description: "YouTube is an online video sharing platform owned by Google. YouTube was founded on February 14, 2005, by Steve Chen, Chad Hurley"
    },
    {
        name: "Open Label",
        pfpp: "https://i.ytimg.com/vi/pyYKZ3kra9w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZI_BEHSrTueggcQ5IvDymKJvVBQ",
        description: "YouTube is an online video sharing platform owned by Google. YouTube was founded on February 14, 2005, by Steve Chen, Chad Hurley"
    },
    {
        name: "Cocomelon",
        pfpp: "https://i.ytimg.com/vi/ea00uCGaEJs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeln8LnS-qiUMVFFCxJMtU6LUGng",
        description: "YouTube is an online video sharing platform owned by Google. YouTube was founded on February 14, 2005, by Steve Chen, Chad Hurley"
    },
    {
        name: "Open Label",
        pfpp: "https://i.ytimg.com/vi/pyYKZ3kra9w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZI_BEHSrTueggcQ5IvDymKJvVBQ",
        description: "YouTube is an online video sharing platform owned by Google. YouTube was founded on February 14, 2005, by Steve Chen, Chad Hurley"
    },
      ];
    
      return (
        <>
          {cardss.map((carde, index) => (
            <div key={index} className='cardcard'>
              <img src={carde.pfpp} alt="" className='img' id='image' />
              <div className='desiption'>
                <img src={carde.pfpp} alt="" className='pfpp' />
                <p>
                  <b>{carde.name}</b><br />{carde.description}
                </p>
              </div>
            </div>
          ))}
        </>
      );
}

export default Iqram