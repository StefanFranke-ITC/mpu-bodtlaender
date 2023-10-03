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
                    MPU-Vorbereitung und Beratung im Saarland
                  </v-card-title>
                  <v-card-text>
                    In meiner MPU-Vorbereitung im Saarland, sei es bei Ihnen zu Hause, online oder in meinem Büro in St.
                    Wendel, verfolge ich einen ganzheitlichen Ansatz, um Sie bestmöglich auf Ihre bevorstehende
                    Medizinisch-Psychologische Untersuchung (MPU) vorzubereiten. Ich möchte, dass Sie sich optimal
                    vorbereitet und selbstbewusst fühlen, wenn Sie den Gutachter treffen.
                  </v-card-text>
                  <v-card-title>
                    Individuelle Anpassung
                  </v-card-title>
                  <v-card-text>
                    Die Standard-MPU-Vorbereitung <b> umfasst in der Regel elf Stunden und kann als Paket für 750 Euro
                    gebucht
                    werden. </b> Jeder Mensch ist einzigartig, und daher kann es sinnvoll sein, den Umfang der
                    Vorbereitung
                    individuell anzupassen. Bei Bedarf können <b> zusätzliche Stunden à 75 Euro hinzugebucht
                    werden. </b>
                  </v-card-text>
                  <v-card-title>
                    Gemeinsame Arbeit an Ihren Verstößen
                  </v-card-title>
                  <v-card-text>
                    Während unserer Zusammenarbeit gehen wir gemeinsam den gleichen Weg, den der Gutachter während der
                    MPU-Prüfung beschreiten wird. Wir setzen uns mit Ihren Verstößen auseinander, analysieren die
                    zugrunde
                    liegenden Verhaltensmuster und erarbeiten alternative Strategien, um sicherzustellen, dass es in
                    Zukunft
                    nicht zu weiteren Verstößen kommt.
                  </v-card-text>
                  <v-card-title>
                    Respektvolle Unterstützung
                  </v-card-title>
                  <v-card-text>
                    In dieser wichtigen Phase Ihres Lebens ist es für mich von größter Bedeutung, Sie mit Respekt und
                    Verständnis zu behandeln. Ich urteile nicht und gehe davon aus, dass Fehltritte menschlich sind und
                    oft
                    nachvollziehbare Gründe haben. Ihre persönliche Geschichte und Situation stehen im Mittelpunkt
                    unserer
                    Arbeit.
                  </v-card-text>
                  <v-card-title>
                    Intensive Vorbereitung auf den Ernstfall
                  </v-card-title>
                  <v-card-text>
                    Wir nehmen uns ausreichend Zeit, um den "Ernstfall" zu proben, indem wir das Gespräch mit dem
                    Gutachter mehrmals durchgehen. Dies hilft dabei, mögliche Fallstricke frühzeitig zu erkennen und zu
                    überwinden. Ihr Erfolg bei der MPU ist unser gemeinsames Ziel.
                  </v-card-text>
                  <v-card-title>
                    Hausbesuche und Anfahrtsgebühren
                  </v-card-title>
                  <v-card-text>
                    Bei Hausbesuchen berechne ich nach Rücksprache zusätzlich eine Pauschale für die Anfahrt, um
                    sicherzustellen, dass Sie bequem an unseren Sitzungen teilnehmen können.
                  </v-card-text>
                  <v-card-text>
                    Mein vorrangiges Ziel ist es, Sie bestmöglich auf die MPU vorzubereiten und sicherzustellen, dass
                    Sie
                    die notwendige Unterstützung erhalten, um Ihre Ziele zu erreichen.
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
  name: "InfoView",
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
  background-image: url("https://mpu-institut-saar.de/wp-content/uploads/2022/01/iStock-1330050587-1024x684.jpg");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
}

</style>