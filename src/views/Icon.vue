<template>
  <v-container>
    <v-card>
      <v-icon>mdi-account</v-icon>
      <v-icon large color="red">mdi-comment</v-icon>
    </v-card>
    <v-flex class="mt-4 mb3">
      <Popup/>
    </v-flex>
  </v-container>
  
</template>

<script>
import Popup from '../components/Popup.vue'
  export default {
    components: {"Popup":Popup},
     data :() =>({
      popupview : false,

     }),
  methods:{
    openPopup(){
      this.popupView = (this.popupView) ? false : true
    }
  }
     
  }
</script>