import React, {Component} from 'react'
// import Chat from './chat'
import App from '../App'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact component={App} path='/'/>
                    {/* <Route component={Chat} path='/chat'/> */}
                </Switch>
            </Router>
        )
    }
}

export default Routes;