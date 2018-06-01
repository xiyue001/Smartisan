import { CHANGE_USER_INFO } from './const'

const actionCreater = {
    Ordlogin (){
        let action = {
            type : CHANGE_USER_INFO,
            userinfo : {username : '123' , password : "123"}
        }
        return action
    },
    Intlogin(){
        let action = {
            type : CHANGE_USER_INFO,
            userinfo : {username : '123' , password : "123"}
        }
        return action
    }
}

export default actionCreater