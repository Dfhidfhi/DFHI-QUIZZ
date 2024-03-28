<template>
  <div class="dfhiLecturetBody">
    <h1>{{ lectureName }}</h1>
    <img :src="lectureImage" alt="lectureImage" />
    <h2>{{ lectureQuestions }} Fragen</h2>
  </div>
</template>

<script setup>
defineProps(["lectureName", "lectureImage", "lectureQuestions"]);
</script>

<style lang="scss" scoped>
.dfhiLecturetBody {
  width: 200px;

  padding: 0 5px 30px 0;
  color: #ffffff;
  text-align: center;

  h1 {
    font-size: 20px;
    margin-bottom: 5px;
  }
  h2 {
    font-weight: bold;
  }
  img {
    width: 150px;
    height: 150px;
    margin: 0;
    border-radius: 50%;
    overflow: hidden;
  }
}
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

@media (min-width: 481px) and (max-width: 767px) {
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

@media (min-width: 1025px) and (max-width: 1280px) {
}

/* 
   Desktops
*/

@media (min-width: 1281px) {
}
</style>
