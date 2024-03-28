<script setup>
import DfhiQuestion from "../components/LectureQuestions/DfhiQuestion.vue";
import ScorePage from "../components/ScorePage.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

import Lectures_data from "../data/QuizData.json";

//const isActive = ref(false);

const lectureId = parseInt(useRoute().params.id);
const quiz = Lectures_data.find((a) => a.lectureId === lectureId);
const currentQuestionIndex = ref(1);
const ClickedchoiceId = ref(0);
const valueDisabled = ref(false);
const numberOfCorrectAnswers = ref(0);
const quizQuestionLength = quiz.lectureQuestions.length;
const showScore = ref(false);

//const showResults = ref(false);
//const showRatioQuestions = ref(true);
const backgroundColor = ref("blue");

const onChoiceSelected = (isCorrect, iD) => {
  if (isCorrect) {
    console.log("true");
    numberOfCorrectAnswers.value++;
    ClickedchoiceId.value = iD;
    console.log("valeur clicked" + ClickedchoiceId.value);
    backgroundColor.value = "green";
  } else {
    console.log("falseeee");
    ClickedchoiceId.value = iD;
    console.log("valeur clicked" + ClickedchoiceId.value);
    backgroundColor.value = "red";
  }
  valueDisabled.value = true;
  console.log(valueDisabled.value);
};

const handleRestartButton = () => {
   //console.log("larrivee"+ )
  currentQuestionIndex.value = 1;
  ClickedchoiceId.value = 0;
  valueDisabled.value = false;
  //if (currentQuestionIndex.value === quiz.lectureQuestions.length + 1) {
  //currentQuestionIndex.value--;
  // showResults.value = true;
  //showBarQuestions.value = false;
  // }
  // ClickedchoiceId.value = 0;
  // valueDisabled.value = false;
};
const handleNextButton = () => {
  //console.log("larrivee"+  clicBouton2 )
  currentQuestionIndex.value++;

  if (currentQuestionIndex.value === quizQuestionLength + 1) {
    currentQuestionIndex.value--;
    showScore.value = true;
    //showBarQuestions.value = false;
  }
  ClickedchoiceId.value = 0;
  valueDisabled.value = false;
};

const questionNumber = computed(
  () => `${currentQuestionIndex.value}/${quizQuestionLength}`
);




</script>

<template>
  <div class="DfhiQuestion">
    <router-link class="homeIcon" to="/Theme">
      <img src="../../src/assets/HomeIcon.svg" title="to up" />
    </router-link>
    <DfhiQuestion
      v-if="!showScore"
      :lectureQuestion="quiz.lectureQuestions[currentQuestionIndex - 1]"
      @selectChoice="onChoiceSelected"
      :ClickedchoiceId="ClickedchoiceId"
      :valueDisabled="valueDisabled"
      :backgroundColor="backgroundColor"
      :questionNumber="questionNumber"
      @ClickNext="handleNextButton"
       @ClickRestart="handleRestartButton"
   
    />
      <ScorePage
      v-else
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
      :quizQuestionLength="quizQuestionLength"
      1/>

  </div>
</template>

<style lang="scss" scoped>
.DfhiQuestion {
  height: calc(100vh - 200px);
  overflow: auto;
  .homeIcon {
    display: block;
    text-align: center;
    //margin-bottom: 10px;
    height: 34px;
    img{
      
    //width: 46px;
    };
  }
  
}

@media (max-width: 320px) {

}
@media (min-width: 320px) and (max-width: 480px) {
  .homeIcon {
  margin-bottom: 9px;
  margin-top: 40px;
  img{
      
      width: 46px;
      }
  }
}

@media (min-width: 480px) and (max-width: 768px) {
.homeIcon {
  margin-bottom: 26px;
  margin-top: 44px;
  img{
      
      width: 60px;
      }
  }
}


@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
   .homeIcon {
  margin-bottom: 26px;
  margin-top: 30px;
  img{
      
      width: 60px;
      }
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
   .homeIcon {
  margin-bottom: 26px;
  margin-top: 30px;
  img{
      
      width: 60px;
      }
  }
}

@media (min-width: 1024px) and (max-width: 1280px) {
   .homeIcon {
  margin-bottom: 26px;
  margin-top: 20px;
  img{
      
      width: 60px;
      }
  }

}
@media (min-width: 1280px) {
   .homeIcon {
  margin-bottom: 18px;
  margin-top: 20px;
  img{
      
      width: 60px;
      }
  }

}
</style>
