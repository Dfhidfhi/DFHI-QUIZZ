<template>
  <div class="container-about-us">
    <router-link class="homeIcon" to="/Theme">
      <img src="../../src/assets/home.svg" title="to up" />
    </router-link>
    <div class="text-about-us">
      <h1>Über uns</h1>
      <p>
        Ich bin Aboubacar Camara, Student am DFHI-ISFATES. Es handelt sich um eine DFHI-Quiz-App zu
        entwickeln, mit der man seine verschiedenen Vorlesungen 
        spielerisch wiederholen kann. Wer möchte, kann diese Gelegenheit nutzen,
        um seine Prüfungen zu bestehen.
      </p>
    <h2>Viel spaß beim Spielen .</h2>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container-about-us {
  color: #797e8b;
  background-color: #f2f2f2;
  width: 90%;
  height: calc(100vh - 200px);
  margin: 0 auto;
  padding: 0 30px 0 30px;
  overflow: auto;
  .homeIcon {
    display: block;
    text-align: center;
    padding-bottom: 20px;
  }

  h1 {
    text-shadow: 3px 3px 6px #797171;

    display: block;
    text-align: center;
    padding-bottom: 10px;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 20px 0px 20px;
    line-height: 28px;

  }
  h2{
    text-shadow: 3px 3px 6px #8aa89d;

    display: block;
    text-align: center;
    padding-top: 88px;
  }
}

@media (max-width: 320px) {
 
}
@media (min-width: 320px) and (max-width: 480px) {
  .container-about-us {
     width: 96%;
     padding: 0 20px 20px 20px;

  }
 
}
@media (min-width: 481px) and (max-width: 768px) {
.container-about-us {
  padding: 0 20px 20px 20px;
}
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
.container-about-us {
  padding: 0 20px 20px 20px;
}
}
@media (min-width: 768px) and (max-width: 1024px) {
 .container-about-us {
  padding: 0 20px 20px 20px;
}
}

@media (min-width: 1025px) and (max-width: 1280px) {

}
@media (min-width: 1281px) {

}


</style>
