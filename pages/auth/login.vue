<template>
    <v-container class="mt-12">
       <v-dialog
          v-model="active" 
          persistent :overlay="active"
          max-width="500px"
          transition="dialog-transition"
        >
          <v-card
              class=""
          elevation="290"
              max-width=""
            >
              <v-card-text>
                <p class="">
                 
                </p>
                <div class="text--primary">
                   <v-form>
          <v-text-field
            type="text"
            outlined
            label="Prénom"
            color></v-text-field>
          

          <v-text-field
            type="text"
            outlined
            label="Nom"
            color></v-text-field>

            <v-text-field
            type="text"
            outlined
            label="Téléphone"
            color></v-text-field>

            <v-text-field
            type="text"
            label="Email"
            outlined
            color></v-text-field>
            <v-text-field
            type="password"
            label="Mot de passe"
            outlined
            color></v-text-field>
            <v-text-field
            type="password"
            label="Confirmez votre mot de passe"
            outlined
            color></v-text-field>
        </v-form>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="success"
                  @click.stop="active = false"
                >
                 Terminer
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-dialog>
            <v-btn small elevation="2" @click.stop="active = true" color="info">S'inscrire</v-btn>
        
     </v-container>
</template>
 <script>
    export default {
      data() {
        return  {
          active: false
        }
      }
    }
  </script>