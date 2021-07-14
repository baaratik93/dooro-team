<template>
    <v-app>
    <particles-animate style="z-index: 11;position: sticky;"/>
        <!-- v-scroll="onScroll" -->
    <div id="accueil" class="index mt-12 d-flex flex-column">
        <h2 class="mt-10 h-title hidden-sm-and-down" v-if="!activate">Votre dev en temps réel</h2>
          <span class="h-title hidden-md-and-up">Votre dev en temps réel</span>

        <img src="~/assets/logosso.png" width="350px">
        <p class="h-title" v-if="!activate">
            Le monde appartient à ceux qui se lève tôt.
            Pourquoi attendre à être membre de la communauté NoSCode.<br>
            <v-btn class="secondary" @click.prevent="openDialog">J'explore</v-btn>
        </p>
    </div>
    <section class="skill" id="competences">
        <h2 class="h-title hidden-sm-and-down">Compétences</h2>
        <div style="text-align:center"><span class="h-title mt-5 hidden-md-and-up">Compétences</span></div>

        <v-container>
            <v-layout row wrap class="ma-5">
                <v-flex xs12 sm6 md4 lg4>
                      <time-line class="ma-3" image="js.png" name="JScript" :liste="js"/>
                </v-flex>
                <v-flex xs12 sm6 md4 lg4>
                      <time-line class="ma-3" image="php.png" name="PHP" :liste="php"/>
                </v-flex>
                <v-flex xs12 sm6 md4 lg4>
                      <time-line class="ma-3" image="css.png" name="Styling" :liste="css"/>
                </v-flex>
            </v-layout>
            <v-layout id="#teams" class="a-5" row wrap>
                <h2 class="h-title hidden-sm-and-down"> All team members</h2>
                <v-flex xs10 sm10 class="mx-auto">
                    <h3 class="mx-auto h-title hidden-md-and-up">Tous les membres</h3>
                </v-flex>
                <v-flex xs12 sm6 md4 lg3 >
                  <team-member/>
                </v-flex>
                <v-flex xs12 sm6 md4 lg3 >
                  <team-member/>
                </v-flex>
                <v-flex xs12 sm6 md4 lg3 >
                  <team-member/>
                </v-flex>
                <v-flex xs12 sm6 md4 lg3 >
                  <team-member/>
                </v-flex>
                <v-flex xs12 sm6 md4 lg3 >
                  <team-member/>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
    <user-form/>
       <navigation-drawer :drawer="drawer"  id="drawer" class="hidden-md-and-up"/>
        <v-app-bar dense class="secondary" fixed style="z-index: 15;">
            <v-toolbar-title class="py-5 my-3 logotitle"><nuxt-link to="#accueil"><span class="blue--text">NoS</span><span>Code</span></nuxt-link></v-toolbar-title>
                <v-spacer></v-spacer>
                <nuxt-link  v-for="m in menus" :key="m.id" :to="m.link" class="menu hidden-sm-and-down ml-5">
                    <v-icon class="mb-1 pa-1 -2" color="primary">
                        {{ m.icon }}
                    </v-icon>
                    <span class="primary--text darken-4">
                        {{ m.name }}
                    </span>
                </nuxt-link>
                <div class="py-2">
                    <v-btn icon to="auth/login" class="menu ml-10 py-2 my-3">
                        <v-icon color="primary">mdi-login</v-icon>
                    </v-btn>
                    <v-btn icon class="menu ml-1 py-2 my-3">
                        <v-icon color="primary">mdi-account</v-icon>
                    </v-btn>
            <v-app-bar-nav-icon class="py-2 my-3 hidden-md-and-up" @click.native.stop="drawer = !drawer"></v-app-bar-nav-icon>

                </div>
        </v-app-bar>
        <animate-logo/>
            <nuxt id="main"/>
        </v-app>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            active: false,
            scroll: 0,
            js: [
        "list",
        [
          {
            src:'vue.png',
            title: 'Vue.js/Nuxt.js',
            skill: 80
          },
          {
            src:'react.png',
            title: 'React.js/Next.js',
            skill: 40
          },
          {
            src:'node.png',
            title: 'Node.js',
            skill: 70
          },
          {
            src:'jquery.png',
            title: 'Jquery',
            skill: 50
          },
          {
            src:'electron.png',
            title: 'Electron',
            skill: 70
          },
          {
            src:'strapi.png',
            title: 'Strapi',
            skill: 65
          },
        ]
      ],
      php: [
        "list",
        [
          {
            src:'laravel.png',
            title: 'Laravel',
            skill: 60
          },
          {
            src:'symfony.png',
            title: 'Symfony',
            skill: 50
          },
          {
            src:'cakephp.png',
            title: 'CakePHP',
            skill: 65
          },
          {
            src:'wordpress.png',
            title: 'WordPress',
            skill: 98
          },
          {
            src:'joomla.png',
            title: 'Joomla',
            skill: 60
          },
          
        ]
      ],
      css: [
        "list",
        [
          {
            src:'saas.png',
            title: 'Saas',
            skill: 75
          },
          {
            src:'less.png',
            title: 'Less',
            skill: 75
          },
          {
            src:'stylus.png',
            title: 'Stylus',
            skill: 60
          },
          
        ]
      ],
        }
    },
    methods: {
        onScroll(e) {
            console.log(e.target)
        },
        openDialog (){
            this.$store.commit("SET_DIALOG", true)
        }
    },
    computed: {
            menus (){
                return this.$store.state.menus
            },
            activate () {
            return this.$store.state.active
        }
        }
}
</script>

<style lang="scss">

        $primary: #ffffff;
        $secondary: #f06700;
        $accent: #088b86;
        $error: #b71c1c;
body {
        background: $secondary;
}
 html{
        margin: 0;
        padding: 0;
        opacity: .9;
    }
    .drawer {
      z-index: 25;
    }
    .notdrawer {
      z-index: 1;
    }
    .timeline {
        max-width: 80%;
        min-width: 40%;
        margin: auto ;
    }
    .index {
        position: absolute;
        background-image: url("../assets/background3.svg");
        background-size: cover;
        background-attachment: fixed;
        z-index: 10;
        top: 0;
        height: 125%;
        width: 100vw;
        min-width: 352px;
        margin: auto;
        transition: all 10s ease;
        animation: nocode 5s linear 2s infinite alternate;
        img {
            position: absolute;
            top: 55%;
            left: 21%;
            border-radius: 50%;
        }
        p {
            position: absolute;
            font-family: Lato;
            font-size: 18px;
            font-weight: bold;
            color: $primary;
            text-align: center;
            letter-spacing: 1px;
            max-width: 450px;
            top: 30%;
            right: 10%;
        }
    }
    h2 {
            position: absolute;
            left: 0;
            font-family: biorythme;
            font-size: 22px;
            max-width: 600px;
            min-width: 400px;
            letter-spacing: 1px;
            transform: translateY(350%) translateX(-44%) rotate(-90deg);
            // animation: animate .8s linear 2s infinite alternate;
        }
    .skill {
        position: absolute;
        background-color: $accent;
        width: 100%;
        top: 125%;
        height: 4600px;
        transform: translate(-50% -50%) rotate(-190deg);
        z-index: 10;
        opacity: 1;
        h2 {
            letter-spacing: 10px;
        }
    }

    .logotitle {
        font-size: 25px;
        font-weight: bold;

        span {
            letter-spacing: 2px;
        }

    }

    .h-title{
      margin: auto;
      padding: 10px;
      border-radius: 15px;
      color: $primary;
      font-size: 35px;
      letter-spacing: 3px;
      font-family: lato;
    }
   

    .menu {
        padding: 1px;
        border-radius: 10px;
        font-size: 15px;
        span {
            letter-spacing: 3px;
        }
    }

    @font-face {
        font-family: "dscript";
        src: url("../assets/PlayfairDisplay-Italic.ttf");
        }
     @font-face {
        font-family: "biorythme";
        src: url("../assets/BioRhyme-ExtraBold.ttf");
        }
    button {
        text-transform: lowercase;
    }
    a {
        text-decoration: none;
        color: #5e6569;
    }
    @keyframes nocode {
      0% {
              width: 100vw;
      }
      25% {
              width: 99vw;
              background-image: url("../assets/background3.svg");
              background-size: cover;
      }
      50% {
        width: 98vw;
        background-image: url("../assets/background3.svg");
              background-size: cover;
      }
      75% {
        width: 97vw;
        background-image: url("../assets/background3.svg");
              background-size: cover;
      }
      100% {
        width: 96vw;
    
      }
      75% {
              width: 97vw;

      }
      50% {
        width: 98vw;
    
      }
      25% {
        width: 99vw;
      }
      0% {
        width: 100vw;
    
      }
      
    }
     /* 
    #footer { 
        position: absolute;
        bottom:0;
    }
    #skills {
        border-radius: 50px;
    }
    #skills .list {
        background-color:transparent;
        border-radius: 25px;
        margin-right: 25px;
        margin-left: 25px;
        
    }
    #skills .list li {
        color: white;
    }
    #skills span .mainSkill{
        color: #f6f8f8;
        font-family: Georgia, 'Times New Roman', Times, serif;
        word-spacing: 20px;
        letter-spacing: 10px;
        
    }
    #skills span {
        color: #1CB9D7;
        font-size: 20px;
        font-stretch: ultra-expanded;
    }
    #skills .principale {
        background-color:whitesmoke;
    } 
    .conteneur {
        background-color: #A6D7CD;
        border-radius: 50px;
    }
    @keyframes animate {
        0% {
            letter-spacing: 1px;
            height: 10px;
        }

        25% {
            letter-spacing: 2px;
            font-size: 10px;
            height: 20px;

        }

        75% {
            letter-spacing: 3px;
            font-size: 12px;
            height: 30px;
        }

        100% {
            letter-spacing: 4px;
            font-size: 18px;
            background-color: yellowgreen;
            height: 40px;

        }
    }
    */
</style>