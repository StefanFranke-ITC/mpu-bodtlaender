<template>
  <div class="background">
    <div class="background-color">
      <!---  Header   -->

      <HeaderComponent></HeaderComponent>

<!--      Body-->
      <v-row style="max-width: 100%" class="mt-16 d-flex justify-center mx-0">
        <v-col  cols="5">
          <div style="max-width: 90%">

            <v-card class="pa-5" style="background-color: transparent; box-shadow: 0px 0px; overflow-y: scroll; max-height: 70vh; color: #e3dede">

              <div class="pb-8 mx-5">
                <h2>Impressum</h2>
                <p>Name<br/>

                  Position<git stabr/>
                  Straße<br/>
                  Wohnort</p>
                <!--        Telefon: <a class="email" href="tel:+491635059366">+49 163 5059366</a> <br>-->
                E-Mail: <a class="email" href="mailto:email.de">email</a> <br><br>

                <h2>Website created by</h2>
                <a href="https://franke-arts.de" target="_blank">Stefan Franke</a> <br>
                <a href="https://leandro-graf.de" target="_blank">Leandro Graf</a>
                <br><br>

                <h2>Haftung für Inhalte:</h2>
                <p>
                  Als Seitenbetreiber bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                  Ich
                  bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                  Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
                  ist
                  jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
                  entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.</p> <br>
                <h2>Haftung für Links:</h2>
                <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb
                  kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
                  stets
                  der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
                  der
                  Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
                  nicht
                  erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                  einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links
                  umgehend
                  entfernen.</p> <br>
                <h2>Urheberrecht:</h2>
                <p>Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                  Urheberrechtes
                  bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                  kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden
                  die
                  Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                  trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei
                  Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.</p>

              </div>

            </v-card>

          </div>
        </v-col>
        <v-col class="d-flex justify-center" cols="5">
          <div class="profil-bild">
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "ImpressumNeuView",
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
.background-color{
  background-image: linear-gradient(to right, #78684F 50%, rgba(0, 255, 0, 0.03) 70%);
  height: 100vh;
  padding-top: 30px;
}


.cursor:hover{
  cursor: pointer;
  color: #C0C080 !important;
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

.logo{
  border: white solid 1px;
  border-radius: 100%;
  background-color: white;
  height: 70px;
  width: 70px;
}

.profil-bild{
  height: 40vh;
  width: 100%;
  background-image: url("https://atm-deutschland.com/wp-content/uploads/2020/03/imressum.jpg");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
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
</style>