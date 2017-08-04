import './messenger.scss';

import React, { Component } from 'react';
import {Grid, FlexCol} from 'pui-react-flex-grids';
import {Input} from 'pui-react-inputs';
import {Panel} from 'pui-react-panels';
import {Divider} from 'pui-react-dividers';
import {ExpanderContent} from 'pui-react-expander';

function Item_Collection(props) {
  //console.log(props);
      return (
        <li className="list_content collection">
          {
            Object.keys(props.data).map(function(item,i){
                console.log('list:',item+ " "+props.data[item]+ " "+i);
                return (
                    <p key={i}>
                    <b>{item}: </b>{props.data[item]}
                    </p>
                );
              })
          }
        </li>
      );
}
function Item_Error(props) {
  return <li className="list_content error">{props.data} </li>;
}

function Item_List(props) {
  return (
    <li className="list_content collection">
      {
        Object.keys(props.data).map(function(item){
          if(props.data[item]){
            return (
                <p key={item}>
                  {props.data[item]}
                </p>
            );
          }
        })
      }
    </li>
  );
}
function Item_Message(props) {
  return <li className="list_content message">{props.data} </li>;
}
function Action_Buttons(props) {
  return <li className="list_content message">{props.data} </li>;
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div id="Home" >
        <h1>
            Form
        </h1>
      </div>
    )
  }
};


class Commander extends React.Component {
constructor(props) {
  super(props);
    this.state = {
      input: '',
      connection: false,
      output: '',
      messages: [],
      expanded: false

    }
    this.getClientHeader = this.getClientHeader.bind(this)

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this._handleMessageEvent = this._handleMessageEvent.bind(this)
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log(this.props.socket);
    this.props.socket.on('connect', () => {
      this.setState({
        connection: true
      });
      //this.props.socket.emit('sys', 'client');
    });
    this._handleMessageEvent();
  }

  _handleMessageEvent(){
        this.props.socket.on('display', (inboundMessage) => {
        var allMessages = this.state.messages;
        allMessages.push(inboundMessage);
          this.setState({
            messages: allMessages
          });
      });
  }

  getClientHeader = (e) => {
    e.preventDefault();
    console.log('clicked');
    this.props.socket.emit('sys', 'client');
    }

    handleOnChange = (e) => {
      e.preventDefault();
      this.setState({input: e.target.value});
    }

    handleOnSubmit = (e) => {
      e.preventDefault();
      var form = e.target;
      var content = form.elements['content'].value;
      var allMessages = this.state.messages;
        allMessages.push({type:'string', name:'self', data: content});
          this.setState({
            messages: allMessages
          });

      this.props.socket.emit('exec', content);
      this.setState({input: ''});
    }

  render() {
    console.log(this.state.messages);
    return (
      <div id="commander" >

          <Panel className="header bg-neutral-11 box-shadow-1"
          header="Commander"
          subtitle="Execute Shell Commands"
          actions={<div><button className="btn btn-default mrl" onClick={() => this.setState({expanded: !this.state.expanded})}>Go</button></div>}>
          <button onClick={this.getClientHeader} className="btn btn-sm btn-default" type="button" aria-label="button"> Client Header</button>
          </Panel>
          <ExpanderContent expanded={this.state.expanded}
                         onEntered={() => console.log('onEntered')}
                         onExited={() => console.log('onExited')}>
                         <Panel className="body bg-neutral-11">
                           <form onSubmit={this.handleOnSubmit}>
                             <Input search
                               name='content'
                               value={this.state.input}
                               onChange={this.handleOnChange}
                                label="Run CMD"
                                placeholder="GET SERVERINFOS" />
                             <input className="btn btn-default-alt" type="submit" value="Submit"/>
                           </form>

                            <ul className="stream">
                              {this.state.messages.reverse().map(function(object, i) {
                                 console.log(object.name,object);
                                 switch(object.name) {
                                     case 'client_header':
                                         return <Item_Collection data={object.data} key={i}/>;
                                         break;
                                     case 'error':
                                         return <Item_Error data={object.data} key={i}/>;
                                         break;
                                     case 'message':
                                         return <Item_Message data={object.data} key={i}/>;
                                         break;
                                     case 'self':
                                         return <Item_Message data={object.data} key={i}/>;
                                         break;
                                     default:
                                         return <Item_List data={object.data} key={i}/>;
                                         break;
                                 }
                              })}
                            </ul>
                          </Panel>
        </ExpanderContent>

      </div>
    )
  }
};



export default Commander;
