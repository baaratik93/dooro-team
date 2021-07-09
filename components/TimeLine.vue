<template>
    <v-list class="list rounded-lg" color="#FFE005" width="450px">
            <v-list-item v-for="(l, i) in liste[1]" :key="i" class="mt-5 d-flew flex-row space-between-around">
                        <v-avatar class="ml-5">
                            <img :src="getUrlImage(l.src)" width="50">
                        </v-avatar>
                    <div>
                        <span class="ml-5 hidden-sm-and-down" 
                        style="width:50px; background: #FFC400; padding: 10px; border-radius: 10px">
                            {{ l.title }}
                        </span>
                    </div>
                    <v-progress-linear
                        v-model="testa"
                        color="#FFC400"
                        height="25"
                        rounded
                        >
                            {{l.skill}}%
                    </v-progress-linear>
            </v-list-item>
    </v-list>
</template>

<script>
export default {
    data(){
        return {
            testa: 50
        }
    },
    props: ['liste'],
    methods: {
        getUrlImage(e) {
            return require(`@/assets/${ e }`)
        }
    }
}
</script>

<style>
.list {
    background-color: #FFE005;
}
</style>