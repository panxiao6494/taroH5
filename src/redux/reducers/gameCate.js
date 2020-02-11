import { FetchGameList } from '../constants/funType';

const INITIAL_STATE = {
    gameCateList: []
}

export default function gameCateList(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FetchGameList:
            return {
                ...state,
                gameCateList: action.payLoad
            }
        default:
            return state
    }
}