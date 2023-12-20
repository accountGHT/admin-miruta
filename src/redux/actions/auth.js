import { USUARIO, MODULOS } from '../constants/ActionTypes';

export const setUsuario = (usuario) => {
    return {
        type: USUARIO,
        payload: usuario,
    }
}
export const setModulos = (modulos) => {
    return {
        type: MODULOS,
        payload: modulos,
    }
}