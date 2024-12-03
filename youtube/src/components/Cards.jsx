import React from 'react';


const Cards = () => {
  const cardss = [
    {
      pfpp: "https://i.ytimg.com/vi/VGnOpZhsPk4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYciBUKDcwDw==&rs=AOn4CLCn4dPOoGnmRvF4hJE71KeFH8rxUA",
      name: "Ateez",
      description: "YouTube is an online video sharing platform owned by Google. YouTube was founded on February 14, 2005, by Steve Chen, Chad Hurley"
    },
    {
      name: "Ateez",
      pfpp: "https://i.ytimg.com/vi/VGnOpZhsPk4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYciBUKDcwDw==&rs=AOn4CLCn4dPOoGnmRvF4hJE71KeFH8rxUA",
      description: "YouTube is an online video sharing platform owned by Google. YouTube was founded on February 14, 2005, by Steve Chen, Chad Hurley"
    },
    {
      name: "Ateez",
      pfpp: "https://i.ytimg.com/vi/VGnOpZhsPk4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYciBUKDcwDw==&rs=AOn4CLCn4dPOoGnmRvF4hJE71KeFH8rxUA",
      description: "YouTube is an online video sharing platform owned by Google. YouTube was founded on February 14, 2005, by Steve Chen, Chad Hurley"
    },
    {
      name: "Ateez",
      pfpp: "https://i.ytimg.com/vi/VGnOpZhsPk4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYciBUKDcwDw==&rs=AOn4CLCn4dPOoGnmRvF4hJE71KeFH8rxUA",
      description: "YouTube is an online video sharing platform owned by Google. YouTube was founded on February 14, 2005, by Steve Chen, Chad Hurley"
    }
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
};

export default Cards;