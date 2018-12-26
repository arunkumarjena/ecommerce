<template>
	<div class="background">
		<sidebar></sidebar>
		<v-content>
			<v-container>
			  <v-layout justify-center>
			    <v-flex xs12 sm8 md4>
			      <v-card class="mt-3 pb-3 elevation-7">
			        <v-card-text>
			          <h3 class="headline text-xs-center pt-4">Register</h3>
			        </v-card-text>
			        <v-card-text>
			          <v-form v-model="valid" ref="form" lazy-validation>
			          	<v-layout row>
			          		<v-flex xs12>
			          			<v-text-field
			          			  name="email"
			          			  label="Email"
			          			  id="email"
			          			  prepend-icon="email"
			          			 
			          			  required
			          			></v-text-field>
			          		</v-flex>
			          	</v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="phone"
                        label="Phone"
                        id="phone"
                        prepend-icon="phone"
                       
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

			          	<v-layout row>
			          		<v-flex xs12>
			          			<v-text-field
			          			  name="password"
			          			  label="Password"
			          			  id="email"


			          			  prepend-icon="lock"
			          			  :rules="passwordRules"
			          			 
			          			  required
			          			></v-text-field>
			          		</v-flex>
			          	</v-layout>
			          	 <v-layout class="pt-4">
                    <v-flex xs12 md12 class="text-xs-right">
                      <v-btn block class="error" 
                             @click="submit">Register 
                             
                      </v-btn>
                    </v-flex>

                  </v-layout>
                  <v-layout row wrap class="pt-4">
                    <v-flex xs6 md6 sm6>
                      <p><router-link to="/"><b style="color:#039be5;cursor:pointer;font-weight:400;" class="pl-4">Existing User...!</b></router-link></p>
                    </v-flex>
                  </v-layout>
			          </v-form>
			        </v-card-text>
			      </v-card>
			    </v-flex>
			  </v-layout>
			</v-container>
		</v-content>
	</div>
</template>
<script>
	import Sidebar from '../sidebar/sidebar.vue'
	 export default {
    mounted(){
      if (localStorage.user) {
      this.name = localStorage.user;
    }

    },
    components:{
    'sidebar':Sidebar
  },
    data: () => ({
      user:{
        password:'',
        email:'',
        id:''
      },
      drawer: false,
      valid:false,
     
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'

      ],

      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be 8 characters'
      ]
    }),
    props: {
      source: String
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          localStorage.setItem('user_id' , this.user.email)
          localStorage.setItem('phone_no' , this.user.phone)          
          localStorage.setItem('user_password', this.user.password)
          localStorage.setItem("userChecker","loggedin")
          this.$router.push('/home')
          
        }
      },

      onDismissed(){
        this.clear()
        this.errorAlert=false

      },
      clear () {
        this.$refs.form.reset()
	      }

  	}
     
    //mixins:[loggedInMixin]
  }
</script>
<style scoped>
  .background{
    height:100%;
    background:#ff66cc !important;
  }
</style>