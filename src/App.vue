<template>
  <v-app>
     <router-view/>
   
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
//import Sidebar from '../components/sidebar/sidebarHome.vue'
// import loggedInMixin from '@/components/mixins/loggedInMixins'
export default {
  mounted(){
    if(localStorage.getItem("api_token")!== null) {
      return        
    }

  },
  
  component:{

  },
  data () {
    return {
     fixed: false
     
    }
  },
  name: 'App',
  //mixins:[loggedInMixin]
}
</script>

