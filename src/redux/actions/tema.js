import { DARK } from '../constants/ActionTypes';

export const setDark = (dark) => {
    return {
        type: DARK,
        payload: dark,
    }
}