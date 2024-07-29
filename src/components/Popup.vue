<template lang="">
    <v-dialog  max-width="600px">
        <v-text-field label="First name"></v-text-field>    
        <v-btn flat slot="activator" class='success' @click=openPopup()>Add new Project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>

            <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
        </v-card>
        
        <h1 v-text="text">{{popupView}}</h1>
    </v-dialog>
</template>
<script>
  export default {
     data :() =>({
      popupview : false

     }),
    methods:{
        openPopup(){ alert(this.popupView)
        this.popupView = (this.popupView) ? false : true
        }
    }
     
  }
</script>
<style lang="">
    
</style>