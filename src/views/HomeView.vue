<template>
  <div v-if="!$store.state.mobile" class="background">
    <div class="background-color">
      <!---  Header   -->
        <HeaderComponent></HeaderComponent>


      <!---  body   -->
        <v-row style="max-width: 100%" class="mt-16 d-flex justify-center mx-0">
        <v-col  cols="5">
            <div style="max-width: 90%">
            <h1 v-if="!$store.state.tabletHorizontal" class="text-white">
                Willkommen beim Institut <br> für MPU-Beratung und<br>  Suchtprävention <br> im Saarland.
            </h1>
                <h3 v-if="$store.state.tabletHorizontal" class="text-white">
                    Willkommen beim Institut <br> für MPU-Beratung und<br>  Suchtprävention <br> im Saarland.
                </h3>
            <p v-if="!$store.state.tabletHorizontal" class="text-white mt-10">
                Ihr Ansprechpartner rund um das Thema Medizinisch-Psychologische Untersuchung (MPU).
            </p>
                <p v-if="$store.state.tabletHorizontal" class="text-white mt-3">
                    Ihr Ansprechpartner rund um das Thema Medizinisch-Psychologische Untersuchung (MPU).
                </p>
            <p class="text-white mt-4">
                In der MPU-Vorbereitung gehe ich mit Ihnen den gleichen Weg, den der
                Gutachter mit Ihnen im Gespräch beschreitet.
            </p>
                <v-dialog width="500">
                    <template v-slot:activator="{ props }">
                        <div  v-bind="props" style="max-width: 220px" class="cursor mt-6 d-flex align-center justify-center button-rechts">
                            <h3>
                                Termin Vereinbaren
                            </h3>
                        </div>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card class="pt-4 kontaktformular">
                            <v-row  style="width: 100%" class="d-flex justify-center mx-0">
                                <v-col  cols="10">
                                    <h3>Bitte füllen Sie das Formular aus, und ich werde mich umgehend bei Ihnen melden.</h3>
                                </v-col>
                                <v-col  cols="10">
                                    <v-text-field variant="outlined" type="name" label="Vorname">

                                    </v-text-field>
                                </v-col>
                                <v-col class="formularinhalte" cols="10">
                                    <v-text-field variant="outlined" type="name" label="Nachname">

                                    </v-text-field>
                                </v-col>
                                <v-col class="formularinhalte" cols="10">
                                    <v-text-field variant="outlined" type="email" label="Email">

                                    </v-text-field>
                                </v-col>
                                <v-col class="formularinhalte" cols="10">
                                    <v-text-field variant="outlined" type="tel" label="Handynummer">

                                    </v-text-field>
                                </v-col>

                            </v-row>
                            <v-card-actions class="px-14 mb-6 d-flex justify-space-between">
                                <v-btn
                                        text="Senden"
                                        @click="isActive.value = false"
                                ></v-btn>
                                <v-btn
                                        text="Abbrechen "
                                        @click="isActive.value = false"
                                ></v-btn>

                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </div>
        </v-col>
        <v-col class="d-flex justify-center" cols="5">
            <div class="profil-bild">
            </div>
        </v-col>
      </v-row>
        <!---  footer   -->
        <v-row style="max-width: 100%" class="mt-16 d-flex justify-center mx-0">
            <v-col cols="10">
                <v-row  style="max-width: 100%" :class="$store.state.tabletHorizontal ? 'footer-tablet' : 'footer' " class="footer mx-0">
                    <v-col class="d-flex justify-center align-center">
                        <Icon class="ml-12" style="font-size: 40px" icon="streamline:phone-telephone-android-phone-mobile-device-smartphone-iphone" />
                        <div class="text-center" style="width: 100%">
                            <h2 v-if="!$store.state.tabletHorizontal">
                                Ruf mich an
                            </h2>
                            <h4 v-if="$store.state.tabletHorizontal">
                                Ruf mich an
                            </h4>
                            <h4>
                                <a class="text-black" target="_blank" href="tel:+4915121225525">
                                    015121225525
                                </a>
                            </h4>
                        </div>
                    </v-col>
                    <v-divider class="border-opacity-100" vertical="true"></v-divider>
                    <v-col class="d-flex align-center">
                        <Icon style="font-size: 40px" class="ml-5" icon="line-md:email" />
                        <div class="text-center" style=" width: 100%" >
                        <h2 v-if="!$store.state.tabletHorizontal">
                            Schreib mir eine Mail
                        </h2>
                            <h4 v-if="$store.state.tabletHorizontal">
                                Schreib mir eine Mail
                            </h4>
                        <h4 >
                            <a class="text-black" target="_blank" href="mailto:info@example.com">
                            Info@MPU-Institut-Saar.de
                            </a>
                        </h4>

                        </div>
                    </v-col >
                    <v-divider class="border-opacity-100" vertical="true"></v-divider>
                    <v-col class="d-flex align-center">
                        <Icon  style="font-size: 40px" class="ml-5" icon="tdesign:location" />
                        <div class="text-center" style=" width: 100%" >
                            <h2 v-if="!$store.state.tabletHorizontal">
                                So findest du mich
                            </h2>
                            <h4 v-if="$store.state.tabletHorizontal">
                                So findest du mich
                            </h4>
                            <h4 >
                                <a class="text-black" target="_blank" href="https://www.google.com/maps/place/Institut+f%C3%BCr+MPU-Beratung+und+Suchtpr%C3%A4vention+St.Wendel+Saar/@49.4682475,7.1737616,17z/data=!3m1!5s0x4795c0274e5a43e3:0xd195be627346ce6b!4m15!1m8!3m7!1s0x4795c02751fedd21:0xa98259caf324f91d!2sAlter+Woog+13,+66606+St.+Wendel!3b1!8m2!3d49.4682475!4d7.1737616!16s%2Fg%2F11c25gpd9k!3m5!1s0x6f4b9a15b5480a27:0x7e39569ecef92420!8m2!3d49.4682475!4d7.1737616!16s%2Fg%2F11pvcv2d88?entry=ttu">
                                    Alter Wog 13, 66606 Sankt Wendel
                                </a>
                            </h4>

                        </div>

                    </v-col>

                </v-row>
            </v-col>
        </v-row>
    </div>
  </div>
  <div v-if="$store.state.mobile">

  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import HeaderComponent from "@/components/HeaderComponent.vue";
import axios from "axios";
export default ({
  name: 'HomeView',
  data() {
    return {
      vorname: '',
      nachname: '',
      email: '',
      handynummer: '',
    }
  },
    created() {
    },
    mounted() {

    },
    methods:{
      async sendAppointmentEmail() {
        try {
          const response = await axios.post('/sendMailAsHTML', {
                "to": this.$store.state.email,
                "subject": this.vorname +" "+ this.nachname +" möchte mit dir einen Termin vereinbaren",
                "htmlText": "<div><h3>Hallo Benjamin,</h3><p>"+this.vorname +" "+ this.nachname+ " möchte mit dir einen neuen Termin vereinbaren. Im Folgenden siehst du seine eingetragenen Daten:</p><p>Vorname: "+this.vorname+"<br>Nachname: "+this.nachname+"<br>Telefonnummer: <a href=\"tel:"+this.handynummer+"\">"+this.handynummer+"</a><br>Email: <a href=\"mailto:"+this.email+"\">"+this.email+"</a></p><br><p>Mit freundlichen Grüßen<br>Dein FastGlobeIT-Team</p><i>Diese E-Mail wurde automatisch erzeugt.</i></div>"
              }
          )
          console.log(response)
        } catch (e) {
          console.log(e)
        }

        try {
          const response = await axios.post('/sendMailAsHTML', {
                "to": this.email,
                "subject": "Sie haben eine Terminanfrage geschickt",
                "htmlText": `
    <div>
      <h3>
        Hallo `+this.vorname+` `+this.nachname+`
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
      },
        resize() {
            window.addEventListener('resize', this.checkMobileView);
        },
        checkMobileView() {
            console.log('yes')
            if (window.innerWidth >= 1800) {
                this.wide = true;
                this.$store.state.wide = true;
            } else {
                this.wide = false;
                this.$store.state.wide = false;

            }
            if (window.innerWidth <= 1050) {
                this.mobile = true;
                this.$store.state.mobile = true;
            } else {
                this.mobile = false;
                this.$store.state.mobile = false;

            }
            if (window.innerWidth <= 1300) {
                this.tabletHorizontal = true
                this.$store.state.tablet = true
            } else {
                this.tabletHorizontal = false
                this.$store.state.tablet = false
            }
        }
    },
  components: {
      Icon,HeaderComponent
  },
});
</script>
<style scoped>
.background {
  background-image: url("../assets/Background.png");
  background-size: cover;
  height: 100%;
  position: fixed;
  width: 100%;
}
.background {
    background-image: url("../assets/Background.png");
    background-size: cover;
    height: 100%;
    position: fixed;
    width: 100%;
}
.background-color{
  background-image: linear-gradient(to right, #78684F 50%, rgba(0, 255, 0, 0.03) 70%);
  height: 100vh;
  padding-top: 30px;
}
.logo{
  border: white solid 1px;
  border-radius: 100%;
  background-color: white;
  height: 70px;
  width: 70px;
}
.ueber-mich{
  border-radius: 30px;
  border: 2px solid #C0C080;
  height: 50px;
  width: 100%;
  box-shadow: 4px 4px 7px black;
}

.button-rechts{
  border-radius: 30px;
  border: 2px solid black;
  height: 50px;
  width: 100%;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.66) 20%, rgba(255, 176, 1, 0.7) 100%);
  backdrop-filter: blur(4px);
  box-shadow: 4px 4px 7px black;

}
.profil-bild{
  height: 40vh;
  width: 100%;
  background-image: url("https://mpu-institut-saar.de/wp-content/uploads/2022/06/999543c1-1-2048x1367.jpg");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
}

.footer{
    margin-top: 4vh;
    border: 2px solid black;
    height: 15vh;
    border-radius: 100px;
    background-image: linear-gradient(to right, rgba(192, 192, 128, 0.51) 50%, rgba(255, 176, 1, 0.51) 70%);
    backdrop-filter: blur(4px);
    box-shadow: 4px 4px 15px black;
    padding: 20px;
}
.footer-tablet{
    margin-top: 4vh;
    border: 2px solid black;
    height: 15vh;
    border-radius: 100px;
    background-image: linear-gradient(to right, rgba(192, 192, 128, 0.51) 50%, rgba(255, 176, 1, 0.51) 70%);
    backdrop-filter: blur(4px);
    box-shadow: 4px 4px 15px black;
    padding: 8px;
}
.cursor:hover{
  cursor: pointer;
  color: rgba(255, 176, 1, 0.7) !important;
}
.kontaktformular{
    height: 700px;
    width: 500px;
    background-color: transparent;
    background-image: linear-gradient(to right, rgba(192, 192, 128, 0.70) 20%, rgba(255, 176, 1, 0.70) 100%);
    backdrop-filter: blur(4px);
    border: solid 2px rgba(3, 3, 3, 0.93);
    border-radius: 30px !important;
}
.formularinhalte{
    margin-top: -60px;
}
</style>
