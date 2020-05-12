import React from 'react';
import { NavLink } from 'react-router-dom';


import './MenuItem.scss'

const MenuItem = ({ title, subTitle, number, linkUrl, size, history, match }) => (
    <div className="box">
        <div className="content">
            <h2>{number}</h2>
            <h3>{title}</h3>
            {/* <p>{title}</p> */}
            <NavLink to={linkUrl}>Read More</NavLink>
        </div>  
    </div>
);

export default MenuItem;