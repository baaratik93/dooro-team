<template>
    <v-list class="list">
            <v-list-item v-for="(l, i) in liste[1]" :key="i" class="mt-5">
                <v-avatar class="ml-5">
                    <img :src="getUrlImage(l.src)" width="50">
                </v-avatar>
                <span class="ml-5 hidden-sm-and-down">
                    {{ l.title }}
                </span>
            </v-list-item>
    </v-list>
</template>

<script>
export default {
    props: ['liste'],
    methods: {
        getUrlImage(e) {
            return require(`@/assets/${ e }`)
        }
    }
}
</script>

<style>

</style>