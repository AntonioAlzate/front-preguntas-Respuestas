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