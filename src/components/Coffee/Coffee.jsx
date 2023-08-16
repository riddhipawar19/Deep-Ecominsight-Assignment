import React from 'react'
import './Coffee.css'
import {IoMdMail} from 'react-icons/io'
import {PiMicrophoneFill} from 'react-icons/pi'
import {HiOutlineViewGrid} from 'react-icons/hi'

function Coffee() {
  return (
    <section className="container coffee-warpper">
        <div className="outer-header">
            <div className="flex-center header">
                <div className="flex-center header-left">
                   <IoMdMail/>
                   <span className="primary-text">Coffee?</span>
                   <span className="secondary-text">Mail from Marisa Lu</span>
                </div>
                <PiMicrophoneFill className="icons" />
            </div>
            <hr></hr>
        </div>
        
        {/* heading of content section */}

        <div className="flex-col-start paddings content">
          <div className="flex-center title">
            <span style={{fontSize:22}}>Marisa Lu</span>
            <span className="secondary-text">Just Now</span>
          </div>
          <span className="primary-text" style={{fontSize: 30}}>Coffee?</span>

          {/* subcontent section */}
          
          <div className="flex-col-start sub-content">
            <span>Hey Jason,</span>
            <span>Was wondering if you'd be interested in meeting my team at 
            Philz Coffee at 11 AM today. No pressure if you can't make it,although I think you guys would really get along!
            </span>
            <span>Marisa</span>
          </div>

          {/* options section */}

          <div className="flex-start options">
            <span>Reply</span>
            <span>Forward</span>
            <span>Delete</span>
          </div>
          
          <div className="flex-start">
            <HiOutlineViewGrid className="icons"/>
            <span className="secondary-text" style={{fontSize:15}}>More actions</span>
          </div>

        </div>
    </section>
  )
}

export default Coffee