import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  agregarFavoritoAction,
  quitarFavoritoAction,
} from "../actions/profileActions";

const Question = ({ question, excerpt, onDelete, favorite }) => {
  const auth = useSelector((state) => state.auth);
  const favorites = useSelector((state) => state.profile.favorites);
  const loading = useSelector((state) => state.profile.loading);

  const dispatch = useDispatch();

  const [estadoFav, setEstadoFav] = useState(favorite);

  useEffect(() => {
    setEstadoFav(favorite);
  }, [favorite]);

  const changeStateFav = (isFav, questionId) => {
    if (isFav) {
      let favoriteId = favorites
        .filter(
          (fav) => fav.userId === auth.uid && fav.questionId === questionId
        )
        .map((fav) => fav.id);

      dispatch(quitarFavoritoAction(favoriteId[0]));
    } else {
      const data = {
        userId: auth.uid,
        questionId: questionId,
      };

      dispatch(agregarFavoritoAction(data));
    }
    setEstadoFav(!estadoFav);
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminada no podras recuperar la pregunta!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
      }
    });
  };

  return (
    <article className={excerpt ? "question-excerpt" : "question"}>
      <h2 className="mt-2">{question.question}</h2>
      <p>
        {question.category} - <small>{question.type}</small>
      </p>

      {auth.uid && (estadoFav != undefined) && (
        <button
          className={`btn btn-${estadoFav ? "danger" : "success"} right m-2`}
          onClick={() => changeStateFav(estadoFav, question.id)}
        >
          {estadoFav ? "unFAV" : "ADD FAV"}
        </button>
      )}

      {onDelete && (
        <button
          className="btn btn-danger right m-2"
          onClick={() => confirmDelete(question.id)}
        >
          DELETE
        </button>
      )}
      {excerpt && (
        <Link to={`/question/${question.id}/${estadoFav}`} className="btn btn-primary m-2">
          View Question
        </Link>
      )}
    </article>
  );
};

export default Question;
