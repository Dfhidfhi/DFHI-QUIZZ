<template>

    <div v-if="!feedBack" class="container-contact">
        <div class="infoContact">
            <router-link class="homeIcon" to="/Theme">
                <img src="../../src/assets/home.svg" title="to up" />
            </router-link>
            <h1>Kontakt</h1>
            <h5>
                Sie haben eine Idee, Anregung oder möchten gern ein Feedback mitteilen
                Schicken Sie uns eine Nachricht über folgendes Formular !
            </h5>
        </div>
        <div class="container">
            <form @submit.prevent="handleSubmit">
                <label>Name</label>
                <input v-model="name" name="name" placeholder="">
                <span v-if="errors.name" class="errors">{{ errors.name }}</span>
                <br />
                <label>Email</label>
                <input v-model="email" name="email">
                <span v-if="errors.email" class="errors">{{ errors.email }}</span>
                <br />
                <label>Message</label>
                <textarea name="message" v-model="message">

          </textarea>

                <div class="div-btn">
                    <button class="btn" type="submit" value="Send">SUBMIT</button>
                </div>

            </form>
        </div>


    </div>

    <div class="feedBack" v-else>

        Formular erfolgreich gesendet. Wir werden Ihre Anfrage schnellstmöglich bearbeiten.
        <router-link class="ToQuiz" to="/Theme">
            <div>Go back to Quiz</div>
        </router-link>
    </div>


</template>

<script setup>
import { ref } from "vue"

const feedBack = ref(false);
const name = ref('')
const email = ref('')
const message = ref('')
const errors = ref({})
const handleSubmit = () => {
    errors.value = {}

    if (!name.value) {
        errors.value.name = 'Geben Sie den Name ein '
    }

    if (!email.value) {
        errors.value.email = 'Geben Sie das Email ein '

    } else if (!isValidEmail(email.value)) {
        console.log("nn")
        errors.value.email = 'Geben Sie das richtige Email ein '

    }
    else {

        feedBack.value = true
    }
}

const isValidEmail = (email) => {
    const RegexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
    return RegexEmail.test(email);

}



</script>

<style lang="scss" scoped>
.container-contact {
    display: flex;
    flex-direction: column;
    color: #797e8b;
    background-color: #f2f2f2;
    width: 70%;
    // height: calc(100vh - 200px);
    margin: 0 auto;
    padding: 0 50px 0 50px;
    overflow: auto;

    .infoContact {
        display: block;
        text-align: center;
        //letter-spacing: 1px;
        //word-spacing: 2px;
        //line-height: 1.5;
        //display: flex;
        //flex-direction: column;
        // justify-content: center;
        //align-items: center;
        //padding: 20px 40px 0px 40px;

        //line-height: 28px;

        h1 {
            text-shadow: 3px 3px 6px #797171;

            display: block;
            text-align: center;
            padding-bottom: 8px;
        }

        .homeIcon {
            display: block;
            text-align: center;
            //padding-bottom: 20px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        label {
            padding-left: 10px;

        }
        input, textarea {
            width: 100%;
            padding: 8px;
            border-radius: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            margin-top: 6px;
            margin-bottom: 10px;
            resize: vertical;
            font-size: 14px;
        }

        span.errors {
            color: red;
            padding-bottom: 10px;
        }

        .div-btn {

            display: flex;
            flex-direction: column;
            align-items: center;

            .btn {
                height: 30px;
                width: 80px;
                padding-top: 8px;
                align-items: center;
                display: flex;
                flex-direction: column;
                transition: transform, opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                margin: 20px;
                cursor: pointer;
                border-radius: 4px;
                background: #05396b;
                color: #fff;
                border: 1px solid #05396b;
                font-weight: bold;

                &:hover {
                    color: #000;
                    background: #fff;
                    border: 1px solid #05396b;
                }
            }
        }


    }
}


@media (max-width: 320px) {}

/* 
   Most of the Smartphones Mobiles (Portrait)
  
*/

@media (min-width: 320px) and (max-width: 480px) {
    .container-contact {
        height: 454px;
        width: 94%;
        font-size: 12px;

        .infoContact {
           

            .homeIcon {
                padding-bottom: 10px;
            }
        }
    }
}

/* 
  Low Resolution Tablets, Mobiles (Landscape)
  
*/

@media (min-width: 480px) and (max-width: 768px) {}

/* 
  Tablets, Ipads (landscape)

*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}

/* 
 Tablets, Ipads (portrait)
 
*/
@media (min-width: 768px) and (max-width: 1024px) {}

/* 
   Laptops, Desktops
 
*/

@media (min-width: 1024px) and (max-width: 1280px) {}

/* 
   Desktops
*/

@media (min-width: 1280px) {}




//************************************************** */

* {
    box-sizing: border-box;
}

/*
label {
  float: left;
}
input[type=text], [type=email], textarea {
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  font-size: 16px;
  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;

    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #b8c7b9;
}
}*/



/** .container {
  display: block;
  margin:auto;
  text-align: center;
  background-color: #f2f2f2;
  padding: 20px 40px 20px 40px; 
  height: 100vh;
  width: 50%;

 
}*/


.feedBack {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #6c6a8b;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    border-radius: 80px;
    border: #6c6a8b 2px solid;
    background-color: #f2f2f2;
    width: 70%;
    margin: auto;
    padding: 0 50px 0 50px;
    overflow: auto;
    height: 200px;

    .ToQuiz {
        padding-top: 30px;
        color: gray;
    }
}
</style>