import React , { Component } from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
class Appfooter extends Component {
    setNav(){
        let { routes } = this.props
        return routes.map((item)=>{
            return (
            <NavLink exact = {item.exact} activeClassName="actived" to = {{pathname : item.path}}
                key = {item.id}
            >
                <i className={"fa fa-"+item.icon}></i>
                <span>{item.title}</span>
            </NavLink>)
        })
    }
    render (){
        return (
            <div className = "app-footer">
                {this.setNav()}
            </div>
        )
    }
} 
Appfooter.defaultProps = {
    routes : [
        {id : 1 , title : '孙正杰' , icon : 'home' , path : '/', exact : true},
        {id : 2 , title : '党浩' , icon : 'home' , path : '/D' },
        {id : 3 , title : '分类' , icon : 'th' , path : '/list'},
        {id : 4 , title : '购物车' , icon : 'shopping-bag', path : '/buycar'},
        {id : 5 , title : '我的' , icon : 'globe' , path : '/main'}
    ]
}
export default Appfooter