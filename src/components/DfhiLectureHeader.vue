<template>
  <header>
    <router-link class="homeIcon" to="/">
        <img src="../../src/assets/home_theme.svg" title="to up" />
      </router-link>
    <h1>DFHI-Quizz</h1>
    <input :value="modelValue" 
     @input="$emit('update:modelValue',
     $event.target.value)"  placeholder="Suche...."
      />
  </header>
</template>

<script setup>

 defineProps(['modelValue'])
 defineEmits(['update:modelValue'])
 

</script>

<style lang="scss" scoped>
header {

  padding: 30px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #035d86;

  .homeIcon {
      

    }
  h1 {

    font-weight: bold;

    color: #a3a2a4;

  }
  input {
    width: 50%;
    border: none;
    outline: none;
    background-color: rgba(137, 121, 140, 0.15);
    padding: 10px;
    font-size: 24px;
    border-radius: 5px;
    color: #ffffff;
  }
}
@media (max-width: 320px) {
 
}

/* 
   Most of the Smartphones Mobiles (Portrait)
  
*/

@media (min-width: 320px) and (max-width: 480px) {

  h1 {
    font-size: 33px;
    text-align: center;
    font-weight: bold;;
    color: #a3a2a4;

  }


}

/* 
  Low Resolution Tablets, Mobiles (Landscape)
  
*/

@media (min-width: 480px) and (max-width: 768px) {
   h1 {
    font-size: 42px;
    font-weight: bold;
    //margin-right: 30px;
    color: #a3a2a4;

  }
}

/* 
  Tablets, Ipads (landscape)

*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
   h1 {
    font-size: 42px;
    font-weight: bold;
    margin-right: 30px;
    color: #a3a2a4;

  }
}


/* 
 Tablets, Ipads (portrait)
 
*/
@media (min-width: 768px) and (max-width: 1024px) {
   h1 {
    font-size: 42px;
    font-weight: bold;
    margin-right: 30px;
    color: #a3a2a4;

  }
}

/* 
   Laptops, Desktops
 
*/

@media (min-width: 1024px) and (max-width: 1280px) {
   h1 {
    font-size: 42px;
    font-weight: bold;
    margin-right: 30px;
    color: #a3a2a4;

  }
}

/* 
   Desktops
*/

@media (min-width: 1280px) {
   h1 {
    font-size: 42px;
    font-weight: bold;
    margin-right: 30px;
    color: #a3a2a4;

  }
}
</style>
