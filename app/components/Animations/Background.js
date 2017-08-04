import  './background.scss';
//import  './effects.scss';
import React from 'react';
/*
    Grafics
 */
import Group from '../../assets/images/Group.png';
import Circle_4 from '../../assets/images/circle_4.svg';
import Circle_red from '../../assets/images/circle_red.svg';
import Circle_dark from '../../assets/images/circle_dark.svg';

class BG_Circle extends React.Component {
  render() {
    return (
      <div id="background">
        <img className="bg_element full s_x2 reverse rotate round" src={Circle_red} />
        <img className="bg_element full s_x2 rotate round" src={Circle_dark} />
        //<img className="bg_element large s_x3 rotate reverse" src={Circle_4} />
      </div>
    );
  }
}
export default BG_Circle;
