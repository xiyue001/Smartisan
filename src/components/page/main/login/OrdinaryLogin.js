
import React , { Component } from 'react'
import Apptoper from '../../../../components/comment/app-toper'
class OrdinaryLogin extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this)
    }
    login(e){
        e.preventDefault()
        this.props.login();
        console.log(this)
    }
    render (){
        let data = {
            leftIcon : '',
            rightIcon : '',
            title : "登录"    
        }
        return (
            <div>
                <Apptoper data = {data}/>
                <form onSubmit = {this.login}>
                    <input className = 'Ord-login-input-first' type = "text" placeholder = '手机号'/>
                    <input className = 'Ord-login-input-second' type = "text" placeholder = '密码'/>
                    <div className = "Ord-autologin clear">
                        <input type = "checkbox" />
                        <span>自动登录</span>
                        <ul>
                            <li><a>注册</a></li>
                            <li><a>忘记密码</a></li>
                        </ul>
                    </div>
                    <button className = "login-btn">登录</button>
                </form>
            </div>
        )
    }
}
export default OrdinaryLogin