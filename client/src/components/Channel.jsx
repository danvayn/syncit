import { withRouter } from 'react-router';
import React from 'react';
import Chat from './Chat.jsx';
import Player from './Player.jsx';

const Channel = ({channel}) => {return (
  <div>
  <Chat/>
  <Player/>
  </div>
)}

export default withRouter(Channel);