<template>
    <v-app v-scroll="onScroll">
       <navigation-drawer :drawer="drawer"  id="drawer" class="hidden-md-and-up"/>
        <v-app-bar dense class="accent" fixed >
            <v-app-bar-nav-icon class="py-5 my-6 hidden-md-and-up" @click.native.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="py-5 my-3 ">Dooro - Digital</v-toolbar-title>
                <v-spacer></v-spacer>
                <nuxt-link  v-for="m in menus" :key="m.id" :to="m.link" color="primary" class="menu hidden-sm-and-down ml-5">
                    <v-icon class="mb-1 pa-1 -2">
                        {{ m.icon }}
                    </v-icon>
                    <span>
                        {{ m.name }}
                    </span>
                </nuxt-link>
                <v-btn icon to="/login" class="menu ml-10 py-5 my-6">
                    <v-icon>mdi-login</v-icon>
                </v-btn>
                <v-btn icon class="menu ml-1 py-5 my-7">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
        </v-app-bar>
            <nuxt id="main"/>
        
        
        
        
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            scroll: 0
        }
    },
    methods: {
        onScroll(e) {
            console.log(e.target)
        }
    },
    computed: {
            menus (){
                return this.$store.state.menus
            }
        }
}
</script>

<style>
    html{
        position: relative;
        margin: 0;
        padding: 0;
    }

    .menu {
        border: .1px solid black;
        padding: 3px;
        border-radius: 10px;
        font-size: 20px;
    }
    
    button {
        text-transform: lowercase;
    }
    a {
        text-decoration: none;
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
        background-color:lightcyan;
        border-radius: 50px;
    }
    #skills .list {
        background-color:lightcyan;
        border-radius: 25px;
        margin-right: 25px;
        margin-left: 25px;
    }
    #skills span .mainSkill{
        color: #01BD92;
        font-family: Georgia, 'Times New Roman', Times, serif;
        word-spacing: 20px;
        letter-spacing: 10px;
        
    }
    #skills span {
        color: #1CB9D7;
        font-size: 30px;
        font-stretch: ultra-expanded;
    }
    #skills .principale {
        background-color:whitesmoke;
    }

    #partners {
        background-color: #A6D7CD;
        border-radius: 50px;
    }
    /*
    #drawer {
        position: absolute;
        background-color: yellowgreen;
    } */
</style>