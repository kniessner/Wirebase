import $ from 'jquery'
import React, {Component} from 'react';
import io from 'socket.io-client';

//const socket = io('http://wiresense.herokuapp.com/');
const socket = io('http://localhost:3030/');
var connection_socket = false;

function socket_init(socket) {
  socket.on('connect', () => {
//  connection_socket = true;
  socket.emit('register', socket.id);
  socket.emit('message', {
    'from': window.location.hostname,
    'id': socket.id,
    'msg': 'sending a message'
  });


  socket.on('ping', function(data){
    console.log(data.message);
    socket.emit('ping', {
      client: client.id,
      message: i++
    });
  });

  console.log(socket.id);
});

socket.on('disconnect', function() {
  connection_socket = false;
  console.log('Disconnected!');
});
}
/**
 * [socket_inbox description]
 * @param  {[type]} slot [description]
 * @return {[type]}      [description]
 */
function socket_inbox(slot) {
  socket.on(slot, function(data) {
    console.log(slot, data);
    return data;
  });
}
function socket_in_ping() {
  socket.on('ping', function(data) {
    console.log('ping', data);
    var i = 0;
    setInterval(function() {
      socket.emit('ping', {
        client: client.id,
        message: i++
      });
    }, 1000);

  });
}
export {socket_inbox, socket_init, socket_in_ping, connection_socket, socket, io};

/*

  socket.on('news', function (data) {
    console.log('News' ,data);
  });



  socket.on('wire', function (data) {
    console.log('Wire ', data);
   });

  socket.on('connected_server', function (data) {
    console.log('Connected_server', data);
  });

  socket.on('connected_clients', function (data) {
    console.log('Connected_clients ', data);
  });

  socket.on('c2c_wire', function (data) {
    console.log(data);
  });
*/
/*
export class SocketButton {
  render() {
    <div>
      Button
    </div>
  }
};
export function emit_socket_actions(){
  //let socket = io('http://localhost:3030/');
}
export function sendServer(e) {
  e.preventDefault();
  socket.emit('message', { title: 'hello' });
}

export function sendMessage(e) {
  e.preventDefault();
  socket.emit('message', {title: 'my host', msg: window.location.hostname});
}

export function serverCMD(e){
  e.preventDefault();
  socket.emit('log', 'client.server.eio' );
}
export function serverExec(e){
  e.preventDefault();
  socket.emit('exec', 'client.server' );
}
*/
