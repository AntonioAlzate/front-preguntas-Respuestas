import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerFavoritosAction } from "../actions/profileActions";

import { fetchQuestions } from "../actions/questionActions";
import Question from "../components/Question";

const QuestionsPage = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchQuestions());

    if (auth.uid !== null && auth.uid !== undefined)
      dispatch(obtenerFavoritosAction(auth.uid));
  }, [dispatch, auth.uid]);

  const renderQuestions = () => {
    if (question.loading) return <p>Loading questions...</p>;
    if (question.hasErrors) return <p>Unable to display questions.</p>;

    return question.questions.map((question) => {
        let val = profile.favorites.filter(favorite => favorite?.questionId === question.id);
        let fav = val.length === 0 ? false : true;
       return <Question key={question.id} question={question} excerpt favorite={fav}/>;
    });
  };

  return (
    <section className="mt-5">
      <h1>Questions</h1>
      {renderQuestions()}
    </section>
  );
};

export default QuestionsPage;
