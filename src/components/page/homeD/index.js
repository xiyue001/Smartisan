import React , { Component } from 'react'
import Apptoper from '../../comment/app-toper'
import './index.scss'
class HomeD extends Component {
    render (){
        let data = {
            titleImgsrc : 'titleImgsrc',
            contentDivImg : true ,
            leftIcon : 'bars',
            rightIcon : 'anchor'
        }
        return (
            <div>
                <Apptoper data = {data}/>
            </div>
        )
    }
} 

export default HomeD