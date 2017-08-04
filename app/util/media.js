import React, { Component } from 'react';


export function hasUserMedia() {
   //check if the browser supports the WebRTC
   return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia);
}

export  class Camera_Test extends React.Component {
   constructor(props) {
     super(props);
   }
   render() {
      if (hasUserMedia()) {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            navigator.getUserMedia({ video: true, audio: true }, function (stream) {
            var video = document.querySelector('video');
            video.src = window.URL.createObjectURL(stream);
         }, function (err) {});
      } else {
         alert("WebRTC is not supported");
      }

     return (
       <div id="video_player">
         <video id="video" autoPlay></video>
       </div>
     )

  }
};

export function captureWebcam(video, audio,vendorUrl,videoDiv,MediaStream){
    navigator.getMedia({
        video: video,
        audio: audio
    }, function(stream){
        videoDiv.src = vendorUrl.createObjectURL(stream);
        MediaStream = stream.getTracks()[0];
        this.setState({MediaStream:MediaStream});

    }, function(error){
        console.log(error)
    });
}


export class Video_Player extends React.Component{
  constructor(props) {
    super(props);
    this.state = {videoSrc: '',MediaStream:''};
  }
  componentDidMount() {
    var videoDiv = document.querySelector('video');
    var MediaStream;
    var vendorUrl = window.URL || window.webkitURL;
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;
    captureWebcam(true, false, vendorUrl, videoDiv);
   }

   componentWillUnmount() {
    this.state.MediaStream.stop();
   }


  render(){
    return(
      <div id="video_player">
        <video id="video" autoPlay></video>
        {this.state.MediaStream}
      </div>
    )
  }
}
