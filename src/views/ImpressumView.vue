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

                  <!--                  <div class="pb-8 mx-5">
                                      <h2>Impressum</h2>
                                      <p>Name: Benjamin Bodtländer<br>
                                        Straße: Alter Wog 13<br>
                                        Wohnort: 66606 Sankt Wendel</p>
                                      &lt;!&ndash;        Telefon: <a class="email" href="tel:+491635059366">+49 163 5059366</a> <br>&ndash;&gt;
                                      E-Mail: <a href="mailto:Info@MPU-Institut-Saar.de">Info@MPU-Institut-Saar.de</a> <br><br>

                                      <h2>Website created by</h2>
                                      <a href="https://leandro-graf.de" target="_blank">Leandro Graf</a> <br>
                                      <a href="https://franke-arts.de" target="_blank">Stefan Franke</a>
                                      <br><br>

                                      <h2>Haftung für Inhalte:</h2>
                                      <p>
                                        Als Seitenbetreiber bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                                        verantwortlich.
                                        Ich
                                        bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                                        oder nach
                                        Umständen
                                        zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
                                        Sperrung der
                                        Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                                        diesbezügliche Haftung
                                        ist
                                        jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                                        Bekanntwerden von
                                        entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.</p> <br>
                                      <h2>Haftung für Links:</h2>
                                      <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss
                                        habe. Deshalb
                                        kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                                        Seiten ist
                                        stets
                                        der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                                        Zeitpunkt
                                        der
                                        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                                        Verlinkung
                                        nicht
                                        erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                                        Anhaltspunkte
                                        einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich
                                        derartige
                                        Links
                                        umgehend
                                        entfernen.</p> <br>
                                      <h2>Urheberrecht:</h2>
                                      <p>Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                                        Urheberrecht. Die
                                        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                                        Urheberrechtes
                                        bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den
                                        privaten, nicht
                                        kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht von mir erstellt
                                        wurden,
                                        werden
                                        die
                                        Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                                        Sollten Sie
                                        trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden
                                        Hinweis. Bei
                                        Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.</p>
                                      <br>
                                      <h2><a @click="$router.push('/datenschutz')">Datenschutz</a></h2>
                                    </div>-->

                  <div id="content" class="site-content">

                    <div id="primary" class="content-area">
                      <main id="main" class="site-main">

                        <article id="post-6" class="post-6 page type-page status-publish"
                                 itemscope="" itemtype="https://schema.org/CreativeWork">
                          <div class="inside-article">

                            <header aria-label="Inhalt" class="entry-header">
                              <h1 class="entry-title" itemprop="headline">Impressum</h1></header>


                            <div class="entry-content" itemprop="text">

                              <p><br><em><strong>Angaben gemäß § 5 TMG</strong></em><strong><br></strong></p>


                              <p>Benjamin Bodtländer<br>Institut für MPU-Beratung und Suchtprävention<br>Alter Woog
                                13<br>66606 Sankt Wendel<br><br></p>


                              <p>
                                <strong>
                                  Kontakt
                                </strong>
                                <br>Telefon: 0151 21225525<br>E-Mail: Info@MPU-Institut-Saar.de<br>
                              </p>


                              <p>Verbraucherstreitbeilegung/Universalschlichtungsstelle<br>Wir sind nicht bereit oder
                                verpflichtet, an Streitbeilegungsverfahren vor einer<br>Verbraucherschlichtungsstelle
                                teilzunehmen.<br></p>


                              <p>Quelle:<br>e-recht24.de</p>

                              <br>

                              <header aria-label="Inhalt" class="entry-header">
                                <h1 class="entry-title" itemprop="headline">Website</h1></header>

                              <p>
                                <strong>
                                  Website created by
                                </strong>
                                <br>
                                
                              </p>

                              <ul>
                                <li>
                                  <h4>
                                    <a href="https://leandro-graf.de" target="_blank">Leandro Graf</a>
                                  </h4>
                                </li>
                                <li>
                                  <h4>
                                    <a href="https://franke-arts.de" target="_blank">Stefan Franke</a>
                                  </h4>
                                </li>
                              </ul>

                              <p></p>

                              <br>
                              <p style="font-size:25px"><strong>Datenschutzerklärung</strong></p>


                              <h4 class="wp-block-heading">Zugriffsdaten</h4>

                              <br>
                              <p>Wir, der Websitebetreiber bzw. Seitenprovider, erheben aufgrund unseres berechtigten
                                Interesses (s. Art. 6 Abs. 1 lit. f. DSGVO) Daten über Zugriffe auf die Website und
                                speichern diese als „Server-Logfiles“ auf dem Server der Website ab. Folgende Daten
                                werden so protokolliert:</p>


                              <ul class="ml-5">
                                <li>Besuchte Website</li>


                                <li>Uhrzeit zum Zeitpunkt des Zugriffes</li>


                                <li>Menge der gesendeten Daten in Byte</li>


                                <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>


                                <li>Verwendeter Browser</li>


                                <li>Verwendetes Betriebssystem</li>


                                <li>Verwendete IP-Adresse</li>
                              </ul>


                              <p>Die Server-Logfiles werden für maximal 7 Tage gespeichert und anschließend gelöscht.
                                Die Speicherung der Daten erfolgt aus Sicherheitsgründen, um z. B. Missbrauchsfälle
                                aufklären zu können. Müssen Daten aus Beweisgründen aufgehoben werden, sind sie solange
                                von der Löschung ausgenommen bis der Vorfall endgültig geklärt ist.</p>
                              <br>

                              <h4 class="wp-block-heading">Reichweitenmessung &amp; Cookies</h4>


                              <h4 class="wp-block-heading">&nbsp;</h4>


                              <p>Diese Website verwendet Cookies zur pseudonymisierten Reichweitenmessung, die entweder
                                von unserem Server oder dem Server Dritter an den Browser des Nutzers übertragen werden.
                                Bei Cookies handelt es sich um kleine Dateien, welche auf Ihrem Endgerät gespeichert
                                werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies erhöht
                                sich die Benutzerfreundlichkeit und Sicherheit dieser Website</p>


                              <p>Falls Sie nicht möchten, dass Cookies zur Reichweitenmessung auf Ihrem Endgerät
                                gespeichert werden, können Sie dem Einsatz dieser Dateien hier widersprechen:</p>
                              <br>

                              <ul class="ml-5">
                                <li>Cookie-Deaktivierungsseite der Netzwerkwerbeinitiative: <a
                                    href="http://optout.networkadvertising.org/?c=1#!/">http://optout.networkadvertising.org/?c=1#!/</a>
                                </li>


                                <li>Cookie-Deaktivierungsseite der US-amerikanischen Website: <a
                                    href="http://optout.aboutads.info/?c=2#!/">http://optout.aboutads.info/?c=2#!/</a>
                                </li>


                                <li>Cookie-Deaktivierungsseite der europäischen Website: <a
                                    href="http://optout.networkadvertising.org/?c=1#!/">http://optout.networkadvertising.org/?c=1#!/</a>
                                </li>
                              </ul>
                              <br>

                              <p>Gängige Browser bieten die Einstellungsoption, Cookies nicht zuzulassen. Hinweis: Es
                                ist nicht gewährleistet, dass Sie auf alle Funktionen dieser Website ohne
                                Einschränkungen zugreifen können, wenn Sie entsprechende Einstellungen vornehmen.</p>


                              <p>Erfassung und Verarbeitung personenbezogener Daten</p>


                              <p>Der Websitebetreiber erhebt, nutzt und gibt Ihre personenbezogenen Daten nur dann
                                weiter, wenn dies im gesetzlichen Rahmen erlaubt ist oder Sie in die Datenerhebung
                                einwilligen.</p>


                              <p>Als personenbezogene Daten gelten sämtliche Informationen, welche dazu dienen, Ihre
                                Person zu bestimmen und welche zu Ihnen zurückverfolgt werden können – also
                                beispielsweise Ihr Name, Ihre E-Mail-Adresse und Telefonnummer.</p>


                              <p>Diese Website können Sie auch besuchen, ohne Angaben zu Ihrer Person zu machen. Zur
                                Verbesserung unseres Online-Angebotes speichern wir jedoch (ohne Personenbezug) Ihre
                                Zugriffsdaten auf diese Website. Zu diesen Zugriffsdaten gehören z. B. die von Ihnen
                                angeforderte Datei oder der Name Ihres Internet-Providers. Durch die Anonymisierung der
                                Daten sind Rückschlüsse auf Ihre Person nicht möglich.</p>

                              <br>
                              <p><strong>Umgang mit Kontaktdaten</strong></p>
                              <br>

                              <p>Nehmen Sie mit uns als Websitebetreiber durch die angebotenen Kontaktmöglichkeiten
                                Verbindung auf, werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und
                                Beantwortung Ihrer Anfrage zurückgegriffen werden kann. Ohne Ihre Einwilligung werden
                                diese Daten nicht an Dritte weitergegeben.</p>

                              <br>
                              <p><strong>Umgang mit Kommentaren und Beiträgen</strong></p>
                              <br>

                              <p>Hinterlassen Sie auf dieser Website einen Beitrag oder Kommentar, wird Ihre IP-Adresse
                                gespeichert. Dies erfolgt aufgrund unserer berechtigten Interessen im Sinne des Art. 6
                                Abs. 1 lit. f. DSGVO und dient der Sicherheit von uns als Websitebetreiber: Denn sollte
                                Ihr Kommentar gegen geltendes Recht verstoßen, können wir dafür belangt werden, weshalb
                                wir ein Interesse an der Identität des Kommentar- bzw. Beitragsautors haben.</p>


                            </div>

                          </div>
                        </article>
                      </main>
                    </div>

                    <div id="right-sidebar" class="widget-area sidebar is-right-sidebar">
                      <div class="inside-right-sidebar">
                      </div>
                    </div>

                  </div>

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
  name: "ImpressumNeuView",
  components: {HeaderComponent}
}
</script>

<style scoped>
a {
  color: lightskyblue;
  cursor: pointer;
}

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
  background-image: url("/src/assets/dsgvo.webp");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
}


</style>