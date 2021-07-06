<template> 
  <v-container class="ml-12">
    <v-timeline
      dense
      clipped
    >
      <v-timeline-item
        fill-dot
        class="white--text mb-5"
        id="skills"
      >
            <template v-slot:icon class="accent">
              <img src="@/assets/compet.jpg" style="border-radius:50%"  alt="Nos compétences" height="90" width="90">
            </template>
            
            <v-btn class="accent" color="#A6D7CD" width="100%" rounded light>
              <span class="mainSkill">Nos compétences</span>
            </v-btn>
            <v-timeline class="principale mt-5 accent" 
              style="background: #A6D7CD; border-radius: 50px">
                  <v-timeline-item
                  fill-dot
                  class="text-right white--text mb-12"
                  color="#A6D7CD"
                  left
                  >
                      <template v-slot:icon>
                        <img src="@/assets/js.png" width="200"/>
                      </template>
                      <time-line :liste="js"/>
                  </v-timeline-item>

                  <v-timeline-item
                      fill-dot
                      class="white--text mb-12 hidden-sm-and-down"
                      color="#A6D7CD"
                      right
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
                      left
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
                      class="mb-12"
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


      <v-timeline-item id="partners"> 
        <template v-slot:icon>
            <img src="@/assets/patners.png" style="border-radius:50%" height="90" width="90" class="ma-5"/>
        </template>
        <v-btn  color="#A6D7CD" class="accent" width="100%" rounded light>
              <v-icon >mdi-plus</v-icon><span class="mainSkill">Ils nous font confiance</span>
        </v-btn>
        <TeamPartners class="ml-20 accent"/>
      </v-timeline-item>

      <v-timeline-item id="contacts"> 
        <template v-slot:icon>
            <img src="@/assets/patners.png" style="border-radius:50%" height="90" width="90" class="ma-12"/>
        </template>
        <v-btn  color="#A6D7CD" width="100%" class="accent" rounded light>
              <span class="mainSkill">Demandez un devis</span>
        </v-btn>
        <team-devis class="ml-20 mt-5 accent"/>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
 
export default {
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
            src:'cakephp.png',
            title: 'CakePHP'
          },
          {
            src:'wordpress.png',
            title: 'WordPress'
          },
          {
            src:'joomla.png',
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
            src:'less.png',
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