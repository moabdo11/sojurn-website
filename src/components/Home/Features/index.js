import React from 'react';
import SojurnPhones from '../../../assets/Images/sojurn_site.png';

import AppStore from '../../../assets/Images/download-on-the-app-store-apple 1.png';
import Google from '../../../assets/Images/google-play-badge 1.svg';


import '../home.scss'

const HomeFeatures = () => (
    <div className="grid home-features ">
        <div className="store-icons">
            <img src={AppStore} alt="app store" />
            <img src={Google} alt="google play" />   
        </div>
    <img src={SojurnPhones} alt="phone screens" />
    <section className="round_animate_wrap">
        <div className="round_animate">
            <div className="shape_1">
                <span className="r_1"></span>
                <span className="r_2"></span>
                <span className="r_3"></span>
                <span className="r_4"></span>
            </div>
            <div className="shape_2">
                <span className="r_1"></span>
                <span className="r_2"></span>
                <span className="r_3"></span>
                <span className="r_4"></span>
            </div>
            <div className="shape_3">
                <span className="r_1"></span>
                <span className="r_2"></span>
                <span className="r_3"></span>
                <span className="r_4"></span>
            </div>
        </div>
    </section>
    </div>
   
)

export default HomeFeatures;