import React, {Component} from 'react';
import {Label} from 'pui-react-labels';

class Info_Bar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        mounted:false,
        id:'',
        connected:false,
        port: ''
      }
  }
  componentWillMount() {
    this.props.socket.on('connect', () => {
      this.setState({
        id: this.props.socket.id,
        connected: this.props.socket.connected,
        port: this.props.socket.io.engine.port
      });
    });
  }
  render() {
    return (
      <div id="info_bar">
        <span  className="data_wrap">
          <h5>
          Host: <Label>{window.location.hostname}</Label>
          </h5>
        </span>

        <span className="data_wrap">
          <h5>
          Port: <Label>{this.state.port} </Label>
          </h5>
        </span>
        <span className="data_wrap">
          <h5>
          ID: <Label>#{this.state.id}</Label>
          </h5>
        </span>
        <span className="data_wrap">
          <h5>
          <Label>{this.state.connected ? 'connected' : 'disconnected'}</Label>
          </h5>
        </span>
      </div>
    )
  }
};
export default Info_Bar;
