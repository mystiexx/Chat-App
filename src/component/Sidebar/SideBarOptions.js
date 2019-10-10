import React, { Component } from 'react'


class SideBarOptions extends Component {
    render() {
        return (
                <div
                    className={`user `}
                    onClick={() => { onClick(chat) }}
                >
                    <div className="user-photo">{name[0].toUpperCase()}</div>
                    <div className="user-info">
                        <div className="name">{name}</div>
                        {lastMessage && <div className="last-message">{lastMessage}</div>}
                    </div>

                </div>
 
        )
    }
}

export default SideBarOptions;
