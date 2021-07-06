<template>
<main>
   <v-container class="">
    <team-home/>
    <!-- <team-skills/> -->
    </v-container>

</main>
</template>

<script>
import TeamHome from '~/components/TeamHome.vue'

export default {
  components: { TeamHome },
  name: 'HomePage',
}
</script>
