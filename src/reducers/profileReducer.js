import {
  CREAR_PERFIL,
  CREAR_PERFIL_EXITO,
  CREAR_PERFIL_ERROR,
  COMENZAR_OBTENER_PERFIL,
  OBTENER_PERFIL_EXITO,
  OBTENER_PERFIL_ERROR,
  COMENZAR_EDICION_PERFIL,
  PERFIL_EDITADO_EXITO,
  PERFIL_EDITADO_ERROR,
  COMENZAR_OBTENER_FAVORITOS,
  OBTENER_FAVORITOS_EXITO,
  OBTENER_FAVORITOS_ERROR,
  CREAR_FAVORITO,
  CREAR_FAVORITO_ERROR,
  CREAR_FAVORITO_EXITO,
  QUITAR_FAVORITO,
  QUITAR_FAVORITO_EXITO,
  QUITAR_FAVORITO_ERROR
} from "../actions/profileActions";

export const initialState = {
  profile: {},
  error: null,
  loading: false,
  favorites: [],
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case CREAR_PERFIL:
    case COMENZAR_OBTENER_PERFIL:
    case COMENZAR_EDICION_PERFIL:
    case COMENZAR_OBTENER_FAVORITOS:
    case CREAR_FAVORITO:
    case QUITAR_FAVORITO:
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
    case OBTENER_FAVORITOS_ERROR:
    case CREAR_FAVORITO_ERROR:
    case QUITAR_FAVORITO_ERROR:
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
        profile: action.payload,
      };

    case OBTENER_FAVORITOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        favorites: action.payload,
      };

    case CREAR_FAVORITO_EXITO:
      return {
        ...state,
        loading: false,
        favorites: [...state.favorites, action.payload],
      };
    case QUITAR_FAVORITO_EXITO:  
    return {
        ...state,
        favorites: state.favorites?.filter(
          (x) => x.id !== action.payload
        ),
        loading: false
      };

    default:
      return state;
  }
}
