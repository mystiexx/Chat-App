import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import {VERIFY_USER} from '../../Events'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            nickname:"",
            error: ""
        }
    }

    setUser = ({user, isUser}) => {
        if (isUser){
            this.setError("username taken")
        }else{
            this.setError("")
            this.props.setUser(user)
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const {socket} = this.props
        const {nickname} = this.state
        socket.emit(VERIFY_USER, nickname, this.setUser)
    }

    handleChange =(e)=> {
        this.setState({nickname: e.target.value})
    }

    setError = (error) =>{
        this.setState({error})
    }

    render(){
        const {nickname, error} = this.state
        return(
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Group>
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control 
                        type='text'
                        value={nickname}
                        ref={(input)=>{this.textInput = input}}
                        id="nickname"
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <div className="text-danger">{error ? error:null}</div>

                </Form>

            </div>
        )
    }
}
export default Login;