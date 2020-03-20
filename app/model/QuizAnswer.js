export default class QuizAnswer {

    constructor(quiz, answerId) {
        this.quiz = quiz;
        this.answerId = answerId;
    }

    // Kiểm tra xem có trả lời đúng không
    isCorrect() {
        return this.quiz.AnswerId == this.answerId;
    }

    /* 
        Trả về điểm số của câu trả lời
        TRUE: trả về điểm của quiz
        FALSE: trả về 0 điểm
    */
    getMark() {
        return (this.isCorrect()) ? this.quiz.Marks : 0;
    }

    /*
        Kiểm tra coi câu này đã có trả lời hay chưa? 
        TRUE nếu đã trả lời, 
        FALSE nếu chưa trả lời
    */
    isChecked() {
        return this.answerId != null;
    }

}