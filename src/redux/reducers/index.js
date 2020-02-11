//src/reducers/index.js

import { combineReducers } from 'redux';
import counter from './counter';
import gameCateList from './gameCate'

export default combineReducers({
    counter,
    gameCateList
})