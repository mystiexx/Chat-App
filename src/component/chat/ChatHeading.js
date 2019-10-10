import React, {Component} from 'react'

class ChatHeading extends Component {
    render(){
        const {name, numberOfUsers } = this.props
        return(
            <div className="chat-header">
                <div className="user-info">
                    <div className="user-name">{name}</div>
                    <div className="status">
                        <div className="indicator"></div>
                        <span>{numberOfUsers ? numberOfUsers : null}</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default ChatHeading;