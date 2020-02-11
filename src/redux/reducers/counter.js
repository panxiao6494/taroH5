// src/reducers/counter.js
import { ADD, MINUS, FetchData } from '../constants/funType';

//默认初始值
const INITIAL_STATE = {
    num: 0,
    cateData: null
}

export default function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                num: state.num + 1
            }
        case MINUS:
            return {
                ...state,
                num: state.num - 1
            }
        case FetchData:
            console.log(action.payload.data, 66666666)
            return {
                ...state,
                cateData: action.payload.data
            }

        default:
            return state
    }
}