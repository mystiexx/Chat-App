import React, {Component} from 'react'
import {FaSearch, FaChevronDown, FaEject,  FaList}  from 'react-icons/fa'
import Form from 'react-bootstrap/Form'

class Sidebar extends Component {
	constructor(props){
		super(props);
		this.state = {
			reciever: ""
		}
	}

	handleSubmit = (e)=>{
		e.preventDefault()
		const {reciever} = this.state
		const { onSendPrivateMessage } = this.props

		onSendPrivateMessage(reciever)
		this.setState({reciever: ""})
	}
    
    render(){
		const { chats, activeChat, user, onSendPrivateMessage, setActiveChat, logout } = this.props
		const { reciever } = this.state
		return (
			<div id="side-bar">
					<div className="heading">
						<div className="app-name">Zanjo Chat <FaChevronDown /></div>
						<div className="menu">
							<FaList />
						</div>
					</div>
					<Form onSubmit={this.handleSubmit} className="search">
						<i className="search-icon"><FaSearch /></i>
						<input 
						placeholder="Search"
						value ={reciever}
						onChange={(e)=>{ this.setState({reciever:e.target.value})}}
						 type="text"/>
						<div className="plus"></div>
					</Form>
					<div 
						className="users" 
						ref='users' 
						onClick={(e)=>{ (e.target === this.refs.user) && setActiveChat(null) }}>
						
						{
						chats.map((chat)=>{
							if(chat.name){
								const lastMessage = chat.messages[chat.messages.length - 1];
								const chatSideName = chat.users.find((name)=>{
									return name !== user.name
								}) || "Community" 
								const classNames = (activeChat && activeChat.id === chat.id) ? 'active' : ''
								return(
								<div 
									key={chat.id} 
									className={`user ${classNames}`}
									onClick={ ()=>{ setActiveChat(chat) } }
									>
									<div className="user-photo">{chatSideName[0].toUpperCase()}</div>
									<div className="user-info">
										<div className="name">{chatSideName}</div>
										{lastMessage && <div className="last-message">{lastMessage.message}</div>}
									</div>
									
								</div>
							)
							}

							return null
						})	
						}
						
					</div>
					<div className="current-user">
						<span>{user.name}</span>
						<div onClick={()=>{logout()}} title="Logout" className="logout">
							<FaEject/>	
						</div>
					</div>
				</div>
		);
	}
    }

export default Sidebar;