

import { CHANGE_USER_INFO } from './const'
import state from './state'
const reducer = (pre = state, action)=>{
    let new_data = { ...pre }
    switch(action.type) {
        case CHANGE_USER_INFO : new_data.userinfo = action.userinfo ; break;
        default : break;
    }
    return new_data
}

export default reducer