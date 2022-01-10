import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerFavoritosAction } from '../actions/profileActions';
import { fetchQuestions } from '../actions/questionActions';
import Question from '../components/Question';

const FavoritesPage = () => {

    const auth = useSelector((state) => state.auth);
    const profile = useSelector((state) => state.profile);
    const question = useSelector((state) => state.question);

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchQuestions());
        dispatch(obtenerFavoritosAction(auth.uid));
      }, [dispatch]);

      const renderQuestions = () => {
        if (profile.loading) return <p>Loading questions...</p>;
        if (profile.error) return <p>Unable to display questions.</p>;

        let questionFavorites = [];
        question.questions.forEach(element => {
            profile.favorites.forEach(favorite => {
                if(element.id === favorite.questionId)
                    questionFavorites.push(element);
            })
        });
    
        return questionFavorites.map((question) => {
           return <Question key={question.id} question={question} excerpt favorite={true}/>;
        });
      };

    return ( 
        <section>
        <h1>Favoritos</h1>
        {renderQuestions()}
        </section>
     );
}
 
export default FavoritesPage;