import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchOwnerQuestions,
  deleteQuestion,
} from "../actions/questionActions";
import Question from "../components/Question";
import { obtenerFavoritosAction } from "../actions/profileActions";

const OwnerQuestionsPage = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchOwnerQuestions(auth.uid));
    dispatch(obtenerFavoritosAction(auth.uid));
  }, [dispatch, auth.uid]);

  useEffect(() => {
    if (question.redirect) {
      dispatch(fetchOwnerQuestions(auth.uid));
      dispatch(obtenerFavoritosAction(auth.uid));
    }
  }, [question.redirect, dispatch, auth.uid]);

  const onDelete = (id) => {
    dispatch(deleteQuestion(id));
  };

  const renderQuestions = () => {
    if (question.loading) return <p>Loading questions...</p>;
    if (question.hasErrors) return <p>Unable to display questions.</p>;

    return (
      question &&
      question.questions.map((question) => {
        let val = profile.favorites.filter(
          (favorite) => favorite?.questionId === question.id
        );
        let fav = val.length === 0 ? false : true;
        return (
          <Question
            key={question.id}
            question={question}
            excerpt
            onDelete={onDelete}
            favorite={fav}
          />
        );
      })
    );
  };

  return (
    <section className="mt-5">
      <h1>Questions</h1>
      {renderQuestions()}
    </section>
  );
};

export default OwnerQuestionsPage;
