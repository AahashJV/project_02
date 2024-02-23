import React from 'react';
import './Home.css'; // assuming you have your CSS file
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className="Home">

            {/* INNER FRAME (WHITE-FRAME) */}

            <div className='Inner-frame'>
                <img src="./UI_Elements/BG_Buildings.png" alt="Layout" className="layout-image" />
                <div className='UI-container' >  

                    {/* LAYOUT_ICON */}

                    <div className='Layout-Icon-container'>
                        <Link to='/project_02/Layout' >
                            <img src="./UI_Elements/Layout_Icon.png" alt="Layout" className="Layout-Icon" />
                        </Link>
                    </div>
                    
                    {/* Incridible_India_Logo */}

                    <div className='II-Logo-container'>
                        <img src="./UI_Elements/Incridible_India_Logo.png" alt="Layout" className="II-logo" />
                    </div>

                    {/* EXHIBITION_ICON */}

                    <div className='Exhibitor-list-container'>
                        <Link to='/project_02/Exhibitor' >
                            <img src="./UI_Elements/Exhibitor_list.png" alt="Layout" className="Exhibitor-list" />
                        </Link>
                    </div>        
                </div>
            </div>

            {/* LOGOs AT THE BOTTOM */}

            <div className="COI-logo-container" >
                <img src="./UI_Elements/colors-of-india-Logo.png" alt="Layout" className="COI-logo" />
            </div>
            <div className="Rightman-container" >
                <img src="./UI_Elements/Right_Man.png" alt="Layout" className="Rightman" />
            </div>
            <div className="Leftman-container" >
                <img src="./UI_Elements/Left_Man.png" alt="Layout" className="Leftman" />
            </div>
        </div>
        );
}