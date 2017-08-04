import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import {navbarTop, menu_link} from './navbarTop.scss';

class Navbar_Top extends React.Component {
  render() {
    return (
      <nav className='navbarTop'>
        <button><Link className='menu_link'  to="/">Examples</Link></button>

        {this.props.pages ? this.props.pages.map(function(object, i) {
                            return <button key={i}><Link className={menu_link} to={object.slug} > {object.title.rendered} </Link> </button>;
                          }) : 'no sites found'}
      </nav>
    );
  }
}


Navbar_Top.propTypes = {
  pages: PropTypes.array.isRequired,
};


export default Navbar_Top;
