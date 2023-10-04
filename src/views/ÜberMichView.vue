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

export default {
  name: "ÜberMichView",
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

</style>