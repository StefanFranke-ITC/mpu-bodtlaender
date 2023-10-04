<template>
  <div v-if="!$store.state.mobile" class="background">
    <div class="background-color" style="width: 100vw">
      <div class="mx-auto" style="max-width: 1800px">
        <!---  Header   -->

        <HeaderComponent></HeaderComponent>

        <!--      Body-->
        <v-lazy transition="slide-y-transition">
          <v-row class="mt-16 d-flex justify-center mx-0" style="max-width: 100%">
            <v-col cols="5">
              <div style="max-width: 90%">

                <v-card class="pa-5"
                        style="background-color: transparent; box-shadow: 0px 0px; overflow-y: scroll; max-height: 70vh; color: #e3dede">
                  <v-card-title>
                    Über Mich
                  </v-card-title>
                  <v-card-text>
                    Ich wurde 1988 im schönen Saarland, genauer gesagt in Sankt Wendel, geboren. Die enge Verbundenheit
                    mit dieser Region hat mein Leben geprägt und meine Wurzeln gestärkt.
                  </v-card-text>
                  <v-card-text>
                    Nach meiner Schulzeit habe ich mich für eine berufliche Laufbahn entschieden, die es mir ermöglicht,
                    anderen Menschen zu helfen und sie auf ihrem Weg zu unterstützen. Ich absolvierte eine Ausbildung
                    zum Heilpraktiker für Psychotherapie und erlangte die Qualifikation zum geprüften psychologischen
                    Berater. Doch meine Leidenschaft für das Lernen und die ständige Weiterentwicklung führten mich auch
                    zur kognitiven Verhaltenstherapie und schließlich zur Zusatzqualifikation als geprüfter MPU-Berater.
                  </v-card-text>
                  <v-card-text>
                    Meine berufliche Reise hat mir nicht nur wertvolles Fachwissen vermittelt, sondern auch Empathie und
                    die Fähigkeit, auf individuelle Bedürfnisse einzugehen. Ich schätze den Austausch mit Menschen und
                    bin stets daran interessiert, Lösungen zu finden, die ihr Leben positiv beeinflussen können.
                  </v-card-text>
                  <v-card-text>
                    Ich freue mich darauf, Sie kennenzulernen und gemeinsam mit Ihnen an Ihren persönlichen Zielen zu
                    arbeiten.
                  </v-card-text>
                  <v-card-text>
                    <v-dialog width="500">
                      <template v-slot:activator="{ props }">
                        <div class="cursor mt-6 d-flex align-center justify-center button-rechts"
                             style="max-width: 220px"
                             v-bind="props">
                          <h3>
                            Termin Vereinbaren
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
                              <v-text-field v-model="vorname" label="Vorname" type="name" variant="outlined">

                              </v-text-field>
                            </v-col>
                            <v-col class="formularinhalte" cols="10">
                              <v-text-field v-model="nachname" label="Nachname" type="name" variant="outlined">

                              </v-text-field>
                            </v-col>
                            <v-col class="formularinhalte" cols="10">
                              <v-text-field v-model="email" label="Email" type="email" variant="outlined">

                              </v-text-field>
                            </v-col>
                            <v-col class="formularinhalte" cols="10">
                              <v-text-field v-model="handynummer" label="Handynummer" type="tel" variant="outlined">

                              </v-text-field>
                            </v-col>

                          </v-row>
                          <v-card-actions class="px-14 mb-6 d-flex justify-space-between">
                            <v-btn
                                text="Senden"
                                @click="sendAppointmentEmail"
                            ></v-btn>
                            <v-btn
                                text="Abbrechen "
                                @click="isActive.value = false"
                            ></v-btn>

                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-card-text>
                </v-card>

              </div>
            </v-col>
            <v-col class="d-flex justify-center" cols="5">
              <div class="profil-bild1">
              </div>
            </v-col>
          </v-row>
        </v-lazy>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import axios from "axios";

export default {
  name: "ÜberMichView",
  data() {
    return {
      vorname: '',
      nachname: '',
      email: '',
      handynummer: '',
    }
  },
  methods: {
    async sendAppointmentEmail() {
      if (this.email !== '' && this.vorname !== '' && this.nachname !== '') {
        try {
          const response = await axios.post('/sendMailAsHTML', {
                "to": this.$store.state.email,
                "subject": this.vorname + " " + this.nachname + " möchte mit dir einen Termin vereinbaren",
                "htmlText": "<div><h3>Hallo Benjamin,</h3><p>" + this.vorname + " " + this.nachname + " möchte mit dir einen neuen Termin vereinbaren. Im Folgenden siehst du seine eingetragenen Daten:</p><p>Vorname: " + this.vorname + "<br>Nachname: " + this.nachname + "<br>Telefonnummer: <a href=\"tel:" + this.handynummer + "\">" + this.handynummer + "</a><br>Email: <a href=\"mailto:" + this.email + "\">" + this.email + "</a></p><br><p>Mit freundlichen Grüßen<br>Dein FastGlobeIT-Team</p><i>Diese E-Mail wurde automatisch erzeugt.</i></div>"
              }
          )
          console.log(response)
          try {
            const response = await axios.post('/sendMailAsHTML', {
                  "to": this.email,
                  "subject": "Sie haben eine Terminanfrage geschickt",
                  "htmlText": `
    <div>
      <h3>
        Hallo ` + this.vorname + ` ` + this.nachname + `
      </h3>
      <p>
        Sie haben eine Terminanfrage an Benjamin Bodtländer verschickt. Es wird sich, so schnell wie möglich, bei Ihnen melden.
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
          this.nachname = 'Benjamin Bodtländer wurde benachrichrigt.'
          this.email = ''
          this.handynummer = ''
        } catch (e) {
          console.log(e)
        }
      }
    }
  },
  components: {HeaderComponent}
}
</script>

<style scoped>
.background {
  background-image: url("../assets/Background.png");
  background-size: cover;
  height: 100%;
  position: fixed;
  width: 100%;
}

.background-color {
  background-image: linear-gradient(to right, #78684F 50%, rgba(0, 255, 0, 0.03) 70%);
  height: 100vh;
  padding-top: 30px;
}

.profil-bild1 {
  height: 40vh;
  width: 100%;
  background-image: url("/src/assets/Bodtländer.jpg");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
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

.cursor {
  color: black;
}

.cursor:hover {
  cursor: pointer;
  color: rgba(255, 176, 1, 0.7) !important;
}

</style>