import {
    ADD,
    MINUS,
    FetchData
} from '../constants/funType';
import $httpRequest from '../../http';
export const add = () => {
    return {
        type: ADD
    }
}
export const minus = () => {
    return {
        type: MINUS
    }
}
export const fetch = (payload) => {
    return {
        payload: payload,
        type: FetchData
    }
}
//异步action
export function asyncAdd(a) {
    console.log(a, 99)
    return dispatch => {
        $httpRequest("POST", "category/listCommodityByCategoryId", {}).then(res => {
            // console.log(res, 8989898);
            if (res.data.success) {
                dispatch(fetch(res.data))
            }

        });
    }
}