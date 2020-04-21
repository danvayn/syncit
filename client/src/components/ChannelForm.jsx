import React from 'react';
import axios from 'axios';

class ChannelForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      owner: 'me'
    }
    console.log(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addChannel = this.addChannel.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    //create owner here
    e.preventDefault();
    console.log(this.state);
    axios.post('http://127.0.0.1:5000/api/channels', this.state).then((response)=>{
      this.props.setChannel(response.data);
    }).catch((error)=> {
      console.error(error);
    })
  }

  render(){
    return (
    <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
      <form onSubmit={this.handleSubmit}>
      <label>
        Title:
        <input value={this.state.title} name="title" onChange={(e) => this.handleChange(e)} />
      </label>
      <label>
        Description:
        <input value={this.state.description} name="description" onChange={(e) => this.handleChange(e)} />
      </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
    )
  }
};

export default ChannelForm;