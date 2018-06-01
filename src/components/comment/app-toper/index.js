
import React , { Component } from 'react';
import './index.scss'
class Apptoper extends Component {
    render (){
        let {data} = this.props
        return (
            <div className = "app-toper">
                <div className = {data.leftIcon?"leftIcon fa fa-" + data.leftIcon:''} >
                    {data.leftImgsrc ? <img src = {data.leftImgsrc}/> : ''}
                </div>


                { data.contentDivImg ? <div className = "contentDivImg"></div> :<span>{data.title}</span>}


                <div className = {data.rightIcon?"rightIcon fa fa-" + data.rightIcon:''} >
                    {data.rightImgsrc ? <img src = {data.rightImgsrc}/> : ''}
                </div>
            </div>
        )
    }
}

export default Apptoper