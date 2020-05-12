import React from 'react';
// import {IPhoneX} from 'react-device-frames';
import Device from "react-device-frame";

import SojurnVideo from './SojurnVideo/SojurnVideo';

import './Video.scss'

const iPhoneX = () => (
    <div className="Video">
         {/* <IPhoneX 

            
            width="800"
            height="750" >
            <SojurnVideo />
          
        </IPhoneX> */}
      <Device name="iphone-x" color="gold">
          <SojurnVideo />
    </Device>;
        
    </div>
   
);

export default iPhoneX;


