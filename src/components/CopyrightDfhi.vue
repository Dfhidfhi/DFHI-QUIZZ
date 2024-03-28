<template>
  <div class="container-data-privacy">
    <router-link class="homeIcon" to="/Theme">
      <img src="../../src/assets/home.svg" title="to up" />
    </router-link>
    <div class="infoDataPrivacy">
      <h1>Datenschutz</h1>
      <p class="ContactPrivacy">
        Name und Anschrift des Verantwortlichen Kontaktdaten des
        Datenschutzbeauftragten Allgemeines zur Datenverarbeitung Rechte der
        betroffenen Person Bereitstellung der Webseite. Verantwortlichen Der
        Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO) und
        anderer datenschutzrechtlicher Bestimmungen ist:
      </p>
      <div class="FooterContactPrivacy">
        <p>DFHI-Quizz GmbH</p>
        <p>Bayernstrasse. 100</p>
        <p>66281 Bulzbach</p>
        <p>Deutschland</p>
        <p>08554/5644564931</p>
        <p>dfhi-quiz@gmail.com</p>
        <p>https://dfhi-quiz.com</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container-data-privacy {
  color: #797e8b;
  background-color: #f2f2f2;
  width: 90%;
  height: calc(100vh - 200px);
  margin: 0 auto;
  padding: 0 30px 20px 30px;
  overflow: auto;

  .homeIcon {
    display: block;
    text-align: center;
    padding-bottom: 20px;
  }

  .infoDataPrivacy {
    h1 {
      text-shadow: 3px 3px 6px #797171;
      // font-size: 190%;
      display: block;
      text-align: center;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    .ContactPrivacy {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-top: 20px;
      line-height: 28px;
    }

    .FooterContactPrivacy {
      padding-top: 68px;
      font-size: 100%;
      line-height: 20px;
    }
  }
}

@media (max-width: 320px) {
  h1 {
    font-size: 150%;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .container-data-privacy {
    padding: 0 20px 20px 20px;
  h1 {
    font-size: 180%;
  }
  .ContactPrivacy {
    font-size: 90%;
  }}
}
@media (min-width: 480px) and (max-width: 768px) {
  h1 {
    font-size: 190%;
  }
  .ContactPrivacy {
    font-size: 98%;
  }
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  h1 {
    font-size: 190%;
  }
  .ContactPrivacy {
    font-size: 114%;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  h1 {
    font-size: 190%;
  }
  .ContactPrivacy {
    font-size: 114%;
  }
}
@media (min-width: 1024px) and (max-width: 1280px) {
  h1 {
    font-size: 150%;
  }
}
@media (min-width: 1280px) {
  h1 {
    font-size: 190%;
  }
  .ContactPrivacy {
    font-size: 114%;
  }
}
</style>
