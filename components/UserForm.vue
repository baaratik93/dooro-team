<template>
    <v-container class="mt-12">
       <v-dialog
          v-model="activate"
          max-width="100%"
          transition="dialog-transition"
          class="dialogu mt-12"
          
        >
        
          <v-card
              class="form  mx-auto"
              elevation="32"
              max-width="400px"
            >
            <VCardTitle primary-title>Devenir membre<v-spacer></v-spacer>
                <v-btn fab @click.stop="closeDialog" small elevation="16" color="error">
                    X
                </v-btn>
            </VCardTitle>
            <v-form>
            
            
              <v-card-text>
                <div class="text--primary">
                    <v-text-field
                        type="text"
                        outlined
                        rounded
                        
                        label="Nom complet"/>

                    <v-text-field
                    type="text"
                    outlined
                    rounded
                    label="Téléphone"/>

                    <v-text-field
                    type="text"
                    label="Email"
                    outlined
                    rounded
                    color/>

                    <v-text-field
                    type="password"
                    label="Mot de passe"
                    outlined
                    rounded
                    color/>

                    <v-text-field
                    type="password"
                    label="Confirmez votre mot de passe"
                    outlined
                    small
                    rounded
                    color/>
        
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  rounded
                  color="blue-grey darken-4"
                  elevation="64"
                  class="info mx-auto"
                  text
                  @click.stop="closeDialog"
                >
                 Terminer
                </v-btn>
              </v-card-actions>
              </v-form>
            </v-card>
        </v-dialog>
            <!-- <v-btn small elevation="32" @click.stop="active = true" color="info">S'inscrire</v-btn> -->
        
     </v-container>
</template>
 <script>
    export default {
    computed: {
        activate () {
            return this.$store.state.active
        }
    },
    methods: {
        closeDialog (){
            this.$store.commit("SET_DIALOG", false)
        },
    }
    }
  </script>

  <style scoped>
    .form {
        margin-top: 50px;
        border-radius: 50px;
        z-index: 10;
    }
  </style>