import React from 'react';
import {Link} from 'react-router-dom';
import Routes from '../routes';
import Footer from './Footer';
import Navbar_Top from './Nav/Navbar_Top';



import {wp, getPosts, getPages} from '../redux/actions/wpActions.js'

class MediaLibary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      mediaFiles: []
    }
  }
  componentWillMount() {
    this._loadMedia();

  }

  _loadMedia(){
    const that = this;
    wp.media().perPage(20).get(function(err, data) {
      if (err) {
        // handle err
      }
      that.setState({mediaFiles: data});
      return data;
    });

  }


  render() {
    console.log(this.state.mediaFiles);
    return (
      <div>
        <h1>MediaLibary</h1>

      </div>
    );
  }
}

export default MediaLibary;
