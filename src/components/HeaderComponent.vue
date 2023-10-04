<template>
  <v-row v-if="!$store.state.mobile" class="d-flex justify-center mx-0" style="max-width: 100%">
    <v-col class="cursor" cols="1" style=" max-width: 90px" @click="$router.push('/')">
      <v-img :src="img"
             class=" logo"
             @click="$router.push('/')">
      </v-img>
    </v-col>
    <v-col class="cursor pl-0 d-flex align-center" cols="3" @click="$router.push('/')">
      <div>
        <h2 class="mb-n6">
          MPU Vorbereitung
        </h2>
        <br>
        <p class="text-white">
          B. Bodtländer Psychologischer Berater
        </p>
      </div>
    </v-col>
    <v-col class="d-flex align-center" cols="1">
      <h4 v-if="$route.path === '/mpu'" class="cursor " style="color: #C0C080">
        MPU
      </h4>
      <h4 v-else class="cursor text-white" @click="$router.push('/mpu')">
        MPU
      </h4>
    </v-col>
    <v-col class="d-flex align-center" cols="1">
      <h4 v-if="$route.path === ('/info')" class="cursor " style="color: #C0C080">
        Info
      </h4>
      <h4 v-else class="cursor text-white" @click="$router.push('/info')">
        Info
      </h4>
    </v-col>

    <v-col class="d-flex align-center" cols="1">
      <h4 v-if="$route.path === ('/impressum')" class="cursor" style="color: #C0C080">
        Impressum
      </h4>
      <h4 v-else class="cursor text-white" @click="$router.push('/impressum')">
        Impressum
      </h4>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <div class="cursor d-flex align-center justify-center ueber-mich" @click="$router.push('überMich')">
        <h3>
          Über mich
        </h3>
      </div>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <v-dialog width="500">
        <template v-slot:activator="{ props }">
          <div class="cursor d-flex align-center justify-center button-rechts" style="max-width: 220px" v-bind="props">
            <h3>
              Kontakt
            </h3>
          </div>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card class="pt-4 kontaktformular">
            <v-row class="d-flex justify-center mx-0" style="width: 100%">
              <v-col cols="10">
                <h3>Bitte füllen Sie das Formular aus, und ich werde mich umgehend bei Ihnen melden.</h3>
              </v-col>
              <v-col cols="10">
                <v-text-field v-model="vorname" label="Vorname" variant="outlined"/>
              </v-col>
              <v-col class="formularinhalte" cols="10">
                <v-text-field v-model="nachname" label="Nachname" variant="outlined"/>
              </v-col>
              <v-col class="formularinhalte" cols="10">
                <v-text-field v-model="email" label="Email" variant="outlined"/>
              </v-col>
              <v-col class="formularinhalte" cols="10">
                <v-text-field v-model="handynummer" label="Handynummer" variant="outlined"/>
              </v-col>
              <v-col class="formularinhalte" cols="10">
                <v-textarea v-model="nachricht" label="Nachricht" variant="outlined"/>
              </v-col>

            </v-row>
            <v-card-actions class="px-14 mb-6 d-flex justify-space-between">
              <v-btn
                  text="Senden"
                  @click="sendEmail"
              ></v-btn>
              <v-btn
                  text="Abbrechen "
                  @click="isActive.value = false"
              ></v-btn>

            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
  <v-row v-if="$store.state.mobile" class="mx-0" style="width: 100%;">
    <v-col class="cursor" cols="1" style=" max-width: 90px" @click="$store.state.tab='0'">
      <v-img :src="img"
             class="logo-mobile"
             @click="$store.state.tab='0'">
      </v-img>
    </v-col>
    <v-col class="cursor pl-0 d-flex " cols="7" @click="$store.state.tab='0'">
      <div>
        <h4 class="mb-n6">
          MPU Vorbereitung
        </h4>
        <br>
        <p class="text-white" style="font-size: 10px">
          B. Bodtländer Psychologischer Berater
        </p>
      </div>
    </v-col>
    <v-col class="d-flex align-center">
      <Icon icon="solar:map-arrow-right-bold" style="font-size: 30px; color: rgba(255, 176, 1, 0.7)"/>
    </v-col>
  </v-row>
</template>


<script>
import {Icon} from '@iconify/vue';
import axios from "axios";

export default {
  components: {Icon},
  data() {
    return {
      vorname: '',
      nachname: '',
      email: '',
      handynummer: '',
      nachricht: '',
      img: require("/src/assets/Logo.png")
    }
  },
  methods: {
    async sendEmail() {
      if (this.email !== '' && this.vorname !== '' && this.nachname !== '') {
        try {
          const response = await axios.post('/sendMailAsHTML', {
                "to": this.$store.state.email,
                "subject": this.vorname + " " + this.nachname + " möchte kontakt mit dir aufnehmen.",
                "htmlText": "<div><h3>Hallo Benjamin,</h3><p>" + this.vorname + " " + this.nachname + " möchte kontakt mit dir aufnehmen. Im Folgenden siehst du seine eingetragenen Daten und die dazugehörige Nachricht:</p><p>Vorname: " + this.vorname + "<br>Nachname: " + this.nachname + "<br>Telefonnummer: <a href=\"tel:" + this.handynummer + "\">" + this.handynummer + "</a><br>Email: <a href=\"mailto:" + this.email + "\">" + this.email + "</a><br>Nachricht: <br> <br> " + this.nachricht + "</p><br><p>Mit freundlichen Grüßen<br>Dein FastGlobeIT-Team</p><i>Diese E-Mail wurde automatisch erzeugt.</i></div>"
              }
          )
          console.log(response)
          try {
            const response = await axios.post('/sendMailAsHTML', {
                  "to": this.email,
                  "subject": "Sie haben eine Kontaktanfrage geschickt",
                  "htmlText": `
    <div>
      <h3>
        Hallo ` + this.vorname + ` ` + this.nachname + `
      </h3>
      <p>
        Sie haben eine Kontaktanfrage an Benjamin Bodtländer verschickt. Es wird sich, so schnell wie möglich, bei Ihnen melden.
      </p>
      <p>
        Falls weitere Probleme oder Fragen entstehen, bitten wir Sie, das Kontaktformular auf
        <a href="https://mpu-institut-saar.de/">www.mpu-institut-saar.de</a> auszufüllen
        und diese konkret zu schildern.
      </p>

      <br>
      <p>
        Mit freundlichen Grüßen
        <br>
        <a href="https://fastglobeit.de"> Ihr FastGlobeIT-Team</a>
      </p>
      <i>Diese E-Mail wurde automatisch erzeugt.</i>
    </div>
  `
                }
            )
            console.log(response)
          } catch (e) {
            console.log(e)
          }

          this.vorname = 'Vielen Dank für Ihre Anfrage.'
          this.nachname = 'Benjamin Bodtländer wurde benachrichtigt.'
          this.email = ''
          this.handynummer = ''
          this.nachricht = ''
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
}
</script>

<style>
.cursor:hover {
  cursor: pointer;
  color: rgba(255, 176, 1, 0.7) !important;
  text-shadow: 1px 1px black;
}

.logo-mobile {
  border: white solid 1px;
  border-radius: 100%;
  background-color: white;
  height: 39px;
  width: 39px;
}

.ueber-mich {
  border-radius: 30px;
  border: 2px solid #C0C080;
  height: 50px;
  width: 100%;
  box-shadow: 4px 4px 7px black;
}

.logo {
  border: white solid 1px;
  border-radius: 100%;
  background-color: white;
  height: 70px;
  width: 70px;
}

.button-rechts {
  border-radius: 30px;
  border: 2px solid black;
  height: 50px;
  width: 100%;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.66) 20%, rgba(255, 176, 1, 0.7) 100%);
  backdrop-filter: blur(4px);
  box-shadow: 4px 4px 7px black;

}

.kontaktformular {
  height: 700px;
  width: 500px;
  background-color: transparent;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.70) 20%, rgba(255, 176, 1, 0.70) 100%);
  backdrop-filter: blur(4px);
  border: solid 2px rgba(3, 3, 3, 0.93);
  border-radius: 30px !important;
}

.kontaktformular-mobile {
  height: 600px;
  width: 350px;
  background-color: transparent;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.70) 20%, rgba(255, 176, 1, 0.70) 100%);
  backdrop-filter: blur(4px);
  border: solid 2px rgba(3, 3, 3, 0.93);
  border-radius: 30px !important;
}

.kontaktformular-mobile1 {
  height: 65vh;
  width: 90%;
  background-color: transparent;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.70) 20%, rgba(255, 176, 1, 0.70) 100%);
  backdrop-filter: blur(4px);
  border: solid 2px rgba(3, 3, 3, 0.93);
  border-radius: 30px !important;
}

.formularinhalte {
  margin-top: -60px;
}

.formularinhalte-mobile {
  margin-top: -35px;
}

</style>