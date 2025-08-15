import Question from "./home/Question";
import { QuizSummary } from "./home/QuizSummary";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <>
      <h2 className="font-semibold text-center text-5xl p-4 mb-3">Quiz App</h2>
      {!quizComplete ? <Question /> : <QuizSummary />}
    </>
  );
}

export default App;
