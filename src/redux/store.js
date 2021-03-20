import {createStore} from 'redux'

const initialState = {
    usercomment:""
}

const reducer = (state = initialState,action) => {
    console.log("ACCIONES "+JSON.stringify(action))
    if(action.type === "ADD_COMMENT"){
            return {
                usercomment: action.comm
            }
    }
    return state
}

export default createStore(reducer)