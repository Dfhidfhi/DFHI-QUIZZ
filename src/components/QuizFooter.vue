
<template>
  <div id="footer">
    <div class="container-links-socialMedia">
      <div class="links">
        <router-link to="/AboutUs"> Über uns </router-link> |
        <a
          href="https://github.com/dfhiquizz/DFHI-QUIZZ.git"
          class="active"
          target="_blank"
          title="Github"
          >Github</a
        >
        | <router-link to="/Copyright"> Datenschutz </router-link> |
        <router-link to="/Kontakt"> Kontakt </router-link>
      </div>

      <div class="socialMedia">
        <p>Folgen Sie uns</p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Besuchen Sie uns auf Facebook "
              ><img
                src="/src/assets/facebook.svg"
                title="Besuchen Sie uns auf Facebook"
            /></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="Besuchen Sie uns auf Linkedin"
              ><img
                src="/src/assets/linkedin.svg"
                title="Besuchen Sie uns auf Linkedin"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="Besuchen Sie uns auf Twitter"
              ><img
                src="/src/assets/twitter.svg"
                title="Besuchen Sie uns auf Twitter"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="horizontal-line">
        <a href="#">
          <img src="/src/assets/chevron-up.svg" title="to up" />
        </a>
      </div>
      <div class="copyright">
        Copyright © 2023 DFHI-Quizz . Alle Rechte vorbehalten. Dieses Material
        ist nur für den Bildungsgebrauch bestimmt, sofern nicht anders
        angegeben.
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  background: #035d86;
  padding: 20px 24px 20px 24px;
  display: flex;
  color: #ffffff;
  font-size: 16px;
  border-radius: 0 0 40% 40%;
  flex-direction: column;

  .container-links-socialMedia {
    display: flex;

    .links {
      width: 82%;
      a {
        color: #ffffff;

        .active {
          color: #bbb2b2;
        }
        &:hover {
          color: #e2dada;
        }
      }
      .router-link {
        color: #ffffff;
      }
      .router-link-active {
        color: #bbb2b2;
        font-weight: bold;
      }
    }

    .socialMedia {
      p {
        position: relative;
        width: 100%;
        text-align: center;
        padding: 0 0 16px 0;
      }
      ul {
        display: flex;
        list-style: none;
        li {
          a {
            margin-left: 8px;
            img {
              opacity: 1;

              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }

  .row {
    .horizontal-line {
      align-items: center;
      justify-content: center;
      display: flex;
      align-content: center;
      background: linear-gradient(
        to right,
        rgba(11, 52, 74, 1) 0,
        rgba(235, 241, 246, 1) 51%,
        rgba(11, 52, 74, 1) 100%
      );
      margin: 30px 0 8px 0;
      height: 1px;
      a {
        background-color: #035d86;
        img {
          opacity: 1;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
    .copyright {
      text-align: center;
      color: #ccc;
      width: 100%;
      font-weight: 400;
      margin-top: 24px;
    }
  }
}

@media (max-width: 320px) {
  #footer {
    padding: 20px 24px 10px 24px;
    font-size: 14px;
    .socialMedia {
      p {
        position: relative;
        width: 100%;
        text-align: center;
        padding: 0 0 16px 0;
      }
      ul {
        display: flex;
        list-style: none;
        font-size: 1px;
       // flex-direction: column;

        li {
          a {
            margin-left: 8px;
            img {
              opacity: 1;
              width: 35px;
              height: 35px;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
}

/* 
   Most of the Smartphones Mobiles (Portrait)
  
*/

@media (min-width: 320px) and (max-width: 480px) {
  #footer {
    font-size: 14px;
    .socialMedia {
      p {
        position: relative;
        width: 100%;
        text-align: center;
        padding: 0 0 16px 0;
      }
      ul {
        display: flex;
        list-style: none;
        li {
          a {
            margin-left: 8px;
            img {
              opacity: 1;
              width: 35px;
              height: 35px;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
}

/* 
  Low Resolution Tablets, Mobiles (Landscape)
  
*/

@media (min-width: 481px) and (max-width: 767px) {
  #footer {
    font-size: 14px;
    .socialMedia {
      p {
        position: relative;
        width: 100%;
        text-align: center;
        padding: 0 0 16px 0;
      }
      ul {
        display: flex;
        list-style: none;
        li {
          a {
            margin-left: 8px;
            img {
              opacity: 1;
              width: 35px;
              height: 35px;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
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
