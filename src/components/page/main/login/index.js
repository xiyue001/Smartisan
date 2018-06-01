import React , { Component } from 'react'
import Group from '../../../../module/group'
import InternationalLogin from './internationalLogin';
import OrdinaryLogin from './OrdinaryLogin';
import './index.scss'
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            loginType : 'Ord'
        }
    }
    componentDidMount(){
        
    }
    setLoginType (){
        let {loginType} = this.state;
        let {Ordlogin,Intlogin} = this.props;
        let type = 'Int';
        let login = Ordlogin;
        let title = '国际号码登录';
        let Form = OrdinaryLogin;
        if(loginType !== 'Ord'){
            type = 'Ord';
            login = Intlogin;
            title = '国内号码登录';
            Form = InternationalLogin;
        }
        let handleLoginType = ()=>{
            this.setState({loginType: type})
        }
        return (
            <div>
                <Form login = {login}/>
                <div className = "login-type" onClick = {handleLoginType}>{title}</div>
            </div>
        )
    }
    render (){
        return (
            <div className = "main-login">
                {this.setLoginType()}
            </div>
        )
    }
}

export default Group(Login,{
    reducer : 'common'
})