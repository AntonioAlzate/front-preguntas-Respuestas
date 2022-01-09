
import {
  CREAR_PERFIL,
  CREAR_PERFIL_EXITO,
  CREAR_PERFIL_ERROR,
  COMENZAR_OBTENER_PERFIL,
  OBTENER_PERFIL_EXITO,
  OBTENER_PERFIL_ERROR,
  COMENZAR_EDICION_PERFIL,
  PERFIL_EDITADO_EXITO,
  PERFIL_EDITADO_ERROR
} from "../actions/profileActions";

export const initialState = {
  profile: {},
  error: null,
  loading: false,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case CREAR_PERFIL:
    case COMENZAR_OBTENER_PERFIL:
    case COMENZAR_EDICION_PERFIL:
      return {
        ...state,
        loading: action.payload,
      };
    case CREAR_PERFIL_EXITO:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case CREAR_PERFIL_ERROR:
    case OBTENER_PERFIL_ERROR:
    case PERFIL_EDITADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OBTENER_PERFIL_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        profile: action.payload,
      };
    
      case PERFIL_EDITADO_EXITO: 
      return {
          ...state,
          loading: false,
          error: null,
          profile: action.payload
      }

    default:
      return state;
  }
}
