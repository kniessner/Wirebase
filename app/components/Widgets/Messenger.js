import './messenger.scss';

import React, {Component} from 'react';
import {Grid, FlexCol} from 'pui-react-flex-grids';
import {Input} from 'pui-react-inputs';
import {Panel} from 'pui-react-panels';
import {Divider} from 'pui-react-dividers';
import {ExpanderContent} from 'pui-react-expander';

function Item(props) {
  return <li className="list_content"><p>{props.data.from} : <b>{props.data.title}</b> -> {props.data.msg}</p></li>;
}

function Chat_Messages(props) {
  return (
    <div>
      {props.data.map(function(object, i) {
        return <Item data={object} key={i}/>;
      })}
    </div>
  );
}

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
      messages: [],
        expanded: false

    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this._handleMessageEvent = this._handleMessageEvent.bind(this)

  }

  componentWillMount() {
    var example = {   'from': 'you:'+ window.location.hostname,
                      'title': 'testing',
                      'msg': 'you are online'
                };
    var allMessages = this.state.messages;
    allMessages.push(example);
    this.setState({
      messages: allMessages
    });
  }

  componentDidMount() {
    this._handleMessageEvent()

  }

  _handleMessageEvent(){
    this.props.socket.on('message', (inboundMessage) => {
      var allMessages = this.state.messages;
      allMessages.push(inboundMessage);
        this.setState({
          messages: allMessages
        });
      })
  }

  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({input: e.target.value});
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    var form = e.target;
    var content = form.elements['content'].value;
    this.props.socket.emit('message', {
      'from': this.props.socket.id,
      'title': '-Y> '+window.location.hostname,
      'msg': content
    });
    this.setState({input: ''});
  }

  render() {
    return (
      <div id="messenger">

            <Panel className="header bg-neutral-11 box-shadow-1"
            header="Messanger"
            subtitle="Write with someone"
            actions={<div><button className="btn btn-default mrl" onClick={() => this.setState({expanded: !this.state.expanded})}>Go</button></div>}>
            Open Channel
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
                               label="Send a message"
                               placeholder="Say something" />
                            <input className="btn btn-default-alt" type="submit" value="Submit"/>
                          </form>
                          <ul className="stream">
                            {this.state.messages.map(function(object, i) {
                              return <Item data={object} key={i}/>;
                            })}
                          </ul>
                        </Panel>
            </ExpanderContent>
      </div>
    )
  }
};
export default Messenger;
