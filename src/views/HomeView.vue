<template>
  <div v-if="!$store.state.mobile" class="background">
    <div class="background-color" style="width: 100vw">
      <div class="mx-auto" style="max-width: 1800px">
        <!---  Header   -->
        <HeaderComponent></HeaderComponent>


        <!---  body   -->
        <v-lazy transition="slide-y-transition">
          <v-row class="mt-16 d-flex justify-center mx-0" style="max-width: 100%">
            <v-col cols="5">
              <div style="max-width: 90%">
                <h1 v-if="!$store.state.tabletHorizontal" class="text-white">
                  Willkommen beim Institut <br> für MPU-Beratung und<br> Suchtprävention <br> im Saarland.
                </h1>
                <h3 v-if="$store.state.tabletHorizontal" class="text-white">
                  Willkommen beim Institut <br> für MPU-Beratung und<br> Suchtprävention <br> im Saarland.
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
                    <div class="cursor mt-6 d-flex align-center justify-center button-rechts" style="max-width: 220px"
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
              </div>
            </v-col>
            <v-col class="d-flex justify-center" cols="5">

              <div class="profil-bild">
              </div>
            </v-col>
          </v-row>
        </v-lazy>
        <!---  footer   -->
        <v-lazy transition="slide-y-reverse-transition">
          <v-row class="mt-16 d-flex justify-center mx-0" style="max-width: 100%">
            <v-col cols="10">
              <v-row :class="$store.state.tabletHorizontal ? 'footer-tablet' : 'footer' " class="footer mx-0"
                     style="max-width: 100%">
                <v-col class="d-flex justify-center align-center">
                  <Icon class="ml-12" icon="streamline:phone-telephone-android-phone-mobile-device-smartphone-iphone"
                        style="font-size: 40px"/>
                  <div class="text-center" style="width: 100%">
                    <h2 v-if="!$store.state.tabletHorizontal">
                      Ruf mich an
                    </h2>
                    <h4 v-if="$store.state.tabletHorizontal">
                      Ruf mich an
                    </h4>
                    <h4>
                      <a class="text-black" href="tel:+4915121225525" target="_blank">
                        015121225525
                      </a>
                    </h4>
                  </div>
                </v-col>
                <v-divider class="border-opacity-100" vertical="true"></v-divider>
                <v-col class="d-flex align-center">
                  <Icon class="ml-5" icon="line-md:email" style="font-size: 40px"/>
                  <div class="text-center" style=" width: 100%">
                    <h2 v-if="!$store.state.tabletHorizontal">
                      Schreib mir eine Mail
                    </h2>
                    <h4 v-if="$store.state.tabletHorizontal">
                      Schreib mir eine Mail
                    </h4>
                    <h4>
                      <a class="text-black" href="mailto:info@example.com" target="_blank">
                        Info@MPU-Institut-Saar.de
                      </a>
                    </h4>

                  </div>
                </v-col>
                <v-divider class="border-opacity-100" vertical="true"></v-divider>
                <v-col class="d-flex align-center">
                  <Icon class="ml-5" icon="tdesign:location" style="font-size: 40px"/>
                  <div class="text-center" style=" width: 100%">
                    <h2 v-if="!$store.state.tabletHorizontal">
                      So findest du mich
                    </h2>
                    <h4 v-if="$store.state.tabletHorizontal">
                      So findest du mich
                    </h4>
                    <h4>
                      <a class="text-black"
                         href="https://www.google.com/maps/place/Institut+f%C3%BCr+MPU-Beratung+und+Suchtpr%C3%A4vention+St.Wendel+Saar/@49.4682475,7.1737616,17z/data=!3m1!5s0x4795c0274e5a43e3:0xd195be627346ce6b!4m15!1m8!3m7!1s0x4795c02751fedd21:0xa98259caf324f91d!2sAlter+Woog+13,+66606+St.+Wendel!3b1!8m2!3d49.4682475!4d7.1737616!16s%2Fg%2F11c25gpd9k!3m5!1s0x6f4b9a15b5480a27:0x7e39569ecef92420!8m2!3d49.4682475!4d7.1737616!16s%2Fg%2F11pvcv2d88?entry=ttu"
                         target="_blank">
                        Alter Wog 13, 66606 Sankt Wendel
                      </a>
                    </h4>

                  </div>

                </v-col>

              </v-row>
            </v-col>
          </v-row>
        </v-lazy>
      </div>
    </div>
  </div>

  <!--  mobile-->

  <div v-if="$store.state.mobile" class="background-mobile">
    <div class="background-color-mobile">
      <HeaderComponent></HeaderComponent>
      <div class="tab-card">
        <v-tabs
            v-model="tab"
            align-tabs="center"
            center-active
            color="rgba(255, 176, 1, 0.7)">
          <v-tab :value="0" class="">Home</v-tab>
          <v-tab :value="1" class="">MPU</v-tab>
          <v-tab :value="2" class="">Info</v-tab>
          <v-tab :value="3" class="">Kontakt</v-tab>
          <v-tab :value="4" class="">Über mich</v-tab>
          <v-tab :value="5" class="">Impressum</v-tab>


        </v-tabs>

        <v-window v-model="tab">
          <v-window-item
              :value="0"
          >
            <v-container>
              <v-row class=" d-flex justify-center mx-0" style="width: 100%">
                <v-col cols="10">
                  <h4 class="text-white text-center">
                    Willkommen beim Institut
                    für MPU-Beratung und
                    Suchtprävention
                    im Saarland.
                  </h4>

                </v-col>
                <v-col cols="11">
                  <div class="mt-n6 profil-bild-mobile">
                    <v-dialog width="500">
                      <template v-slot:activator="{ props }">
                        <div class="cursor mt-6 d-flex align-center justify-center button-rechts"
                             style="position: relative; left: -20%; top: 70%;transform: scale(0.6); max-width: 220px"
                             v-bind="props">
                          <h3>
                            Termin Vereinbaren
                          </h3>
                        </div>
                      </template>
                      <template v-slot:default="{ isActive }">
                        <v-card class=" pt-4 kontaktformular-mobile" style="transform: scale(0.8) ">
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
                  </div>
                </v-col>
                <v-col cols="10">
                  <p class="mt-n3 text-white text-center" style="font-size: 14px; text-shadow: 1px 1px black">
                    Ihr Ansprechpartner rund um das Thema Medizinisch-Psychologische Untersuchung (MPU). <br><br>

                    In der MPU-Vorbereitung gehe ich mit Ihnen den gleichen Weg, den der Gutachter mit Ihnen im Gespräch
                    beschreitet.
                  </p>
                </v-col>
              </v-row>

            </v-container>
          </v-window-item>

          <v-window-item :value="1">
            <v-container class="d-flex justify-center">
              <div class="d-flex justify-center kontaktformular-mobile1">
                <div style="max-width: 90%; height: 100%">

                  <v-card
                      style="background-color: transparent; box-shadow: 0px 0px; overflow-y: scroll; max-height: 100%; color: #e3dede">
                    <v-card-title>
                      Wann ist eine MPU <br> erforderlich?
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
              </div>
            </v-container>
          </v-window-item>

          <v-window-item :value="2">
            <v-container class="d-flex justify-center">
              <div class="d-flex justify-center kontaktformular-mobile1">
                <div style="max-width: 90%; height: 100%">

                  <v-card
                      style="background-color: transparent; box-shadow: 0px 0px; overflow-y: scroll; max-height: 100%; color: #e3dede">
                    <v-card-title>
                      MPU-Vorbereitung und <br> Beratung im Saarland
                    </v-card-title>
                    <v-card-text>
                      In meiner MPU-Vorbereitung im Saarland, sei es bei Ihnen zu Hause, online oder in meinem Büro in
                      St.
                      Wendel, verfolge ich einen ganzheitlichen Ansatz, um Sie bestmöglich auf Ihre bevorstehende
                      Medizinisch-Psychologische Untersuchung (MPU) vorzubereiten. Ich möchte, dass Sie sich optimal
                      vorbereitet und selbstbewusst fühlen, wenn Sie den Gutachter treffen.
                    </v-card-text>
                    <v-card-title>
                      Gemeinsame Arbeit <br> an Ihren Verstößen
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
                      Respektvolle <br> Unterstützung
                    </v-card-title>
                    <v-card-text>
                      In dieser wichtigen Phase Ihres Lebens ist es für mich von größter Bedeutung, Sie mit Respekt und
                      Verständnis zu behandeln. Ich urteile nicht und gehe davon aus, dass Fehltritte menschlich sind
                      und
                      oft
                      nachvollziehbare Gründe haben. Ihre persönliche Geschichte und Situation stehen im Mittelpunkt
                      unserer
                      Arbeit.
                    </v-card-text>
                    <v-card-title>
                      Intensive Vorbereitung <br> auf den Ernstfall
                    </v-card-title>
                    <v-card-text>
                      Wir nehmen uns ausreichend Zeit, um den "Ernstfall" zu proben, indem wir das Gespräch mit dem
                      Gutachter mehrmals durchgehen. Dies hilft dabei, mögliche Fallstricke frühzeitig zu erkennen und
                      zu
                      überwinden. Ihr Erfolg bei der MPU ist unser gemeinsames Ziel.
                    </v-card-text>
                    <v-card-title>
                      Individuelle Anpassung
                    </v-card-title>
                    <v-card-text>
                      Die Standard-MPU-Vorbereitung umfasst in der Regel elf Stunden und kann als Paket für 750 Euro
                      gebucht
                      werden. Jeder Mensch ist einzigartig, und daher kann es sinnvoll sein, den Umfang der Vorbereitung
                      individuell anzupassen. Bei Bedarf können zusätzliche Stunden à 75 Euro hinzugebucht werden.
                    </v-card-text>
                    <v-card-title>
                      Hausbesuche und <br> Anfahrtsgebühren
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
              </div>
            </v-container>
          </v-window-item>
          <v-window-item :value="3">
            <v-container>
              <div class="d-flex justify-center">
                <v-card class="pt-4 kontaktformular-mobile1" style="overflow: scroll">
                  <v-row class="d-flex justify-center mx-0" style="width: 100%">
                    <v-col cols="10">
                      <h6>Bitte füllen Sie das Formular aus, und ich werde mich umgehend bei Ihnen melden.</h6>
                    </v-col>
                    <v-col cols="10">
                      <v-text-field density="compact" label="Vorname" variant="outlined">

                      </v-text-field>
                    </v-col>
                    <v-col class="formularinhalte-mobile" cols="10">
                      <v-text-field density="compact" label="Nachname" variant="outlined">

                      </v-text-field>
                    </v-col>
                    <v-col class="formularinhalte-mobile" cols="10">
                      <v-text-field density="compact" label="Email" variant="outlined">

                      </v-text-field>
                    </v-col>
                    <v-col class="formularinhalte-mobile" cols="10">
                      <v-text-field density="compact" label="Handynummer" variant="outlined">

                      </v-text-field>
                    </v-col>
                    <v-col class="formularinhalte-mobile" cols="10">
                      <v-textarea density="compact" label="Nachricht" variant="outlined">

                      </v-textarea>
                    </v-col>

                  </v-row>
                  <v-card-actions class="mt-n6 px-14 mb-6 d-flex justify-space-between">
                    <v-btn
                        text="Senden"

                    ></v-btn>
                    <v-btn
                        text="Abbrechen "

                    ></v-btn>

                  </v-card-actions>
                </v-card>

              </div>
            </v-container>
          </v-window-item>
          <v-window-item :value="4">
            <v-container>
              <!---- input-->
            </v-container>
          </v-window-item>
          <v-window-item :value="5">
            <v-container class="d-flex justify-center">
              <div class="d-flex justify-center kontaktformular-mobile1">
                <div style="max-width: 90%; height: 100%">

                  <v-card
                      style="background-color: transparent; box-shadow: 0px 0px; overflow-y: scroll; max-height: 100%; color: #e3dede">

                    <div class="pb-8 mx-5">
                      <h3>Impressum</h3>
                      <p>Name: Benjamin Bodtländer<br>
                        Straße: Alter Wog 13<br>
                        Wohnort: 66606 Sankt Wendel</p>
                      <!--        Telefon: <a class="email" href="tel:+491635059366">+49 163 5059366</a> <br>-->
                      E-Mail: <a href="mailto:Info@MPU-Institut-Saar.de">Info@MPU-Institut-Saar.de</a> <br><br>

                      <h3>Website created by</h3>
                      <a href="https://leandro-graf.de" target="_blank">Leandro Graf</a> <br>
                      <a href="https://franke-arts.de" target="_blank">Stefan Franke</a>
                      <br><br>

                      <h3>Haftung für Inhalte:</h3>
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
                      <h3>Haftung für Links:</h3>
                      <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss
                        habe. Deshalb
                        kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                        Seiten ist
                        stets
                        der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
                        zum
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
                      <h3>Urheberrecht:</h3>
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


                      <h3>
                        Datenschutz­erklärung
                      </h3>


                      <h3>
                        1. Datenschutz auf einen Blick
                      </h3>


                      <h4>
                        Allgemeine Hinweise
                      </h4>

                      <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                        personenbezogenen
                        Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                        denen
                        Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz
                        entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                      </p>


                      <h4>
                        Datenerfassung auf dieser Website
                      </h4>

                      <h5>
                        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                      </h5>

                      <p>
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                        Kontaktdaten
                        können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser
                        Datenschutzerklärung
                        entnehmen.
                      </p>

                      <h5>
                        Wie erfassen wir Ihre Daten?
                      </h5>

                      <p>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                        sich z.&nbsp;B.
                        um Daten handeln, die Sie in ein Kontaktformular eingeben.
                      </p>

                      <p>
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
                        unsere
                        IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
                        Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                        automatisch,
                        sobald Sie diese Website betreten.
                      </p>

                      <h5>
                        Wofür nutzen wir Ihre Daten?
                      </h5>

                      <p>
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                        gewährleisten.
                      </p>

                      <h5>
                        Welche Rechte haben Sie bezüglich Ihrer Daten?
                      </h5>

                      <p>
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                        Ihrer
                        gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
                        Berichtigung
                        oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                        erteilt
                        haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben
                        Sie das
                        Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen
                        Daten
                        zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                        Aufsichtsbehörde
                        zu.
                      </p>

                      <p>
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
                        wenden.
                      </p>


                      <h3>
                        2. Hosting
                      </h3>


                      <p>
                        Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                      </p>


                      <h4>
                        Strato
                      </h4>

                      <p>
                        Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend „Strato“).
                        Wenn Sie
                        unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.
                      </p>

                      <p>
                        Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato:
                        <a href="https://www.strato.de/datenschutz/DatenschutzView.vue" rel="noopener noreferrer"
                           target="_blank">
                          https://www.strato.de/datenschutz/
                        </a>
                        .
                      </p>

                      <p>
                        Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben
                        ein
                        berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern
                        eine
                        entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
                        Grundlage
                        von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
                        Speicherung von
                        Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z.&nbsp;B.
                        Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit
                        widerrufbar.
                      </p>


                      <h5>
                        Auftragsverarbeitung
                      </h5>

                      <p>
                        Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter
                        geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag,
                        der
                        gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach
                        unseren
                        Weisungen und unter Einhaltung der DSGVO verarbeitet.
                      </p>


                      <h3>
                        3. Allgemeine Hinweise und Pflicht­informationen
                      </h3>


                      <h4>
                        Datenschutz
                      </h4>

                      <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                        behandeln
                        Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                        Datenschutzvorschriften
                        sowie dieser Datenschutzerklärung.
                      </p>

                      <p>
                        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                        Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
                        vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie
                        nutzen. Sie
                        erläutert auch, wie und zu welchem Zweck das geschieht.
                      </p>

                      <p>
                        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der
                        Kommunikation per
                        E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                        durch
                        Dritte ist nicht möglich.
                      </p>


                      <h4>
                        Hinweis zur verantwortlichen Stelle
                      </h4>

                      <p>
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                      </p>

                      <p>
                        Name: Benjamin Bodtländer
                        <br>

                        Straße
                        <br>

                        Wohnort
                      </p>


                      <p>
                        Telefonnummer
                        <br>

                        Email
                      </p>


                      <p>
                        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
                        mit
                        anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B.
                        Namen,
                        E-Mail-Adressen o. Ä.) entscheidet.
                      </p>


                      <h4>
                        Speicherdauer
                      </h4>

                      <p>
                        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
                        verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
                        entfällt.
                        Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
                        Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
                        zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B.
                        steuer- oder
                        handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
                        Fortfall
                        dieser Gründe.
                      </p>


                      <h4>
                        Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
                      </h4>

                      <p>
                        Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
                        personenbezogenen
                        Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
                        besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer
                        ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten
                        erfolgt die
                        Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
                        Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z.&nbsp;B.
                        via
                        Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf
                        Grundlage
                        von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                        Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten
                        wir
                        Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre
                        Daten,
                        sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage
                        von
                        Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres
                        berechtigten
                        Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall
                        einschlägigen
                        Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
                      </p>


                      <h4>
                        Widerruf Ihrer Einwilligung zur Datenverarbeitung
                      </h4>

                      <p>
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
                        können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis
                        zum
                        Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                      </p>


                      <h4>
                        Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung
                        (Art. 21
                        DSGVO)
                      </h4>

                      <p>
                        WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT,
                        HABEN SIE
                        JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
                        VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
                        AUF
                        DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE
                        VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH
                        EINLEGEN,
                        WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
                        KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN,
                        RECHTE
                        UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
                        VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                      </p>

                      <p>
                        WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE
                        DAS
                        RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN
                        ZUM
                        ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT
                        SOLCHER
                        DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN
                        DATEN
                        ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
                        ABS. 2
                        DSGVO).
                      </p>


                      <h4>
                        Beschwerde­recht bei der zuständigen Aufsichts­behörde
                      </h4>

                      <p>
                        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                        Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                        Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
                        unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                      </p>


                      <h4>
                        Recht auf Daten­übertrag­barkeit
                      </h4>

                      <p>
                        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
                        Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
                        maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
                        an
                        einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                      </p>


                      <h4>
                        Auskunft, Löschung und Berichtigung
                      </h4>

                      <p>
                        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                        unentgeltliche
                        Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und
                        den
                        Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
                        Hierzu
                        sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns
                        wenden.
                      </p>


                      <h4>
                        Recht auf Einschränkung der Verarbeitung
                      </h4>

                      <p>
                        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                        verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der
                        Verarbeitung besteht in folgenden Fällen:
                      </p>

                      <ul>

                        <p>
                          Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
                          benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben
                          Sie das
                          Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                        </p>
                        <br>
                        <p>
                          Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können
                          Sie
                          statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                        </p>
                        <br>
                        <p>
                          Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                          Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht,
                          statt der
                          Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                        </p>
                        <br>
                        <p>
                          Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung
                          zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht,
                          wessen
                          Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                          personenbezogenen Daten zu verlangen.
                        </p>
                        <br>
                      </ul>

                      <p>
                        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese
                        Daten –
                        von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
                        Ausübung
                        oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
                        oder
                        juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der
                        Europäischen
                        Union oder eines Mitgliedstaats verarbeitet werden.
                      </p>


                      <h3>
                        4. Datenerfassung auf dieser Website
                      </h3>


                      <h4>
                        Cookies
                      </h4>

                      <p>
                        Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und
                        richten
                        auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer
                        Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät
                        gespeichert.
                        Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies
                        bleiben
                        auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen&nbsp;oder eine automatische
                        Löschung
                        durch Ihren Webbrowser erfolgt.
                      </p>

                      <p>
                        Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da
                        bestimmte
                        Websitefunktionen ohne diese nicht funktionieren würden (z.&nbsp;B. die Warenkorbfunktion
                        oder die
                        Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten&nbsp;oder
                        Werbung
                        anzuzeigen.
                      </p>

                      <p>
                        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung
                        bestimmter, von Ihnen erwünschter Funktionen (z.&nbsp;B. für die Warenkorbfunktion) oder zur
                        Optimierung der Website (z.&nbsp;B. Cookies zur Messung des Webpublikums) erforderlich sind
                        (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert,
                        sofern
                        keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes
                        Interesse
                        an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten
                        Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und
                        vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
                        ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                        TTDSG); die Einwilligung ist jederzeit widerrufbar.
                      </p>

                      <p>
                        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
                        werden und
                        Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder
                        generell
                        ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers
                        aktivieren.
                        Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                      </p>

                      <p>
                        Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie
                        hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine
                        Einwilligung
                        abfragen.
                      </p>


                      <p>
                        Quelle:
                        <a href="https://www.e-recht24.de" target="_blank">
                          https://www.e-recht24.de
                        </a>

                      </p>

                    </div>

                  </v-card>

                </div>
              </div>
            </v-container>
          </v-window-item>


        </v-window>


      </div>
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue';
import HeaderComponent from "@/components/HeaderComponent.vue";
import axios from "axios";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'HomeView',
  data() {
    return {
      vorname: '',
      nachname: '',
      email: '',
      handynummer: '',
      tab: 0,
    }
  },
  created() {
  },
  mounted() {

  },
  methods: {
    async sendAppointmentEmail() {
      try {
        const response = await axios.post('/sendMailAsHTML', {
              "to": this.$store.state.email,
              "subject": this.vorname + " " + this.nachname + " möchte mit dir einen Termin vereinbaren",
              "htmlText": "<div><h3>Hallo Benjamin,</h3><p>" + this.vorname + " " + this.nachname + " möchte mit dir einen neuen Termin vereinbaren. Im Folgenden siehst du seine eingetragenen Daten:</p><p>Vorname: " + this.vorname + "<br>Nachname: " + this.nachname + "<br>Telefonnummer: <a href=\"tel:" + this.handynummer + "\">" + this.handynummer + "</a><br>Email: <a href=\"mailto:" + this.email + "\">" + this.email + "</a></p><br><p>Mit freundlichen Grüßen<br>Dein FastGlobeIT-Team</p><i>Diese E-Mail wurde automatisch erzeugt.</i></div>"
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
    },
  },
  components: {
    FooterComponent,
    Icon, HeaderComponent
  },
};
</script>
<style scoped>
.background {
  background-image: url("../assets/Background.png");
  background-size: cover;
  height: 100%;
  position: fixed;
  width: 100%;
}

.background-mobile {
  background-image: url("../assets/background-mobile.jpg");
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

.background-color-mobile {
  background-image: linear-gradient(to bottom, rgba(120, 104, 79, 0.78) 50%, rgba(0, 255, 0, 0.03) 100%);
  height: 100vh;
  padding-top: 30px;
}

.tab-card {
  height: 85vh;
  background-color: transparent;

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

.tab {
  border-radius: 30px !important;
  border: 1px solid black !important;
  height: 30px !important;
  margin-right: 5px;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.66) 20%, rgba(255, 176, 1, 0.7) 100%);
  backdrop-filter: blur(4px);
  box-shadow: 4px 4px 7px black;

}

.profil-bild {
  height: 40vh;
  width: 100%;
  background-image: url("https://mpu-institut-saar.de/wp-content/uploads/2022/06/999543c1-1-2048x1367.jpg");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
}

.profil-bild-mobile {
  height: 30vh;
  width: 100%;
  background-image: url("https://mpu-institut-saar.de/wp-content/uploads/2022/06/999543c1-1-2048x1367.jpg");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
}

.footer {
  margin-top: 4vh;
  border: 2px solid black;
  height: 15vh;
  border-radius: 100px;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.51) 50%, rgba(255, 176, 1, 0.51) 70%);
  backdrop-filter: blur(4px);
  box-shadow: 4px 4px 15px black;
  padding: 20px;
}

.footer-tablet {
  margin-top: 4vh;
  border: 2px solid black;
  height: 15vh;
  border-radius: 100px;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.51) 50%, rgba(255, 176, 1, 0.51) 70%);
  backdrop-filter: blur(4px);
  box-shadow: 4px 4px 15px black;
  padding: 8px;
}

.cursor:hover {
  cursor: pointer;
  color: rgba(255, 176, 1, 0.7) !important;
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

.v-tab__slider {
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.70) 20%, rgba(255, 176, 1, 0.70) 100%);

}

.v-card-text {
  color: black;
}

.v-card-title {
  text-shadow: 1px 1px black;
}

p {
  font-size: 13px;
}

a {
  font-size: 13px;
}
</style>
