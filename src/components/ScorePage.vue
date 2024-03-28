<template>
    <div class="score">
        <p>die gesammelten Punkte</p>
        <h1>{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }} = {{ barPercentage }}</h1>
        <router-link class="Themen-Seite" to="/Theme"><button>Zur Themen-Seite</button></router-link>
    </div>>
</template>

<script setup>
import { defineProps } from "vue";

import {  computed } from "vue";

const { numberOfCorrectAnswers, quizQuestionLength } = defineProps([

    "numberOfCorrectAnswers", "quizQuestionLength"
]);

const barPercentage = computed(
    () => `${Math.round(((numberOfCorrectAnswers / quizQuestionLength) * 100) * 100) / 100}%`
);


</script>

<style lang="scss" scoped>
.score {
    display: flex;
    flex-wrap: wrap;

    h1 {
        background: red;
        width: 76%;
        //display: flex;
        //flex-direction: column;
        color: #797e8b;
        background-color: #f2f2f2;
        width: 60%;
        font-size: 40px;
        height: 100px;
        margin: 0 auto;
        padding: 20px 30px 0 30px;
        overflow: auto;
        margin-top: 18px;
        text-align: center;
        border-radius: 12px;
    }

    p {
        justify-content: center;
        align-items: center;
        color: #f2f2f2;
        font-size: 30px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        width: 70%;
        margin: 30px auto;
        padding: 30px 40px 30px 30px;
        text-align: center;
        height: 40px;
    }

    button {
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        padding: 10px 12px 10px 12px;
        border-radius: 4px;
        background: #05396b;
        color: #fff;
        border: 1px solid #05396b;
        font-weight: bold;
        margin: 20px auto;
        align-items: center;
        border-radius: 12px;


        //width: 70%;

    }

    a.Themen-Seite {
        flex-basis: 100%;
        margin-top: 30px;
    }

}

@media (max-width: 320px) {}

@media (min-width: 320px) and (max-width: 480px) {
    .container-about-us {
        width: 96%;
        padding: 0 20px 20px 20px;

    }

}

@media (min-width: 481px) and (max-width: 768px) {}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}

@media (min-width: 768px) and (max-width: 1024px) {}

@media (min-width: 1025px) and (max-width: 1280px) {}

@media (min-width: 1281px) {}
</style>