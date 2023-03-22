import React from 'react'
import './component.css'

export default function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='footer'>
            <div className='hero-footer-holder'>
            <p className='hero-footer'>
                <span>MovieMate</span>, let you choose<br/>
                The <span>Best</span> from the rest
            </p>
            <p className='footer-info'>
                we are currently providing Movie services.
            </p>
            </div>
            <div className='foot-to-con'>
                <p className='to-con'>
                    More Features are no the Way!
                </p>
                <p className='copyrights'>©MovieMate | Data provided by @The Movie Database </p>
            </div>
        </div>
    </div>
  )
}
