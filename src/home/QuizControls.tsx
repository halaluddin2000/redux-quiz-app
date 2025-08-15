import { Button } from "@/components/ui/button";
import {
  nextQuestion,
  previousQuestion,
  completeQuiz,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export function QuizControls() {
  const { question, currentQuestionIndex, userAnswer, quizComplete } =
    useAppSelector((state) => state.quiz);
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
  const handleCompleteQuiz = () => {
    dispatch(completeQuiz());
  };
  const isCompleteEnabled =
    isAnswerSelect || currentQuestionIndex !== question.length - 1;

  return (
    <div className="flex p-5 justify-between">
      <Button
        onClick={handlePrevious}
        disabled={currentQuestionIndex === 0 || quizComplete}
        variant={"destructive"}
      >
        Previous
      </Button>
      {/* Next Button */}
      {currentQuestionIndex < question.length - 1 && !quizComplete && (
        <Button
          variant={"outline"}
          className="bg-green-300"
          onClick={handleNext}
        >
          Next
        </Button>
      )}
      {/* Complete Quiz Button */}
      {currentQuestionIndex === question.length - 1 && !quizComplete && (
        <Button onClick={handleCompleteQuiz} disabled={!isCompleteEnabled}>
          Complete Quiz
        </Button>
      )}
    </div>
  );
}

export default QuizControls;
