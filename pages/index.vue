<template>
<main>
   <v-container class="">
</h1>
    <team-home/>
    <!-- <team-skills/> -->
    
    </v-container>


</main>
</template>

<script>
import TeamHome from '~/components/TeamHome.vue'

export default {
  name: 'HomePage',
  components: { TeamHome },
  data () {
    return {
      bp: ''
    }
  },
  mounted() {
    console.log(this.$vuetify.breakpoint)
  },
}
</script>
