import React from 'react'
import './Location.css'
import {PiMicrophoneFill} from 'react-icons/pi'
import {HiOutlineViewGrid} from 'react-icons/hi'
import {FaLocationDot} from 'react-icons/fa6'
import {FaLocationArrow} from 'react-icons/fa'

// const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function Location() {

  return (
    <section className="container coffee-warpper">
        <div className="outer-header">
            <div className="flex-center header">
                <div className="flex-center header-left">
                   <FaLocationDot/>
                   <span className="primary-text">Philz Coffee</span>
                   <span className="secondary-text"> . Location</span>
                </div>
                <PiMicrophoneFill className="icons" />
            </div>
            <hr></hr>
        </div>
        
        <div className="map-image">
        <img src="https://codigogenesis.com/genesis/2021/05/Mapa-Google-Maps-creado-ACF-por-defecto.jpg"></img>
        </div>

        
        {/* heading of content section */}

        <div className="flex-col-start paddings content">
          <span className="primary-text" style={{fontSize: 30}}>Philz Coffee</span>
          <span>Custom-blended java in a casual setting.</span>
          <span className="secondary-text">
            20686 Stevens Creek Blvd<br/>
            Cupertino, CA 95014
          </span>

          {/* options section */}

          <div className="flex-start options">
            <div className="flex-col-end">
                <div className="flex-start">
                    <FaLocationArrow size={14}/>
                    <span>Get directions</span>
                </div>
                <span style={{fontSize: 10, paddingLeft: 32}}>Requires your location</span>
            </div>
            <span>See details</span>
            <span>Find more cafes nearby</span>
          </div>
          
          <div className="flex-start">
            <HiOutlineViewGrid className="icons"/>
            <span className="secondary-text" style={{fontSize:15}}>More actions</span>
          </div>

        </div>
    </section>
  )
}

export default Location