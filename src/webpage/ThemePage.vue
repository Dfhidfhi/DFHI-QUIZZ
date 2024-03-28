<template>

  <DfhiLectureHeader v-model.trim="search" />

<div class="container-dfhiLecture">

  <div class="ChoicesLectures">
    <DfhiLecture
      v-for="selectedLecture in lectures"
      :key="selectedLecture.lectureId"
      :selectedLecture="selectedLecture"
    />
  </div>

</div>
 
</template>

<script setup>
import DfhiLectureHeader from "../components/DfhiLectureHeader.vue";
import DfhiLecture from "../components/DfhiLecture.vue";
import Lectures_data from "../data/QuizData.json";
import {  ref, watch } from "vue";
const search = ref("");
const lectures = ref(Lectures_data);
watch(search, () => {
  lectures.value = Lectures_data.filter((selectedLecture) =>
    selectedLecture.lectureName.toLowerCase().includes(search.value.toLowerCase())
  );
});


</script>

<style lang="scss" scoped>
.container-dfhiLecture{
height: calc(100vh - 30%);
overflow-y: overlay;
.ChoicesLectures {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 35%;
  margin-top: 40px;
  justify-content: center;
}
}
</style>
