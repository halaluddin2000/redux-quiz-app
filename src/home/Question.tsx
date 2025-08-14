import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button } from "@/components/ui/button";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import QuizControls from "./QuizControls";

export function Question() {
  const dispatch = useAppDispatch();
  const { question, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = question[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];

  const handleAnswerChange = (ans: string) => {
    dispatch(
      setAnswer({
        questionIndex: currentQuestionIndex,
        answer: ans,
      })
    );
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[490px]">
        <CardHeader className="font-bold text-2xl w-full">
          {currentQuestion.question}
        </CardHeader>
        <CardContent>
          {currentQuestion.options.map((options, index) => (
            <Button
              variant={options === currentAnswer ? "default" : "outline"}
              onClick={() => handleAnswerChange(options)}
              className="w-full font-bold mt-4"
              size={"lg"}
              key={index}
            >
              {options}
            </Button>
          ))}
        </CardContent>
        <QuizControls />
      </Card>
    </div>
  );
}

export default Question;
