import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchQuestion } from "../actions/questionActions";

import Question from "../components/Question";
import Answer from "../components/Answer";
import { Link } from "react-router-dom";
import { obtenerFavoritosAction } from "../actions/profileActions";

const SingleQuestionPage = ({ match }) => {
  const dispatch = useDispatch();
  const questionState = useSelector((state) => state.question);
  const auth = useSelector((state) => state.auth);

  const { id, fav } = match.params;

  const [isFav, setIsFav] = useState(fav);

  useEffect(() => {
    dispatch(fetchQuestion(id));
    dispatch(obtenerFavoritosAction(auth.uid));
    setIsFav(fav === "true" ? true : false)
  }, [dispatch, id]);

  const renderQuestion = () => {
    if (questionState.loading.question) return <p>Loading question...</p>;
    if (questionState.hasErrors.question)
      return <p>Unable to display question.</p>;

    return <Question question={questionState.question} favorite={isFav} />;
  };

  const renderAnswers = () => {
    return questionState.question.answers &&
      questionState.question.answers.length ? (
      questionState.question.answers.map((answer) => (
        <Answer key={answer.id} answer={answer} log={auth.uid} />
      ))
    ) : (
      <p>Empty answer!</p>
    );
  };

  return (
    <section>
      {renderQuestion()}
      {auth.uid && (
        <Link to={`/answer/${id}/${isFav}`} className="btn btn-primary right m-2">
          Reply
        </Link>
      )}

      <h2>Answers</h2>
      {renderAnswers()}
    </section>
  );
};

export default SingleQuestionPage;
