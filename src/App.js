import React, {Component} from 'react'
import io from 'socket.io-client'
import {USER_CONNECTED, LOGOUT} from './Events'
import Login from './component/Login/login'
import Chat from './component/chat/chat'
import './App.css'

const socketUrl = "http://192.168.43.54:3231"
class App extends Component{
  constructor(){
    super()
    this.state = {
      socket: null,
      user: null,
    };
  }

  componentWillMount(){
    this.initSocket()
  }

  initSocket = () =>{
    const socket = io(socketUrl)
    socket.on('connect', ()=> {
      console.log('connected');
    })
    this.setState({socket})
  }

  setUser =(user)=>{
    const {socket} = this.state
    socket.emit(USER_CONNECTED, user);
    this.setState({user})
  }

  logout =()=>{
    const {socket} = this.state
    socket.emit(LOGOUT)
    this.setState({user:null})
  }

  render(){
    const { user} = this.state
    return(
      <div>{
        !user ?
        <Login socket={this.state.socket} 
        setUser={this.setUser}/>
        
        :

        <Chat socket={this.state.socket}
        user={user}
        logout={this.logout}
        />
    } 
     </div>
    )
  }
}
export default App;