<template>
 <v-app>
     <v-navigation-drawer
            fixed
            v-model="drawer" 
            class="mt-12 pt-12 accent"
            clipped>
                    <v-container flex>
                        <v-layout row wrap>
                            <div class="mx-auto">
                                <v-avatar
                                    size="60"
                                >
                                <img src="~/assets/logo.jpg" height="50">
                            </v-avatar>
                            </div>
                        </v-layout>
                            <v-divider class="mt-5"></v-divider>
                        <v-layout flex row wrap v-for="m in menus" :key="m.id">
                            <div class="ml-10 mt-8">
                                <nuxt-link :to="m.link">
                                    <v-icon left class="mb-1 pa-1 -2">
                                        {{ m.icon }}
                                    </v-icon>
                                    <span>
                                        {{ m.name }}
                                    </span>
                                </nuxt-link>
                            </div>
                        </v-layout>
                        <v-divider class="mt-5"></v-divider>
                     </v-container>
        </v-navigation-drawer>
 </v-app>
</template>
<script>
    export default {
        props: ['drawer'],
        computed: {
            menus (){
                return this.$store.state.menus
            }
        }
    }
</script>