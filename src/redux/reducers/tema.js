
import { DARK } from '../constants/ActionTypes';

const defaultState = {
    dark: false,
}

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case DARK:
            return {
                ...state,
                dark: payload,
            }
        default:
            return state;
    }
}