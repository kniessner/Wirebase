import React from 'react';
import BG_Circle from './Animations/Background';
import Logo from '../assets/images/logo.svg';


class Home extends React.Component {
  render() {
    return (
      <div id="Home">
        <div className="head container">
          <div className="logo">
            {//<img  src={Logo} />
            }
            <object data={Logo} type="image/svg+xml">
              Ihr Browser kann leider kein svg darstellen!
            </object>
            </div>
            </div>
            <BG_Circle />


      </div>
    );
  }
}
export default Home;
