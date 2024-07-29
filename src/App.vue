<template>
  <router-view/>
</template>

<script>
import menuinfo from './views/MenuInfo.vue' 
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    gradient:'rgba(0,0,0,0.7), rgba(0,0,0,0.5)',
    
    right: null,
    components: {
      menuinfo
    },
  }),
};  
</script>
