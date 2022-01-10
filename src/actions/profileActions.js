import Swal from "sweetalert2";

export const CREAR_PERFIL = 'CREAR_PERFIL';
export const CREAR_PERFIL_EXITO = 'CREAR_PERFIL_EXITO';
export const CREAR_PERFIL_ERROR = 'CREAR_PERFIL_EXITO';

export const COMENZAR_OBTENER_PERFIL = 'OBTENER_PERFIL';
export const OBTENER_PERFIL_EXITO = 'OBTENER_PERFIL_EXITO';
export const OBTENER_PERFIL_ERROR = 'OBTENER_PERFIL_ERROR';

export const COMENZAR_EDICION_PERFIL = 'COMENZAR_EDICION_PERFIL';
export const PERFIL_EDITADO_EXITO = 'PERFIL_EDITADO_EXITO';
export const PERFIL_EDITADO_ERROR = 'PERFIL_EDITADO_ERROR';

export const COMENZAR_OBTENER_FAVORITOS = 'COMENZAR_OBTENER_FAVORITOS';
export const OBTENER_FAVORITOS_EXITO = 'OBTENER_FAVORITOS_EXITO';
export const OBTENER_FAVORITOS_ERROR = 'OBTENER_PERFIL_ERROR';

export const CREAR_FAVORITO = 'CREAR_FAVORITO';
export const CREAR_FAVORITO_EXITO = 'CREAR_FAVORITO_EXITO';
export const CREAR_FAVORITO_ERROR = 'CREAR_FAVORITO_ERROR';

export const QUITAR_FAVORITO = 'QUITAR_FAVORITO';
export const QUITAR_FAVORITO_EXITO = 'QUITAR_FAVORITO_EXITO';
export const QUITAR_FAVORITO_ERROR = 'QUITAR_FAVORITO_ERROR';


const URL_BASE = "http://localhost:8080";

// Obtener perfil
export function obtenerPerfilAction(userId) {
    return async (dispatch) => {
      dispatch(descargarPerfil());
  
      try {

        const response = await fetch(`${URL_BASE}/get/profile/${userId}`);
        const data = await response.json();
        dispatch(descargarPerfilExito(data));
      } catch (error) {
        console.log(error);
        dispatch(descargarPerfilError(true));
      }
    };
  }
  
  const descargarPerfil = () => ({
    type: COMENZAR_OBTENER_PERFIL,
    payload: true,
  });
  
  const descargarPerfilExito = (perfil) => ({
    type: OBTENER_PERFIL_EXITO,
    payload: perfil,
  });
  
  const descargarPerfilError = (estado) => ({
    type: OBTENER_PERFIL_ERROR,
    payload: estado
  });


// Crear Perfil
export function crearNuevoPerfilAction(perfil) {
    return async (dispatch) => {
      dispatch(crearPerfil());
  
      try {
        // Guardar
        const profile = await fetch(`${URL_BASE}/create/profile`, {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(perfil),
          });
  
        // si todo sale bien
        dispatch(agregarPerfilExito(profile));
  

      } catch (error) {
        console.log(error);
        dispatch(agregarPerfilError(true));
      }
    };
  }
  
  const crearPerfil = () => ({
    type: CREAR_PERFIL,
    payload: true,
  });
  
  // Si el producto se guarda en bd
  const agregarPerfilExito = (perfil) => ({
    type: CREAR_PERFIL_EXITO,
    payload: perfil
  });
  
  // Si existe un error
  const agregarPerfilError = (estado) => ({
    type: CREAR_PERFIL_ERROR,
    payload: estado,
  });

  // editar un producto en la api y el state
export function editarPerfilAction(perfil) {
    return async (dispatch) => {
      dispatch(editarPerfil());
  
      try {
        await fetch(`${URL_BASE}/profile/${perfil.id}`, {
            method: "PUT",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(perfil),
          });
        
        dispatch(editarPerfilExito(perfil))
        Swal.fire("Actualizado", "Su información se actualizo exitosamente.", "success");
      } catch (error) {
        console.log(error);
        dispatch(editarPerfilError())

        Swal.fire({
            icon: "error",
            tittle: "Error",
            text: "Se presento un error tratando de actualizar su información",
          });
      }
    }
  }
  
  const editarPerfil = () => ({
    type: COMENZAR_EDICION_PERFIL
  })
  
  const editarPerfilExito = (producto) => ({
    type: PERFIL_EDITADO_EXITO,
    payload: producto
  })
  
  const editarPerfilError = () => ({
    type: PERFIL_EDITADO_ERROR,
    payload: true
  })

  // Obtener Favoritos
export function obtenerFavoritosAction(userId) {
  return async (dispatch) => {
    dispatch(descargarFavoritos());

    try {

      const response = await fetch(`${URL_BASE}/getfavorites/${userId}`);
      const data = await response.json();
      dispatch(descargarFavoritosExito(data));
    } catch (error) {
      console.log(error);
      dispatch(descargarFavoritosError(true));
    }
  };
}

const descargarFavoritos = () => ({
  type: COMENZAR_OBTENER_FAVORITOS,
  payload: true,
});

const descargarFavoritosExito = (favoritos) => ({
  type: OBTENER_FAVORITOS_EXITO,
  payload: favoritos,
});

const descargarFavoritosError = (estado) => ({
  type: OBTENER_FAVORITOS_ERROR,
  payload: estado
});

// Crear Favorito
export function agregarFavoritoAction(favorito) {
  return async (dispatch) => {
    dispatch(crearFavorito());

    try {
      // Guardar
      let response = await fetch(`${URL_BASE}/add/favorite`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(favorito),
        });
      
      let result = await response.json();

      // si todo sale bien
      dispatch(agregarFavoritoExito(result));

    } catch (error) {
      console.log(error);
      dispatch(agregarFavoritoError(true));
    }
  };
}

const crearFavorito = () => ({
  type: CREAR_FAVORITO,
  payload: true
});

// Si el producto se guarda en bd
const agregarFavoritoExito = (favorito) => ({
  type: CREAR_FAVORITO_EXITO,
  payload: favorito
});

// Si existe un error
const agregarFavoritoError = (estado) => ({
  type: CREAR_FAVORITO_ERROR,
  payload: estado,
});


// quitar un favorito
export function quitarFavoritoAction(id) {
  return async (dispatch) => {
    dispatch(quitarFavorito());

    try {
      await fetch(`${URL_BASE}/delete/favorite/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(quitarFavoritoExito(id));

    } catch (error) {
      console.log(error);
      dispatch(quitarFavoritoError());
    }
  };
}

const quitarFavorito = () => ({
  type: QUITAR_FAVORITO,
  payload:true
});

const quitarFavoritoExito = (id) => ({
  type: QUITAR_FAVORITO_EXITO,
  payload: id
});

const quitarFavoritoError = () => ({
  type: QUITAR_FAVORITO_ERROR,
  payload: true,
});