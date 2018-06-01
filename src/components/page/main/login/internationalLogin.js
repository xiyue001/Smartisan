
import React , { Component } from 'react'
import Apptoper from '../../../comment/app-toper'
class internationalLogin extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this)
    }
    login(e){
        e.preventDefault()
        this.props.login();
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
                    <div className = "interbation-region">国家和地区<input type = "button" value = "中国"/></div>
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
export default internationalLogin