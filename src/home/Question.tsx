import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import QuizControls from "./QuizControls";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
export default function Question() {
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
      <Card className="w-[450px] ">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription className="font-semibold mt-2">
            Question{" "}
            <span className="font-medium"> {currentQuestionIndex} </span>
            of <span className="font-medium"> {question.length}</span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div>
            {currentQuestion.options.map((option, index) => (
              <Button
                variant={option === currentAnswer ? "default" : "outline"}
                onClick={() => handleAnswerChange(option)}
                className="w-full mt-3"
                size={"lg"}
                key={index}
              >
                {option}
              </Button>
            ))}
          </div>
          <QuizControls></QuizControls>
        </CardContent>
      </Card>
    </div>
  );
}
