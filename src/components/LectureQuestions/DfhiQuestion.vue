
<template>
  <div class="FrageBox">
    <div class="question-container">
      <h1 class="FrageText">
        {{ lectureQuestion.text }}
      </h1>
    </div>

    <div class="choices-container">
      <div
        v-for="choice in lectureQuestion.choices"
        :key="choice.id"
        class="choice"
        @click="emitSelectedchoice(choice.isCorrect, choice.id)"
      >
        <p class="choice-label">{{ choice.label }}</p>
        <button
          :disabled="valueDisabled"
          :class="{
            active:
              ClickedchoiceId === choice.id && backgroundColor === 'green',
            red: ClickedchoiceId === choice.id && backgroundColor === 'red',
          }"
          class="choice-value"
        >
          <span>{{ choice.text }}</span>
        </button>
      </div>
    </div>

    <div class="button-container">
      <button @click="handleClickRestart">
        <img class="restart" src="../../assets/restart.svg" alt="Circle" />
      </button>
      <h4>{{ questionNumber }}</h4>
      <button @click="handleClickNext">
        <img class="restart" src="../../assets/next.svg" alt="Circle" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits} from "vue";

// on definit ce quon souhaite envoyé
const emit = defineEmits(["selectChoice", "ClickNext", "ClickRestart"]);
const emitSelectedchoice = (isCorrect, iD) => {
  console.log(isCorrect + "ettt" + iD);
  emit("selectChoice", isCorrect, iD);
};
//const emit_ClickNext = defineEmits(['Clicked'])

const handleClickNext = () => {
  const ClickedNext = "ClickedNext";
  emit("ClickNext", ClickedNext);
};
const handleClickRestart = () => {
  const ClickedRestart = "ClickedRestart";
  emit("ClickRestart", ClickedRestart);
};

// recoit
const {
  lectureQuestion,
  questionNumber,
  valueDisabled,
  ClickedchoiceId,
  backgroundColor,
} = defineProps([
  "lectureQuestion",
  "questionNumber",
  "valueDisabled",
  "ClickedchoiceId",
  "backgroundColor",
]);

//console.log(valueDisabled);
//console.log(lectureQuestion);
//console.log("valeur clicked " + ClickedchoiceId);
//console.log(backgroundColor);
</script>


<style lang="scss" scoped>
@keyframes hueVibration {
  0% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(40deg);
  }
  100% {
    filter: hue-rotate(0deg);
  }
}
.FrageBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  padding: 0 0 10px;

  .active {
    animation: hueVibration 2s infinite;
    background: green !important ;
    color: #ffffff;
  }
  .red {
    animation: hueVibration 2s infinite;
    background: red !important;
    color: #ffffff;
  }
  .question-container {
    display: flex;
    justify-content: center;

    align-items: center;
    justify-content: center;
    width: 500px;
    .FrageText {
      //margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #f2ecfa;
      margin-bottom: 20px;
      background: #3492ba82;
      border-radius: 12px;
      margin-right: 60px;
      //margin-left: 60px;

      margin-bottom: 50px;
      //min-height: 84px;
      padding: 0 30px 0 30px;
      //font-size: 20px;
      line-height: 130%;
      padding-bottom: 0;
    }
  }
  .choices-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    // height: 200px;
    //margin: 8px 10px 0 24px;

    .choice {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      // margin-bottom: 20px;
      cursor: pointer;
      width: 50%;
      height: 100px;
      box-sizing: border-box;

      .choice-label {
        // padding-top: 10px;
        margin-top: 25px;
        margin-left: 5px;

        background-color: #bfdf9f;
        //width: 50px;
        height: 40px;
        //font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .choice-value {
        background-color: rgb(244, 239, 239);
        // width: 88%;
        font-size: 14px;
        padding: 0 20px;
        cursor: pointer;
        visibility: visible;
        border-radius: 12px;
        span {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .button-container {
    justify-content: space-between;
    display: flex;
    flex-direction: row;

    padding-left: 40px;
    padding-right: 6px;
    h4 {
      border-radius: 11px;
      color: white;
      margin-top: 5px;
      font-size: 22px;
      border: solid white 1px;
      height: 32.6px;
      width: 46.6px;
      vertical-align: middle;
      text-align: center;
    }
    .restart {
      //width: 38px;
      //height: 38px;
    }
  }
}
@media (max-width: 320px) {
  .FrageBox {
    .question-container {
    }
  }
  .choices-container {
    height: 200px;
    .choice {
      .choice-label {
      }

      .choice-value {
        width: 88%;
      }
    }
  }

  .button-container {
    h4 {
      height: 32.6px;
      width: 46.6px;
    }
    .restart {
      width: 36px;
      height: 36px;
    }
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  
.FrageBox {
    .question-container {
      width: 76%;
      height: 100px;
      //max-width: 590px;

      .FrageText {
        // margin-left: 30px;
        width: 100%;
        font-size: 12px;
        height: 84px;
        
        //min-height: 80px;
        margin-bottom: 0;
        margin-right: 0;
      }
    }
     .choices-container {
    margin: 8px 10px 0 10px;
    width: 78%;
    height: 228px;
    .choice {
      .choice-label {
        width: 30px;
        font-size: 20px;
      }

      .choice-value {
        width: 70%;
        height: 104px;
        span {
          font-size: 12px;
        }
      }
    }
  }

  .button-container {
      h4 {
        margin: 5px 10px 0px 10px;
        height: 30.6px;
        width: 45.6px;
      }
      .restart {
        width: 40px;
        height: 40px;
      }
    }
  }
}
@media (min-width: 480px) and (max-width: 768px) {
  .FrageBox {
    .question-container {
      width: 76%;
      height: 100px;
      //max-width: 590px;

      .FrageText {
        // margin-left: 30px;
        width: 100%;
        font-size: 12px;
        height: 84px;
        font-size: 14px;
        min-height: 80px;
        margin-bottom: 0;
        margin-right: 0;
      }
    }
     .choices-container {
    margin: 8px 10px 0 10px;
    width: 78%;
    height: 262px;
    .choice {
      .choice-label {
        width: 30px;
        font-size: 20px;
      }

      .choice-value {
         width: 70%;
        height: 104px;
        span {
          font-size: 13px;
        }
      }
    }
  }

  .button-container {
      h4 {
        margin: 5px 10px 0px 10px;
        height: 30.6px;
        width: 45.6px;
      }
      .restart {
        width: 40px;
        height: 40px;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
   .FrageBox {
    .question-container {
      width: 76%;
      height: 100px;
      //max-width: 590px;

      .FrageText {
        // margin-left: 30px;
        width: 100%;
        font-size: 14px;
        height: 84px;
        font-size: 18px;
        min-height: 80px;
        margin-bottom: 0;
        margin-right: 0;
      }
    }
     .choices-container {
    margin: 8px 10px 0 10px;
    width: 78%;
    height: 272px;
    .choice {
      .choice-label {
        width: 30px;
        font-size: 20px;
      }

      .choice-value {
        width: 82%;
        height: 104px;
        span {
          font-size: 16px;
        }
      }
    }
  }

  .button-container {
      h4 {
        margin: 5px 10px 0px 10px;
        height: 30.6px;
        width: 45.6px;
      }
      .restart {
        width: 40px;
        height: 40px;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
   .FrageBox {
    .question-container {
      width: 76%;
      height: 100px;
      //max-width: 590px;

      .FrageText {
        // margin-left: 30px;
        width: 100%;
        font-size: 14px;
        height: 84px;
        font-size: 18px;
        min-height: 80px;
        margin-bottom: 0;
        margin-right: 0;
      }
    }
     .choices-container {
    margin: 8px 10px 0 10px;
    width: 78%;
    height: 272px;
    .choice {
      .choice-label {
        width: 30px;
        font-size: 20px;
      }

      .choice-value {
        width: 82%;
        height: 104px;
        span {
          font-size: 16px;
        }
      }
    }
  }

  .button-container {
      h4 {
        margin: 5px 10px 0px 10px;
        height: 30.6px;
        width: 45.6px;
      }
      .restart {
        width: 40px;
        height: 40px;
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1280px) {
  .FrageBox {
    .question-container {
      width: 76%;
      height: 100px;
      //max-width: 590px;

      .FrageText {
        // margin-left: 30px;
        width: 100%;
        font-size: 14px;
        height: 84px;
        font-size: 18px;
        min-height: 80px;
        margin-bottom: 0;
        margin-right: 0;
      }
    }
     .choices-container {
    margin: 8px 10px 0 10px;
    width: 78%;
    height: 272px;
    .choice {
      .choice-label {
        width: 30px;
        font-size: 20px;
      }

      .choice-value {
        width: 82%;
        height: 104px;
        span {
          font-size: 16px;
        }
      }
    }
  }

  .button-container {
      h4 {
        margin: 5px 10px 0px 10px;
        height: 30.6px;
        width: 45.6px;
      }
      .restart {
        width: 40px;
        height: 40px;
      }
    }
  }
  }
@media (min-width: 1280px) {
  .FrageBox {
    .question-container {
      width: 76%;
      height: 100px;
      //max-width: 590px;

      .FrageText {
        // margin-left: 30px;
        width: 100%;
        font-size: 14px;
        height: 84px;
        font-size: 18px;
        min-height: 80px;
        margin-bottom: 0;
        margin-right: 0;
      }
    }
     .choices-container {
    margin: 8px 10px 0 10px;
    width: 78%;
    height: 272px;
    .choice {
      .choice-label {
        width: 30px;
        font-size: 20px;
      }

      .choice-value {
        width: 82%;
        height: 104px;
        span {
          font-size: 16px;
        }
      }
    }
  }

  .button-container {
      h4 {
        margin: 5px 10px 0px 10px;
        height: 30.6px;
        width: 45.6px;
      }
      .restart {
        width: 40px;
        height: 40px;
      }
    }
  }
 
}
</style>
