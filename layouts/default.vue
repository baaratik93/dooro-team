<template>
    <v-app>
        <!-- v-scroll="onScroll" -->
    <div class="index mt-12 d-flex flex-column">
        <h2 class="mt-10 hidden-sm-and-down" v-if="!activate">Votre dev en temps réel</h2>
        <img src="~/assets/logosso.png" width="350px">
        <p v-if="!activate">
            Le monde appartient à ceux qui se lève tôt.
            Pourquoi attendre à être membre de la communauté Dooro - Digital.
            <nuxt-link to="#"><button @click.prevent="openDialog">Je commence ici</button></nuxt-link>
        </p>
    </div>
    <user-form/>
       <navigation-drawer :drawer="drawer"  id="drawer" class="hidden-md-and-up"/>
        <v-app-bar dense color="#FAD512" fixed style="z-index: 15">
            <v-app-bar-nav-icon class="py-5 my-6 hidden-md-and-up" @click.native.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="py-5 my-3 logotitle">D'oro<span>digital</span></v-toolbar-title>
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
            scroll: 0
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
    .index {
        position: absolute;
        background-image: url("../assets/background1.svg");
        background-size: cover;
        background-attachment: floor($number: 2);
        z-index: 10;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100vw;
        min-width: 500px;
        margin: auto;
        padding: 25px;

        h2 {
            font-family: biorythme;
            font-size: 62px;
            max-width: 400px;
            min-width: 200px;
            border-radius: 10px 30px 10px 30px;
            letter-spacing: 1px;
            margin-top: 10%;
            padding: 10px;
            text-align: center;
            color: white;
        }
        img {
            position: absolute;
            top: 55%;
            padding: 20px;
            left: 21%;
            border-radius: 50%;
        }
        p {
            position: absolute;
            font-family: Lato;
            font-size: 25px;
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
        font-size: 18px;
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
    /* #skills .principale {
        background-color:whitesmoke;
    } */
    .conteneur {
        background-color: #A6D7CD;
        border-radius: 50px;
    }
    
</style>