import React from 'react'


const Sidebar = () => {
  return (
    <div>
       <div>
       <div className="sidebarwrapper">
          <p className='sidenavs'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='home' fill="rgba(255,255,255,1)"><path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM13 19H18V9.15745L12 3.7029L6 9.15745V19H11V13H13V19Z"></path></svg>
           <>Home</>
          </p>
        <p className='sidenavs'>
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"  fill="rgba(255,255,255,1)" className='home' height="24" viewBox="0 0 24 24" width="24"><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"/></svg>
        <>Short</>
        </p>
        <p className='sidenavs'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"  fill="rgba(255,255,255,1)" className='home' width="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1c4.96 0 9 4.04 9 9 0 1.42-.34 2.76-.93 3.96-1.53-1.72-3.98-2.89-7.38-3.03A3.996 3.996 0 0016 9c0-2.21-1.79-4-4-4S8 6.79 8 9c0 1.97 1.43 3.6 3.31 3.93-3.4.14-5.85 1.31-7.38 3.03C3.34 14.76 3 13.42 3 12c0-4.96 4.04-9 9-9zM9 9c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 12c-3.16 0-5.94-1.64-7.55-4.12C6.01 14.93 8.61 13.9 12 13.9c3.39 0 5.99 1.03 7.55 2.98C17.94 19.36 15.16 21 12 21z"/></svg>
        <>Profile</>
        </p>
        <p className='sidenavs'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"   fill="rgba(255,255,255,1)" className='home' width="24"><path d="M18 18v2H6v-2h12zm-.6-6.3L16 10.3l-3 2.9V4h-2v9.2l-3-2.9-1.4 1.4 5.4 5.4 5.4-5.4z"/></svg>
        <>Shorts</>

        </p>
        </div>
    </div>
    </div>
  )
}

export default Sidebar