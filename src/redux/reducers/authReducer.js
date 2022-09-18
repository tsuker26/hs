const defaultState = {
    auth: false,
}

const LOGIN = 'LOGIN'
const LOG_OUT = 'LOG_OUT'


export default function authReducer(state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, auth: true}
        case LOG_OUT:
            return {...state, auth: false}
        default:
            return state
    }
}


export const loginAc = () => ({type: LOGIN})
export const logOutAc = () => ({type: LOG_OUT})