import React from 'react';
import './AppDownload.css';
import {assets} from '../../assets/assets';

export function AppDownload() {
  return (
    <div className='app-download'>
        <p>For Better Experience Download <br /> Cravvings App</p>
         <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
         </div>
    </div>
  )
}
