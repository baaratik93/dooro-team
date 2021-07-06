<template>
   <v-container class="conteneur">
      <v-form>
          <fieldset>
              <legend>Demander un devis</legend>
               <v-text-field
                    type="text"
                    error-count=""
                    placeholder="Votre nom complet"
                    append-icon=""
                    outlined
                    rounded
                    class="form-input mx-auto my-2"
                    color="accent"></v-text-field>
                <v-text-field
                    type="text"
                    error-count=""
                    placeholder="Votre mail"
                    append-icon=""
                    outlined
                    rounded
                    class="form-input mx-auto my-2"
                    color="accent"></v-text-field>

                <v-text-field
                    type="text"
                    error-count=""
                    placeholder="Numéro de téléphone"
                    append-icon=""
                    outlined
                    rounded
                    class="form-input mx-auto my-2"
                    color="accent"></v-text-field>
                <v-text-field
                    outlined
                    type="text"
                    placeholder="Adresse"
                    append-icon="mdi-name"
                    rounded
                    class="form-input mx-auto my-2"
                    color="accent"></v-text-field>
                
                  <v-textarea
                          color=""
                          outlined
                          rounded
                          error-count=""
                          name=""
                          roun²
                          placeholder="Rédiger la description de votre projet"
                          round
                          class="form-input mx-auto"
                        ></v-textarea>
                            
                        
                </fieldset>
      </v-form>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        Alert() {
            console.log("Merci")
        }
    }
}
</script>

<style scoped>
fieldset {
    border-radius: 30px;
}
    .form-input {
        max-width: 600px;
        min-width: 450px;
        padding: 10px;
    }
</style>

