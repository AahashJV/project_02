import React, { useEffect, useState } from 'react';
import './ExhibitorPage.css';
import './popup.css';
import ExhibitorList from '../details/Exhibitor_list.json';
import { Link } from 'react-router-dom';


export const ExhibitorPage = () => {
    
    const [selectedExhibitor, setSelectedExhibitor] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = (exhibitor) => {
        setSelectedExhibitor(exhibitor);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setSelectedExhibitor(null);
        setIsPopupOpen(false);
    };


    const Popup = ({exhibitor, name, stall, mobile, email}) => {
        return (
            <>
                <div className='popup-container'>
                    <span className='close-button' onClick={closePopup}>
                        <img src="./UI_Elements/CloseButton.png" className='close-button' alt="Close Button" />
                    </span>
                    <img src="./UI_Elements/Incridible_India_Logo.png" alt="Layout" className="II-logo-EP" />
                    <h2 className='heading-EP'>Exhibitor</h2>
                    <div className='popup-Red-container'>
                        <h3 className='Heading-Text'>{exhibitor}</h3>
                        <div className='Paragraphs'>
                            <p className='Para-Text'>NAME : {name}</p>
                            <p className='Para-Text'>CONTACT NO: {mobile}</p>
                            <p className='Para-Text'>EMAIL ID:{email}</p>
                        </div>
                        <h3 className='Heading-Text'> STALL NO: {stall}</h3>
                    </div>
                </div>
                <img src="./UI_Elements/colors-of-india-Logo.png" alt="Layout" className="COI-logo-EP" />
            </>
        );
    };

    const Buttons = ({exhibitor, name, stall, id, mobile, email}) => {
        return (
            <div className='button-card' key={id}>
                <div className='Values-card' onClick={() => openPopup({ exhibitor, name, stall, mobile, email })}>
                    <div className='red-card'>{exhibitor}</div>
                    <div className='purple-card'>Stall No: {stall}</div>
                </div>
                <img src="./UI_Elements/card_border.png" alt="Layout" className="border-card" onClick={closePopup} />
            </div>
        );
    };

    return (
        <div className='Home'>
            <Link  to='/project_02/' >
                <span className={`back-button-container-EP ${isPopupOpen ? 'blur-background' : ''}`} >
                        <img src="./UI_Elements/CloseButton.png" className='back-button-EP' alt="Back Button" />
                </span>
            </Link>
            <div className={`Inner-frame-EP ${isPopupOpen ? 'blur-background' : ''}`}>
                <img src="./UI_Elements/Incridible_India_Logo.png" alt="Layout" className="II-logo-EP" />
                <h2 className='heading-EP'>Exhibitor List</h2>
                <div className='buttons-container'>
                    {ExhibitorList.map((l) => (
                        <Buttons
                            key={l.id}
                            exhibitor={l.exhibitor}
                            name={l.name}
                            stall={l.stall}
                            mobile={l.mobile}
                            email={l.email}
                        />
                    ))}
                </div>
            </div>
            {selectedExhibitor && (
                <Popup
                    exhibitor={selectedExhibitor.exhibitor}
                    name={selectedExhibitor.name}
                    stall={selectedExhibitor.stall}
                    mobile={selectedExhibitor.mobile}
                    email={selectedExhibitor.email}
                />
            )}
        </div>
    );
};
