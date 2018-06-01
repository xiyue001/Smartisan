import React , { Component } from 'react'
import './index.scss'
import {Route} from 'react-router-dom'
import Login from './login'
import User from './user'
import Group from '../../../module/group'
class Main extends Component {
    componentWillMount(){
        this.changehref()
    }
    componentWillReceiveProps(props){
        console.log("receiveProps")
        console.log("改变" ,props)
        let { pathname } = props.location;
        if(props.userinfo !== this.props.userinfo || pathname === '/main'){
            console.log('跳转')
            console.log('props.userinfo',props.userinfo)
            this.changehref(props)
        }
    }
    changehref(props){
        let {userinfo , history} = (props || this.props)
        console.log("userinfo",userinfo)
        let {replace} = history
        console.log(111,props)
        if(userinfo){
            replace('/main/user')
        }else{
            replace('/main/login')
        }
    }
    render (){
        return (
            <div>
                <Route key = "1" path = '/main/login' component = {Login} />
                <Route key = "2" path = '/main/user' component = {User} />
            </div>
        )
    }
} 

export default Group(Main,{
    reducer : 'common',
    states : []
})