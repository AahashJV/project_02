import React, { useEffect, useRef, useState } from 'react'
import './LayoutPage.css'
import { useGesture } from '@use-gesture/react'
import { Link } from 'react-router-dom'


export const LayoutPage = () => {


    const [showPinch, setShowPinch] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
          setShowPinch(false);
        }, 2000); // 5000 milliseconds = 5 seconds
        // Clear the timer to avoid memory leaks
        return () => clearTimeout(timer);
      }, []);
    
    const [crop,setCrop] = useState({x:0,y:0, scale:1})
    const imageRef = useRef()
    useGesture({
        onDrag: ({offset: [dx,dy] })=>{
            setCrop((crop)=>({...crop, x:dx, y:dy}))
        },
        onPinch:({offset: [d]})=>{
            setCrop((crop)=>({...crop, scale:d}))
        },
    },{
        target: imageRef,
        eventOptions:{passive: false},
    })
  return (
    <div className="Home">
        <Link  to='/project_02/' >
            <span className='back-button-container-LP'>
                <img src="./UI_Elements/CloseButton.png" className='back-button-LP' alt="Back Button" />
            </span>
        </Link>
            {/* INNER FRAME (WHITE-FRAME) */}

        <div className='Inner-frame-lo'>
            <img src="./UI_Elements/BG_Buildings.png" alt="Layout" className="layout-image" />

            {/* ALL LOGOS AND TEXT */}
            
            {showPinch && <div  className='pinch-logo-container'>
                <img src="./UI_Elements/pinch.png" alt="Layout" className="pinch-logo-LO" />
            </div>}
            <img src="./UI_Elements/Incridible_India_Logo.png" alt="Layout" className="II-logo-LO" />
            <img src="./UI_Elements/colors-of-india-Logo.png" alt="Layout" className="COI-logo-LO" />
            <div className="LO-Text" >Layout</div>

            {/* MAP CONTAINER */}

            <div className='map-container' > 
                <img 
                    ref={imageRef} 
                    src="./UI_Elements/Layout_map.png" 
                    alt="Layout" 
                    style={{
                        left:crop.x,
                        top:crop.y,
                        transform: `scale(${crop.scale})`
                    }} 
                    className="map-img" 
                />

            </div>
        </div>
    </div>
  )
}
