import { quizData } from "@/assets/quizData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: quizData
}
export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {

    }
})

export default quizSlice.reducer