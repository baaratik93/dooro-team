<template>
    <v-app>
        <!-- v-scroll="onScroll" -->
    <div id="accueil" class="index mt-12 d-flex flex-column">
        <h2 class="mt-10 hidden-sm-and-down" v-if="!activate">Votre dev en temps réel</h2>
        <img src="~/assets/logosso.png" width="350px">
        <p v-if="!activate">
            Le monde appartient à ceux qui se lève tôt.
            Pourquoi attendre à être membre de la communauté Dooro - Digital.
            <nuxt-link to="#"><button @click.prevent="openDialog">Je commence ici</button></nuxt-link>
        </p>
    </div>
    <div class="skill" id="competences">
        <h2>Compétences</h2>
             <v-timeline class="timeline">
                <v-timeline-item>
                    <template v-slot:icon>
                            <img src="~/assets/php.png" width="80px" height="80px" />
                    </template>
                    <time-line class="ml-13" :liste="php"/>
                </v-timeline-item>
                <v-timeline-item color="#748B9C" class="text-right">
                    <template v-slot:icon>
                            <img src="~/assets/js.png" height="90" width="190"/>
                    </template>
                    <time-line class="mr-12" :liste="js"/>
                </v-timeline-item>
                <v-timeline-item>
                    <template v-slot:icon>
                            <img src="~/assets/css.png" height="95px" width="150px"/>
                    </template>
                    <time-line class="ml-13 pa-1" :liste="css"/>
                </v-timeline-item>
              </v-timeline>
    </div>
    <user-form/>
       <navigation-drawer :drawer="drawer"  id="drawer" class="hidden-md-and-up"/>
        <v-app-bar dense color="#FAD512" fixed style="z-index: 15">
            <v-app-bar-nav-icon class="py-5 my-6 hidden-md-and-up" @click.native.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="py-5 my-3 logotitle"><nuxt-link to="#accueil">D'oro<span>digital</span></nuxt-link></v-toolbar-title>
                <v-spacer></v-spacer>
                <nuxt-link  v-for="m in menus" :key="m.id" :to="m.link" class="menu hidden-sm-and-down ml-5">
                    <v-icon class="mb-1 pa-1 -2">
                        {{ m.icon }}
                    </v-icon>
                    <span>
                        {{ m.name }}
                    </span>
                </nuxt-link>
                <div class="py-2">
                    <v-btn icon to="auth/login" @click="$emit('alert')" class="menu ml-10 py-2 my-3">
                        <v-icon>mdi-login</v-icon>
                    </v-btn>
                    <v-btn icon class="menu ml-1 p2-5 my-3">
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                </div>
        </v-app-bar>
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
            skill: 75
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
 html{
        margin: 0;
        padding: 0;
    }
    .timeline {
        max-width: 80%;
        min-width: 40%;
        margin: auto ;
    }
    .index {
        position: absolute;
        background-image: url("../assets/background1.svg");
        background-size: cover;
        background-attachment: fixed;
        z-index: 10;
        top: 0;
        height: 120%;
        width: 100vw;
        min-width: 500px;
        margin: auto;
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
            // color: #5e6569;
            color: #FAFAFA;
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
            font-size: 42px;
            max-width: 600px;
            min-width: 200px;
            border-radius: 10px 30px 10px 30px;
            letter-spacing: 1px;
            color: white;
            transform: translateY(350%) translateX(-44%) rotate(-90deg);
            // animation: animate 8s linear infinite;
        }
    .skill {
        position: absolute;
        background-color: #748B9C;
        top: 80%;
        z-index: 30;
        width: 110%;
        top: 125%;
        height: 1300px;
        transform: translate(-50% -50%) rotate(-190deg);
        z-index: 10;
        h2 {
            letter-spacing: 30px;
            margin: 55px 0;
        }
    }

    .logotitle {
        color: #4B555C;
        font-size: 25px;
        font-weight: bold;

        span {
            color: white;
            letter-spacing: 2px;
        }

    }
   

    .menu {
        padding: 1px;
        border-radius: 10px;
        font-size: 12px;
        span {
            color: #5e6569;
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
     /* #particules {
        position: absolute;
        top: 0;
        bottom: 0;
    } */
    #main {
        position: absolute;
        top: 0;
        bottom: 1%;;
        padding: 10% 5%;
    }
    /* 
    #header {
        position: absolute;
        left: 1px;
        right: 1px;
    }*/
    // #footer { 
    //     position: absolute;
    //     bottom:0;
    // }
    // #skills {
    //     border-radius: 50px;
    // }
    // #skills .list {
    //     background-color:transparent;
    //     border-radius: 25px;
    //     margin-right: 25px;
    //     margin-left: 25px;
        
    // }
    // #skills .list li {
    //     color: white;
    // }
    // #skills span .mainSkill{
    //     color: #f6f8f8;
    //     font-family: Georgia, 'Times New Roman', Times, serif;
    //     word-spacing: 20px;
    //     letter-spacing: 10px;
        
    // }
    // #skills span {
    //     color: #1CB9D7;
    //     font-size: 20px;
    //     font-stretch: ultra-expanded;
    // }
    // /* #skills .principale {
    //     background-color:whitesmoke;
    // } */
    // .conteneur {
    //     background-color: #A6D7CD;
    //     border-radius: 50px;
    // }
    // @keyframes animate {
    //     0% {
    //         letter-spacing: 1px;
    //         height: 10px;
    //     }

    //     25% {
    //         letter-spacing: 2px;
    //         font-size: 10px;
    //         height: 20px;

    //     }

    //     75% {
    //         letter-spacing: 3px;
    //         font-size: 12px;
    //         height: 30px;
    //     }

    //     100% {
    //         letter-spacing: 4px;
    //         font-size: 18px;
    //         background-color: yellowgreen;
    //         height: 40px;

    //     }
    // }
</style>