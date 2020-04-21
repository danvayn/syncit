import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChannelList from './ChannelList.jsx';
import Channel from './Channel.jsx';
import ChannelForm from './ChannelForm.jsx';
// import ChannelContext from '../context/ChannelContext';


const Header = ({}) => { return (
  <header>
    <Link to="/" className="logo">Syncit</Link>
    <Link to="/channel/create" className="button">Add a Channel</Link>
  </header>
)}

const App = (props) => {

  return (
    // <AppContext.Provider value={[channels, setChannels]}>
    <>
      <Header/>
      <div className='container'>
        <Switch>
        <Route exact path="/">
        <ChannelList channels={props.channels} />
        </Route>
        <Route exact path="/channel/create" render={(props)=> <ChannelForm {...props}/>}/>
        <Route exact path="/channel/:id" component={Channel}/>=
        </Switch>
      </div>
    </>
    // </AppContext.Provider>
  )
}

export default App;