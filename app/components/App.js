import React from 'react';
import {Link} from 'react-router-dom';
import Routes from '../routes';
import Footer from './Footer';
import Navbar_Top from './Nav/Navbar_Top';


import {wp, getPosts, getPages} from '../redux/actions/wpActions.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      pages: [],
      posts:[]
    }
  }
  componentWillMount() {

    this._loadPosts();
    this._loadPages();
  }

  _loadPages(){
    const that = this;
    wp.pages().perPage(20).get(function(err, data) {
      if (err) {
        // handle err
      }
      that.setState({pages: data});
      return data;
    });

  }
  _loadPosts(){
    const that = this;
    wp.posts().get(function(err, data) {
      if (err) {
        // handle err
      }
      if(data){
        console.log('posts',data);
        that.setState({posts: data});
      }

      return data;
    });

  }


  render() {
    return (
      <div>
{
//        <Navbar_Top pages={this.state.pages}/>
        }
        {Routes}
{
    //    <Footer/>
      }
      </div>
    );
  }
}

export default App;
