import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControl from "./QuizControl";
import { setAnswer } from "@/redux/features/quizSlice";

export default function Questions() {
    const dispatch = useAppDispatch();
    const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
        (state) => state.quiz
    );
    const currentQuestion = questions[currentQuestionIndex];
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
            <Card className="w-[750px] ">
                <CardHeader>
                    <CardTitle>{currentQuestion.question}</CardTitle>
                    {/* <CardDescription>{}</CardDescription> */}
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
                    <QuizControl />
                </CardContent>
            </Card>
        </div>
    )
}
