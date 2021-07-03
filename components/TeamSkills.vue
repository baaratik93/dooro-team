<template>
  <v-container id="skills">
    <v-timeline
      dense
      clipped
    >
      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        large
      >
            <template v-slot:icon>
              <img src="@/assets/compet.jpg" style="border-radius:50%"  alt="Nos compétences" height="100">
            </template>
            <v-btn  color="#9CBFD7" width="100%" rounded-md light>
              <v-icon >mdi-plus</v-icon><span class="mainSkill">Nos compétences</span>
            </v-btn>
            <v-timeline class="principale mt-5" 
              style="background: #A6D7CD; border-radius: 50px">
                  <v-timeline-item
                  fill-dot
                  class="text-right white--text mb-12"
                  color="#A6D7CD"
                  >
                      <template v-slot:icon>
                        <img src="@/assets/js.png" width="200"/>
                      </template>
                      <time-line :liste="js"/>
                  </v-timeline-item>

                  <v-timeline-item
                      fill-dot
                      class="white--text mb-12"
                      color="#A6D7CD"
                      >
                      <template v-slot:icon>
                          <img src="@/assets/php.png" width="120"/>
                      </template>
                      <time-line :liste="php"/>
                  </v-timeline-item>

                  <v-timeline-item
                      fill-dot
                      class="white--text mb-12"
                      color="#A6D7CD"
                      >
                      <template v-slot:icon>
                        <img src="@/assets/css.png" width="120"/>
                      </template>
                      <time-line :liste="css"/>
                  </v-timeline-item>

                  <v-timeline-item
                      fill-dot
                      class="white--text mb-12"
                      color="#A6D7CD"
                      >
                      <template v-slot:icon>
                        <img src="@/assets/rest.png" width="150" height="200"/>
                      </template>
                      <time-line :liste="api"/>
                  </v-timeline-item>

                  <v-timeline-item
                      fill-dot
                      class="white--text mb-12"
                      color="#A6D7CD"
                      >
                      <template v-slot:icon>
                        <img src="@/assets/graphql.png" width="150" class="mt-12"/>
                      </template>
                      <time-line :liste="css"/>
                  </v-timeline-item>

                  <v-timeline-item
                      fill-dot
                      class="white--text mb-12"
                      color="#A6D7CD"
                      >
                      <template v-slot:icon>
                        <img src="@/assets/adobe.png" height="150" style="border-radius:50%" class="mt-12"/>
                      </template>
                      <time-line :liste="css"/>
                  </v-timeline-item>
            </v-timeline>
      </v-timeline-item>

      <v-slide-x-transition
        group
      >
        <v-timeline-item
          v-for="event in timeline"
          :key="event.id"
          class="mb-4"
          color="pink"
          small
        >
          <v-row justify="space-between">
            <v-col
              cols="7"
              v-text="event.text"
            ></v-col>
            <v-col
              class="text-right"
              cols="5"
              v-text="event.time"
            ></v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item>
        <template v-slot:icon>
            <img src="@/assets/patners.png" style="border-radius:50%" height="90" width="90" class="ma-12"/>
        </template>
        <v-btn  color="#9CBFD7" width="100%" rounded-md light>
              <v-icon >mdi-plus</v-icon><span class="mainSkill">Nos partenaires</span>
        </v-btn>
        <TeamPartners class="ml-20"/>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import TimeLine from './TimeLine.vue'
 
export default {
  components: { TimeLine },
  data() {
    return {
    
      js: [
        "list",
        [
          {
            src:'vue.png',
            title: 'Vue.js/Nuxt.js'
          },
          {
            src:'react.png',
            title: 'React.js/Next.js'
          },
          {
            src:'node.png',
            title: 'Node.js'
          },
          {
            src:'jquery.png',
            title: 'Jquery'
          },
          {
            src:'electron.png',
            title: 'Electron'
          },
          {
            src:'strapi.png',
            title: 'Strapi'
          },
        ]
      ],
      php: [
        "list",
        [
          {
            src:'laravel.png',
            title: 'Laravel'
          },
          {
            src:'symfony.png',
            title: 'Symfony'
          },
          {
            src:'cakephp.jpg',
            title: 'CakePHP'
          },
          {
            src:'wordpress.png',
            title: 'WordPress'
          },
          {
            src:'joomla.jpg',
            title: 'Joomla'
          },
          
        ]
      ],
      css: [
        "list",
        [
          {
            src:'saas.png',
            title: 'Saas'
          },
          {
            src:'less.jpg',
            title: 'Less'
          },
          {
            src:'stylus.png',
            title: 'Stylus'
          },
          
        ]
      ],
      api: [
        "list",
        [
          {
            src:'larapi.png',
            title: 'Laravel/API'
          },
          {
            src:'symfapi.png',
            title: 'Symfony/API'
          },
          {
            src:'nodeapi.png',
            title: 'Node.JS/API'
          },
          
        ]
      ]
  }
}
}

</script>

<style>

</style>