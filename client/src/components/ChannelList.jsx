import React from "react";
import Channel from './Channel.jsx';
import {
  Link, Route,
  BrowserRouter as Router,
} from "react-router-dom";

const ChannelItem = ({channel}) => {
  return (
    <>
      <img src="https://picsum.photos/150"/>
      <div>
        <p>Currently Streaming Thing -   500 viewers</p>
        <p><span>{channel.title}</span> - Live for 10 hours.</p>
        <p>{channel.description}</p>
      </div>
    </>
  )
};
const ChannelsListed = ({channels}) => {return channels.map((channel, index)=> { return (
  <Link className="channel-item col-sm-12 col-md-6 col-lg-4" to={{ pathname: '/channel/'+channel._id}} key={index}>
    <ChannelItem channel={channel}/>
  </Link>
)})}

const ChannelList = ({channels}) => {
  if(channels){
    return (
      <div className="row">
        <ChannelsListed channels={channels}/>
      </div>
    )
  }
  else {
    return (
      <h2>Add some Channels</h2>
    )
  }
}

export default ChannelList;