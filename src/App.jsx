import { useEffect, useState } from 'react';
import Question from './Question';

function App() {
  const [nextQuestion, showNextQuestion] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(null);
  const [currentQuestion, showCurentQuestion] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dataPromise = await fetch('/assets/question.json');
      const dataJson = await dataPromise.json();

      setData(dataJson.questions);
      setQuestionNumber(0);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data && questionNumber !== null) {
      showCurentQuestion(data[questionNumber]);
    }
  }, [data, questionNumber]); // Depend on data and questionNumber
  const goNextQuestion = function () {
    setQuestionNumber(questionNumber + 1);
  };
  return (
    <>
      {currentQuestion && (
        <Question
          currentQuestion={currentQuestion}
          next={() => showNextQuestion(true)}
        />
      )}
      {
        <div>
          {nextQuestion && (
            <button type="button" onClick={goNextQuestion}>
              Next Question
            </button>
          )}
        </div>
      }
    </>
  );
}

export default App;
