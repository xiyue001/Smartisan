import React, { Component } from 'react';
import {Route , Switch , withRouter} from 'react-router-dom'
import {Appfooter} from './components/comment/'
import { Main , Home , Buycar , List , HomeD} from './components/page'
class App extends Component {
  setfooter(){
    
    let { pathname } = this.props.location ;
    let noFooter = ["/main/login"];
    if(noFooter.indexOf(pathname) > -1) return '';
    return  <Appfooter/>
  }
  setRouters () {
    let { routes } = this.props
    
    return (
      <Switch>
        {routes.map((item)=>{
          return (
            <Route key = {item.id} component = {item.component} path = {item.path} exact = {item.exact}/>
          )
        })}
      </Switch>
    )
  }
  render() {
    
    return (
      <div className="App">
        {this.setRouters()}
        
        {this.setfooter()}
      </div>
    );
  }
}
App.defaultProps = {
  routes : [
    {id : 1 , path : '/' , component : Home , exact : true},
    {id : 2 , path : '/D' , component : HomeD },
    {id : 3 , path : '/list' , component : List },
    {id : 4 , path : '/buycar' , component : Buycar },
    {id : 5 , path : '/main' , component : Main }
  ]
}
export default withRouter(App);
