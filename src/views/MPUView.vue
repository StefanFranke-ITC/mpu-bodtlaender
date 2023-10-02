<template>
  <div v-if="!$store.state.mobile" class="background">
    <div class="background-color">
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
                  Wann ist eine MPU erforderlich?
                </v-card-title>
                <v-card-text>
                  Eine MPU wird notwendig, wenn Sie nach bestimmten Verkehrsdelikten Ihren Führerschein zurückhaben
                  möchten:
                  <br> <br>

                  1. Alkohol am Steuer mit mehr als 1,6 bzw. 1,1 Promille im Blut <br>
                  2. Wiederholte oder auffällige Fahrten unter Alkoholeinfluss <br>
                  3. Fahrt unter Drogeneinfluss oder Betäubungsmitteln <br>
                  4.Erreichen des 8. Punkts im Fahreignungsregister (Flensburg) <br>
                  5. Straftaten im Straßenverkehr <br>
                  6. Verstöße während der Probezeit <br>
                  7. Verstöße gegen das Betäubungsmittelgesetz <br>
                </v-card-text>
                <v-card-title>
                  Ablauf einer MPU
                </v-card-title>
                <v-card-text>
                  Die MPU besteht aus drei Hauptteilen: <br> <br>

                  1. Medizinische Untersuchung: Überprüfung der körperlichen Eignung. <br>
                  2. Kognitiv-Motorische Untersuchung: Test der geistigen Fähigkeiten. <br>
                  3. Psychologische Begutachtung: Bewertung der psychischen Eignung.
                </v-card-text>
                <v-card-title>
                  MPU-Vorbereitung
                </v-card-title>
                <v-card-text>
                  Die Vorbereitung auf die MPU zielt darauf ab, die Betroffenen auf das Gespräch mit dem
                  Verkehrspsychologen vorzubereiten:
                </v-card-text>
                <v-card-text>
                  1. Analyse der Verhaltensauffälligkeiten aus der Verkehrsakte. <br>
                  2. Aufzeigen notwendiger Veränderungen für sicheres Verhalten im Straßenverkehr. <br>
                  3. Üben der Untersuchung unter Berücksichtigung offizieller Beurteilungskriterien. <br> <br>
                  Eine gründliche Vorbereitung kann die Chancen auf ein positives Gutachten erhöhen.
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
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "MPU-View",
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
  background-image: url("https://mpu-institut-saar.de/wp-content/uploads/2022/01/iStock-1145741796-1-1024x683.jpg");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
}

</style>