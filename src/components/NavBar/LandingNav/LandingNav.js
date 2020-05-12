import React from 'react';


const LandingNav = props => {
   return (
      <ul className="right">
          <li onClick={props.openLogin}><a>Login</a></li>
      </ul>
   );
};

export default LandingNav;