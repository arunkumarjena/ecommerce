<template>
  <div>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app v-if="checkLoggedInUser"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="" roter :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="pink darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="checkLoggedInUser"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">{{title}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat v-for="(item, i) in toolBarHeader" :key="i" v-if="!checkLoggedInUser">
        <v-icon left>{{item.icon}}</v-icon> {{item.text}}
      </v-btn>
       
       <v-btn flat v-for="(item, i) in tool" :key="i" v-if="checkLoggedInUser">
        <v-icon left>{{item.icon}}</v-icon> {{item.text}}
      </v-btn>
      <v-btn flat @click="$router.push('/')" v-if="checkLoggedInUser">Logout</v-btn>
      

     
    </v-toolbar>
  </div>
    
</template>

<script>
  export default {
    mounted () {
    },
    data: () => ({
      dialog: false,
      drawer: false,
      title:'E-Commerce',
      username:'',
      logout:false,
      items: [
        { icon: 'home', text: 'Home', link:'/home' },
        { icon: 'account_circle', text: 'Profile' },
        { icon: 'help', text: 'Help' },
        
      ],
      toolBarHeader: [
        { text:'Home', link:'/home',icon:'home' },
        { text:'About', link:'/about',icon:'info'},
        { text:'Contact', link:'/contact',icon:'chat' },
      ],
      tool: [
        { text:'Cart', link:'/about',icon:'shopping_cart'},
        // { text:'Signout',action:"loggedOut",link:'/logout',icon:'exit_to_app' }
      ]
    }),
    props: ['checkLoggedInUser']
  }
</script>