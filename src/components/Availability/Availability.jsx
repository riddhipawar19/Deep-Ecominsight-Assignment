import React from 'react'
import './Availability.css'
import {PiMicrophoneFill} from 'react-icons/pi'
import {HiOutlineViewGrid} from 'react-icons/hi'
import {FaLocationArrow} from 'react-icons/fa6'



function Availability() {
  return (
    <section className="container">
        <div className="outer-header">
            <div className="flex-center header">
                <div className="flex-center header-left">
                   <span className="primary-text">See my availability: today</span>
                </div>
                <PiMicrophoneFill className="icons" />
            </div>
            <hr></hr>
        </div>
        
        {/* heading of content section */}

        <div className="flex-col-start paddings content">
          <span className="primary-text" style={{fontSize: 30}}>Available until 1 PM</span>

          {/* subcontent section */}
          
          <div className="sub-content">
            <span>Would you like to create an event for <br/>
            Coffee with Marisa at 11 AM?
            </span>
          </div>

          {/* schedule section */}
          <div className="schedule">
            <div className="flex-col-start outer-div">
               <div className="meet flex-start">
                <span>11 AM</span>
                <div className="flex-start active-meet">
                    <span style={{fontWeight: 600}}>Coffee with Marisa</span>
                    <span className="secondary-text">Philz Cafe</span>
                </div>
               </div>

               <div className="meet flex-start">
                <span>1 PM</span>
                <div className="flex-start meet-details">
                    <span style={{fontWeight: 600}}>Meeting with Danny Trinh</span>
                    <span className="secondary-text">Philz Cafe</span>
                </div>
               </div>
            </div>
          </div>

          {/* options section */}

          <div className="flex-start options">
            <span>Create Event</span>
            <span>Edit Event</span>
            <span>Full Calendar</span>
            <p style={{fontSize:15}}>Dismiss</p>
          </div>
          
          <div className="flex-start">
            <HiOutlineViewGrid className="icons"/>
            <span className="secondary-text" style={{fontSize:15}}>More actions</span>
          </div>

        </div>
    </section>
  )
}

export default Availability