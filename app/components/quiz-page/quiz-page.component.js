import {getTimeStr} from '../../modules/helper/time.helper.js';
import {alertHelper} from '../../modules/helper/alert.helper.js';
import QuizAnswer from '../../model/QuizAnswer.js';

export const quizPage = {
    templateUrl: './app/components/quiz-page/quiz-page.component.html',
    controller: controller,
    controllerAs: '$',
}


function controller($rootScope, $http, $state) {

    
    this.$onInit = () => {
        
        this.quizs = {};
        this.quiz = null;
        this.index = -1;
        this.second = 0;
        this.quizAnswers = [];

        this.isEndQuiz = false;

        //Nếu chưa có giá trị quizSubject thì đẩy về trang các khóa học
        if ($rootScope.quizSubject == null) 
            $state.go('courses');

        //Tạo đồng hồ đếm giờ, this.second cập nhật mỗi giây (+1)
        this.timer = setInterval(() => {this.second += 1; $rootScope.$apply()}, 1000);
        this.getTimeStr = getTimeStr;
        
        /* Khởi tạo dữ liệu cho các câu quiz và index, quiz đầu tiên, mảng answers[] chứa các câu trả lời */
        $http.get(`../../../database/quizs/${$rootScope.quizSubject.id}.json`)
        .then( response => {

            //Lấy dữ liệu quiz và các câu hỏi trong quiz
            this.quizs = response.data; 
            this.quiz = this.quizs[0]
            this.index = 0;

            return this.quizs;
        }).then (quizs => {

            //Khởi tạo mảng object answers chứa các phần tử mặc định là quiz     
            quizs.forEach( (quiz, index) => {
                this.quizAnswers[index] = new QuizAnswer(quiz, null);
            }); 
        })
    }

    /*
        Xuất về đối tượng chứa { 
                    totalMark:      <tổng điểm>, 
                    mumSuccess:     <số câu đúng>, 
                    numFail:        <số câu sai>, 
                    numNotChecked:  <số câu chưa đánh>

    */
    this.getArrResult = () => {
        let totalMark = 0;      //tổng điểm
        let numSuccess = 0;     //số câu đúng
        let numFail = 0;        //số câu sai
        let numNotChecked = 0;  //số câu chưa đánh
        
        //duyệt mảng answers lấy các giá trị cần thiết
        this.quizAnswers.forEach( quizAnswer => {
            if (quizAnswer.isChecked())
            {
                if( quizAnswer.isCorrect() ) 
                {
                    totalMark += quizAnswer.getMark();
                    numSuccess += 1;
                } 
                else 
                {
                    numFail += 1;
                }
            } 
            else
            {
                numNotChecked += 1
            }
        })

        return {totalMark: totalMark, numSuccess: numSuccess, numFail: numFail, numNotChecked: numNotChecked};
    }

    //Nút kết thúc quiz
    this.submitQuiz = () => {

        alertHelper.confirm('Bạn có chắc muốn kết thúc Quiz?', '', () => {
            let result = this.getArrResult();
            let msg = `<p class="result-quiz-mark">${result.totalMark} Điểm</p> 
                       <b>Số câu đúng:</b> ${result.numSuccess} <br>
                       <b>Số câu sai:</b> ${result.numFail} <br>
                       <b>Số câu chưa đánh:</b> ${result.numNotChecked}`;
            alertHelper.info('Kết Quả Quiz Của Bạn', msg, 20000);
            this.endQuiz();

        })
    }

    //nút làm lại quiz
    this.restartQuiz = () => {
        this.$onInit();
    }

    //kết thúc Quiz 
    this.endQuiz = () => {
        this.isEndQuiz = true;
        clearInterval(this.timer);
        $rootScope.$apply();
    }

    //Chọn kết quả, lưu vào mảng answers[]
    this.selectAnswer = (answerId) => {
        this.quizAnswers[this.index].answerId = answerId;
    }

    /* Chọn quiz theo index đưa vào */
    this.selectQuiz = (index) => {
        this.index = index;
        this.quiz = this.quizs[this.index];
    }
    
    /* Các nút điều khiển chuyển đổi quiz */
    this.firstQuiz = () => {
        this.index = 0;
        this.quiz = this.quizs[0]
    }

    this.revertQuiz = () => {
        if (this.index > 0) 
            this.index--
        this.quiz = this.quizs[this.index];
    }

    this.nextQuiz = () => {
        if (this.index < this.quizs.length - 1) 
            this.index++
        this.quiz = this.quizs[this.index];
    }

    this.lastQuiz = () => {
        this.index = this.quizs.length - 1;
        this.quiz = this.quizs[this.index];
    }
}