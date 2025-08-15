import { Button } from "@/components/ui/button";
import {
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

function QuizControls() {
  const { question, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();
  const isAnswerSelect = userAnswer[currentQuestionIndex] !== null;
  const handleNext = () => {
    if (isAnswerSelect) {
      dispatch(nextQuestion());
    }
  };
  const handlePrevious = () => {
    dispatch(previousQuestion());
  };
  return (
    <div className="flex p-5 justify-between">
      <Button onClick={handlePrevious} variant={"destructive"}>
        Previous
      </Button>
      <Button variant={"outline"} className="bg-green-300" onClick={handleNext}>
        Next
      </Button>
      {/* Complete Quiz Button */}
      {/* {currentQuestionIndex === questions.length - 1 && !quizComplete && (
        <Button onClick={handleCompleteQuiz} disabled={!isCompleteEnabled}>
          Complete Quiz
        </Button>
      )} */}
    </div>
  );
}

export default QuizControls;
