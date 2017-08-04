import React, { Component } from 'react';
import {Motion, spring, StaggeredMotion} from 'react-motion';




class Motion_Grid extends React.Component {
  render() {

    return (
      <div>
        <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
          {interpolatingStyle => <div style={interpolatingStyle} />}
        </Motion>
    
        <StaggeredMotion
          defaultStyles={[{h: 0}, {h: 0}, {h: 0}]}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0
              ? {h: spring(100)}
              : {h: spring(prevInterpolatedStyles[i - 1].h)}
          })}>
          {interpolatingStyles =>
            <div>
              {interpolatingStyles.map((style, i) =>
                <div key={i} style={{border: '1px solid', height: style.h}} />)
              }
            </div>
          }
        </StaggeredMotion>
      </div>


    )
  }
};

export default Motion_Grid;
