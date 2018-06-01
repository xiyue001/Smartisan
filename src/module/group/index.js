import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actionCreators'
let Group = (UiComponent,opaction)=>{
    return connect((state)=>{
        if(!opaction){
            return state
        }
        if(opaction.states === undefined || opaction.states.length === 0){
            return state[opaction.reducer]
        }
        const _state = {};
        opaction.states.forEach((item)=>{
            _state[item] = state[opaction.reducer][item]
        })
        return _state
    },dispatch => {
        if ( !opaction ) {//如果没有options，就将所有的actionCreator的方法都给它
            let actions = {}
            for (const key in actionCreators) {               
                actions = Object.assign(actions, actionCreators[key])
            }
            return actions
        }
        return bindActionCreators(actionCreators[opaction.reducer], dispatch)
    })(UiComponent)
}

export default Group
