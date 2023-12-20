
import { USUARIO, MODULOS } from '../constants/ActionTypes';

const defaultState = {
    usuario: null,
    modulos: null,
}

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case USUARIO:
            return {
                ...state,
                usuario: payload,
            }
        case MODULOS:
            return {
                ...state,
                modulos: payload,
            }
        default:
            return state;
    }
}