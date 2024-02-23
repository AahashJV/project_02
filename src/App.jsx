import { useRef } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { Outlet } from 'react-router-dom'





function App() {
  const divRef = useRef()


  const enterFullscreen = () => {
    const elem = divRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      elem.webkitRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  return (
    <>
      <div ref={divRef} className='app-div' >
        <img src='./UI_Elements/fullscreenicon.png' className="fullscreen-img" onClick={handleFullscreen} />
        <Outlet/>
      </div>
    </>
  )
}

export default App
