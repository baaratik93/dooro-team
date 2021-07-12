<template>
    <v-card elevation="32" class="rounded-xl flex" style="opacity:.8" min-width="200px" max-width="700px">
        <v-list class="list" color="#1976D2">
            <v-list-item v-for="(l, i) in liste[1]" :key="i" class="mt-5 ">
                        <v-avatar class="ml-5">
                            <img :src="getUrlImage(l.src)" width="50">
                        </v-avatar>
                        <v-progress-linear
                            v-model="l.skill"
                            color="#F9FBE7"
                            height="25"
                            class="mx-5 rounded-xl"
                            >
                                {{l.skill}}%
                        </v-progress-linear><br>
                        <span class="ml-5 hidden-md-and-down"
                        style="width:100px; font-size: 25px; font-family: Lato; background: transparent;color:#F9FBE7; padding: 1px; border-radius: 10px">
                            {{ l.title }}
                        </span>
            </v-list-item>
    </v-list>
    <v-card-title color="blue darken-4" class="mx-auto blue lighten-4">
        <v-avatar>
            <img :src="getUrlImage(image)"/>
        </v-avatar>
        <span class="mx-10" style="color:#1E88E5;font-family:lato;font-size: 35px;letter-spacing:5px;">{{ name }}</span>        
    </v-card-title>
    </v-card>
</template>

<script>
export default {
    data(){
        return {
            testa: 50
        }
    },
    props: ['liste', 'name', 'image'],
    methods: {
        getUrlImage(e) {
            return require(`@/assets/${ e }`)
        }
    }
}
</script>

<style>
</style>