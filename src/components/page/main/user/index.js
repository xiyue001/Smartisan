import React , { Component } from 'react'
import Apptoper from '../../../../components/comment/app-toper'
import './index.scss'
class User extends Component {
    render (){
        let data = {
            title : '用户中心',
            leftIcon : '',
            rightIcon : ''
        }
        return (
            <div>
                <Apptoper data = {data}/>
                <div>User</div>
            </div>
        )
    }
} 

export default User