import { Button } from "@/components/ui/button";
import { nextQuestion } from "@/redux/features/quiz/quizSlice";
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
  return (
    <div className="flex p-5 justify-between">
      <Button variant={"destructive"}>Previous</Button>
      <Button variant={"outline"} className="bg-green-300" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default QuizControls;
