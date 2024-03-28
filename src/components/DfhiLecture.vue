<template>
  <div class="dfhiLecture" @click="accessToSubjectQuestion">
    <DfhiLectureBody :lectureName =  selectedLecture.lectureName :lectureImage = selectedLecture.lectureImage :lectureQuestions = selectedLecture.lectureQuestions.length />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import DfhiLectureBody from "./DfhiLectureBody.vue";
const { selectedLecture } = defineProps(["selectedLecture"]);
const routeToQuiz = useRouter();
const accessToSubjectQuestion = () => {
	routeToQuiz.push(`/dfhi-quiz/${selectedLecture.lectureId}`);
};


</script>

<style lang="scss" scoped>
/* options */
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-30px);
  }

  60% {
    transform: translateY(-15px);
  }
}


.dfhiLecture {
  animation-name: bounce;  
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-duration: 5s;
  border-radius: 2%;
  margin: 0 20px 35px 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.08);

  cursor: pointer;

  &:hover{
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 1.08);

  }}

@media (max-width: 320px) {
 
}

/* 
   Most of the Smartphones Mobiles (Portrait)
  
*/

@media (min-width: 320px) and (max-width: 480px) {

}

/* 
  Low Resolution Tablets, Mobiles (Landscape)
  
*/

@media (min-width: 480px) and (max-width: 768px) {

}

/* 
  Tablets, Ipads (landscape)

*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
}

/* 
 Tablets, Ipads (portrait)
 
*/
@media (min-width: 768px) and (max-width: 1024px) {
}

/* 
   Laptops, Desktops
 
*/

@media (min-width: 1024px) and (max-width: 1280px) {
}

/* 
   Desktops
*/

@media (min-width: 1280px) {
}

</style>
