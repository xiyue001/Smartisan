import React , { Component } from 'react'
import Apptoper from '../../comment/app-toper'
import './index.scss'
class Home extends Component {
    render (){
        let data = {
            titleImgsrc : 'titleImgsrc',
            contentDivImg : true
        }
        return (
            <div>
                <Apptoper data = {data}/>
            </div>
        )
    }
} 

export default Home