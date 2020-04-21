import React from 'react';
import App from '../components/App.jsx';
import axios from 'axios';
import {
  BrowserRouter as Router
} from "react-router-dom";

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {channels : []};
    this.addChannel = this.addChannel.bind(this);
  }

  addChannel(channel){
    let channels = this.state.channels;
    channels.push(channel);
    this.setState(channels);
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:5000/api/channels').then((response)=>{
      this.setState({channels: response.data});
      // console.log(response.data);
    }).catch((error)=> {
      console.error(error);
    })
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:5000/api/channels').then((response)=>{
      this.setState({channels: response.data});
      // console.log(response.data);
    }).catch((error)=> {
      console.error(error);
    })
  }

  render() {
    return <Router><App addChannel={this.addChannel} channels={this.state.channels}/></Router>
  }
};