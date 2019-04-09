import {ADD_DATA,DEL_DATA} from './actionCtrls'

const defaultState = {
    data:[]
}
export default (state = defaultState,action)=>{
    switch(action.type){
        case ADD_DATA:
            let newState = state
            newState.data.push(action.value)
            return newState
        case DEL_DATA:
            state.data.map((i,index)=>{
                if(i == action.index)
                    return state.data.splice(index,1)
            })
             
    }
    return state
}