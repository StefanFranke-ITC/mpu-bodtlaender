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
                  Willkommen beim Institut <br> für MPU-Beratung und<br> Suchtprävention <br> in St. Wendel.
                </h1>
                <h3 v-if="$store.state.tabletHorizontal" class="text-white">
                  Willkommen beim Institut <br> für MPU-Beratung und<br> Suchtprävention <br> in St. Wendel.
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
                <v-divider :vertical="true" class="border-opacity-100"></v-divider>
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
                      <a class="text-black" href="mailto:Info@MPU-Institut-Saar.de" target="_blank">
                        Info@MPU-Institut-Saar.de
                      </a>
                    </h4>

                  </div>
                </v-col>
                <v-divider :vertical="true" class="border-opacity-100"></v-divider>
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


  <!--mobile-->


  <div v-if="$store.state.mobile" class="background-mobile">
    <div class="background-color-mobile">
      <HeaderComponent></HeaderComponent>
      <div class="tab-card">

        <v-tabs
            v-model="$store.state.tab"
            align-tabs="center"
            center-active
            color="rgba(255, 176, 1, 0.7)">
          <v-tab :value="0" class="">Home</v-tab>
          <v-tab :value="1" class="">MPU</v-tab>
          <v-tab :value="2" class="">Info</v-tab>
          <v-tab :value="3" class="">Über mich</v-tab>
          <v-tab :value="4" class="">Kontakt</v-tab>
          <v-tab :value="5" class="">Impressum</v-tab>


        </v-tabs>

        <v-window v-model="$store.state.tab">
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
                    in St. Wendel.
                  </h4>

                </v-col>
                <v-col cols="11">
                  <div :class="$store.state.tablet? 'profil-bild-tablet':'profil-bild-mobile' " class="mt-n6">
                    <v-dialog width="500">
                      <template v-slot:activator="{ props }">
                        <div :class="$store.state.tablet ? 'termin-tablet': 'termin'"
                             class="cursor termin mt-6 d-flex align-center justify-center button-rechts"
                             style=""
                             v-bind="props">
                          <h3>
                            Termin Vereinbaren
                          </h3>
                        </div>
                      </template>
                      <template v-slot:default="{ isActive }">
                        <v-card :class="$store.state.tablet ? 'kontaktformular-tablet':'kontaktformular-mobile'"
                                class=" pt-4 ">
                          <v-row class="d-flex justify-center mx-0" style="width: 100%">
                            <v-col cols="10">
                              <h3>Bitte füllen Sie das Formular aus, und ich werde mich umgehend bei Ihnen
                                melden.</h3>
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
                      MPU-Vorbereitung und <br> Beratung in St. Wendel
                    </v-card-title>
                    <v-card-text>
                      In meiner MPU-Vorbereitung in St. Wendel, sei es bei Ihnen zu Hause, online oder in meinem Büro in
                      St.
                      Wendel, verfolge ich einen ganzheitlichen Ansatz, um Sie bestmöglich auf Ihre bevorstehende
                      Medizinisch-Psychologische Untersuchung (MPU) vorzubereiten. Ich möchte, dass Sie sich optimal
                      vorbereitet und selbstbewusst fühlen, wenn Sie den Gutachter treffen.
                    </v-card-text>
                    <v-card-title>
                      Preise
                    </v-card-title>
                    <v-card-text>
                      <ul class="ml-5">
                        <li> eine Stunde: <b> 85 Euro </b></li>
                        <li> 10 Stunden: <b> 850 Euro </b> + 11. Stunde <b> gratis </b></li>
                        <li> Anfahrtsgebühren: nach Rücksprache ggf. Pauschale</li>
                        <li> Es können zusätzliche Stunden hinzugebucht
                          werden, Preise dann in Absprache
                        </li>
                      </ul>
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
                  <v-card-title>
                    Über Mich
                  </v-card-title>
                  <v-card-text>
                    Geboren im Jahr 1988 im Saarland, genauer gesagt in Sankt Wendel, habe ich meine Wurzeln tief in
                    dieser wunderschönen Region.
                  </v-card-text>
                  <v-card-text>
                    Ich hab mich für eine vielseitige berufliche Laufbahn entschieden. Nachdem ich meine Ausbildung zum
                    Heilpraktiker für Psychotherapie abgeschlossen habe, erlangte ich die
                    Qualifikation als geprüfter psychologischer Berater. Mein ständiger Drang nach
                    Weiterbildung führte mich auch zur kognitiven Verhaltenstherapie.
                  </v-card-text>
                  <v-card-text>
                    Darüber hinaus habe ich eine Weiterbildung als MPU- und Suchtberater absolviert, die meine
                    Fähigkeiten erweitert und es mir ermöglicht, Menschen, die mit Suchtproblemen kämpfen, gezielter zu
                    helfen.
                  </v-card-text>
                  <v-card-text>
                    Meine berufliche Reise hat mich nicht nur mit fundiertem Fachwissen ausgestattet, sondern auch mit
                    Empathie und der Fähigkeit, auf die einzigartigen Herausforderungen meiner Klienten einzugehen. Die
                    Möglichkeit, Lösungen zu entwickeln, die das Leben positiv beeinflussen, erfüllt mich jeden Tag aufs
                    Neue.
                  </v-card-text>
                  <v-card-text>
                    Ich freue mich darauf, Sie kennenzulernen und gemeinsam an Ihren persönlichen Zielen zu arbeiten.
                    Als professioneller Berater und Suchtberater stehe ich Ihnen gerne zur Seite und bin bereit, Sie auf
                    Ihrem Weg zu unterstützen.
                  </v-card-text>
                  <v-card-text>
                    <div class="mt-n6">
                      <v-dialog width="500">
                        <template v-slot:activator="{ props }">
                          <div :class="$store.state.tablet ? 'termin-tablet': 'termin'"
                               class="cursor termin mt-6 ml-12 d-flex align-center justify-center button-rechts"
                               style=""
                               v-bind="props">
                            <h3>
                              Termin Vereinbaren
                            </h3>
                          </div>
                        </template>
                        <template v-slot:default="{ isActive }">
                          <v-card :class="$store.state.tablet ? 'kontaktformular-tablet':'kontaktformular-mobile'"
                                  class=" pt-4 ">
                            <v-row class="d-flex justify-center mx-0" style="width: 100%">
                              <v-col cols="10">
                                <h3>Bitte füllen Sie das Formular aus, und ich werde mich umgehend bei Ihnen
                                  melden.</h3>
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
                  </v-card-text>
                </v-card>
              </div>
            </v-container>
          </v-window-item>
          <v-window-item :value="4">
            <v-container>
              <div class="d-flex justify-center">
                <v-card class="pt-4 kontaktformular-mobile1" style="overflow: scroll">
                  <v-row class="d-flex justify-center mx-0" style="width: 100%">
                    <v-col cols="10">
                      <h4>Bitte füllen Sie das Formular aus, und ich werde mich umgehend bei Ihnen melden.</h4>
                    </v-col>
                    <v-col cols="10">
                      <v-text-field v-model="vorname" label="Vorname" variant="outlined"/>
                    </v-col>
                    <v-col class="formularinhalte-mobile" cols="10">
                      <v-text-field v-model="nachname" label="Nachname" variant="outlined"/>
                    </v-col>
                    <v-col class="formularinhalte-mobile" cols="10">
                      <v-text-field v-model="email" label="Email" variant="outlined"/>
                    </v-col>
                    <v-col class="formularinhalte-mobile" cols="10">
                      <v-text-field v-model="handynummer" label="Handynummer" variant="outlined"/>
                    </v-col>
                    <v-col class="formularinhalte-mobile" cols="10">
                      <v-textarea v-model="nachricht" label="Nachricht" variant="outlined"/>
                    </v-col>

                  </v-row>
                  <v-card-actions class="mt-n6 px-14 mb-6 d-flex justify-center">
                    <v-btn
                        text="Senden"
                        @click="sendEmail"></v-btn>
                  </v-card-actions>
                </v-card>

              </div>
            </v-container>
          </v-window-item>
          <v-window-item :value="5">
            <v-container class="d-flex justify-center">
              <div class="d-flex justify-center kontaktformular-mobile1">
                <div style="max-width: 90%; height: 100%">

                  <v-card
                      style="background-color: transparent; box-shadow: 0px 0px; overflow-y: scroll; max-height: 100%; color: #e3dede">

                    <div id="content" class="site-content">

                      <div id="primary" class="content-area">
                        <main id="main" class="site-main">

                          <article id="post-6" class="post-6 page type-page status-publish"
                                   itemscope="" itemtype="https://schema.org/CreativeWork">
                            <div class="inside-article">

                              <header aria-label="Inhalt" class="entry-header">
                                <h1 class="entry-title text-black" itemprop="headline">Impressum</h1></header>


                              <div class="entry-content" itemprop="text">

                                <p><br><em><strong>Angaben gemäß § 5 TMG</strong></em><strong><br></strong></p>


                                <p>Benjamin Bodtländer<br>Institut für MPU-Beratung und Suchtprävention<br>Alter Woog
                                  13<br>66606 Sankt Wendel<br></p>


                                <p><strong>Kontakt</strong><br>Telefon: 0151 21225525<br>E-Mail:
                                  Info@MPU-Institut-Saar.de<br>
                                </p>


                                <p>Verbraucherstreitbeilegung/Universalschlichtungsstelle<br>Wir sind nicht bereit oder
                                  verpflichtet, an Streitbeilegungsverfahren vor einer<br>Verbraucherschlichtungsstelle
                                  teilzunehmen.<br></p>


                                <p>Quelle:<br>e-recht24.de</p>

                                <br>

                                <header aria-label="Inhalt" class="entry-header">
                                  <h1 class="entry-title text-black" itemprop="headline">Website</h1></header>

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


                                <p></p>


                                <p style="font-size:25px"><strong>Datenschutzerklärung</strong></p>


                                <h4 class="wp-block-heading text-black">Zugriffsdaten</h4>


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
                                  aufklären zu können. Müssen Daten aus Beweisgründen aufgehoben werden, sind sie
                                  solange
                                  von der Löschung ausgenommen bis der Vorfall endgültig geklärt ist.</p>


                                <h4 class="wp-block-heading text-black">Reichweitenmessung &amp; Cookies</h4>


                                <h4 class="wp-block-heading">&nbsp;</h4>


                                <p>Diese Website verwendet Cookies zur pseudonymisierten Reichweitenmessung, die
                                  entweder
                                  von unserem Server oder dem Server Dritter an den Browser des Nutzers übertragen
                                  werden.
                                  Bei Cookies handelt es sich um kleine Dateien, welche auf Ihrem Endgerät gespeichert
                                  werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies erhöht
                                  sich die Benutzerfreundlichkeit und Sicherheit dieser Website</p>


                                <p>Falls Sie nicht möchten, dass Cookies zur Reichweitenmessung auf Ihrem Endgerät
                                  gespeichert werden, können Sie dem Einsatz dieser Dateien hier widersprechen:</p>


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
                                  angeforderte Datei oder der Name Ihres Internet-Providers. Durch die Anonymisierung
                                  der
                                  Daten sind Rückschlüsse auf Ihre Person nicht möglich.</p>


                                <p><strong>Umgang mit Kontaktdaten</strong></p>


                                <p>Nehmen Sie mit uns als Websitebetreiber durch die angebotenen Kontaktmöglichkeiten
                                  Verbindung auf, werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und
                                  Beantwortung Ihrer Anfrage zurückgegriffen werden kann. Ohne Ihre Einwilligung werden
                                  diese Daten nicht an Dritte weitergegeben.</p>


                                <p><strong>Umgang mit Kommentaren und Beiträgen</strong></p>


                                <p>Hinterlassen Sie auf dieser Website einen Beitrag oder Kommentar, wird Ihre
                                  IP-Adresse
                                  gespeichert. Dies erfolgt aufgrund unserer berechtigten Interessen im Sinne des Art. 6
                                  Abs. 1 lit. f. DSGVO und dient der Sicherheit von uns als Websitebetreiber: Denn
                                  sollte
                                  Ihr Kommentar gegen geltendes Recht verstoßen, können wir dafür belangt werden,
                                  weshalb
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
import {mapGetters} from "vuex";

export default {
  name: 'HomeView',
  data() {
    return {
      vorname: '',
      nachname: '',
      email: '',
      handynummer: '',
      nachricht: '',
    }
  },
  created() {
  },
  computed: {
    ...mapGetters(['tab'])
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
    },
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
  background-image: url("../assets/background-mobile.png");
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
  background-image: url("/src/assets/Bodtländer.jpg");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
}

.profil-bild-tablet {
  height: 50vh;
  width: 100%;
  background-image: url("/src/assets/Bodtländer.jpg");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
}

.profil-bild-mobile {
  height: 30vh;
  width: 100%;
  background-image: url("/src/assets/Bodtländer.jpg");
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
  transform: scale(0.8)
}

.kontaktformular-tablet {
  height: 600px;
  width: 350px;
  background-color: transparent;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.70) 20%, rgba(255, 176, 1, 0.70) 100%);
  backdrop-filter: blur(4px);
  border: solid 2px rgba(3, 3, 3, 0.93);
  border-radius: 30px !important;
  transform: scale(1.3)
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
  color: white;
}

p {
  font-size: 13px;
  color: black;
}

a {
  font-size: 13px;
}

.termin {
  position: relative;
  left: -20%;
  top: 70%;
  transform: scale(0.6);
  max-width: 220px
}

.termin-tablet {
  position: relative;
  left: -10%;
  top: 80%;
  transform: scale(0.9);
  max-width: 220px
}

li {
  font-size: 13px;
  color: black;
}
</style>
