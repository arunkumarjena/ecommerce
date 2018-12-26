<template>
	<div>
		<sidebar :checkLoggedInUser="isLoggedIn"></sidebar>
		<v-content>
			<v-container>
          <v-layout align-center justify-center>
            <v-flex 12 sm6 md12 class="pr-3 pb-4">
              <v-card color="success">
                <v-card-title primary-title class="headline">
                  Welcome {{username}}{{dateTime}}
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
		  	<v-layout row wrap>
		  	  <v-flex xs12 sm7 md8>
		  	     <v-layout row wrap>
				      <v-flex xs12 sm5 md4 class="pr-3 pb-5 "v-for="(item,ke) in productList" :key="ke">
				      	<v-card hover flat>
				      		<v-card-media>
				      			<img :src="item.products" height="180px">
				      		</v-card-media>
				      	    <v-card-title primary-title class="headline">
				      	      {{item.name}}
				      	    </v-card-title>
				      	  <v-card-text>
				      	    {{item.description}}
				      	  </v-card-text>
                  <v-card-text>
                    {{item.specification}}
                  </v-card-text>
				      	  <v-card-actions>
				      	    <v-btn color="success" @click="addToCart(item.id)">Add To Cart</v-btn>
				      	  </v-card-actions>
				      	</v-card>
				        
				      </v-flex>

		    	 </v-layout>
		  	  </v-flex>
		  	 
		  	  <v-flex xs12 sm5 md3>
		  	    <v-card color="pink darken-1">
		  	      <v-card-title primary-title>
		  	      	{{totalProduct}}:Your Cart Have
		  	      </v-card-title>
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
      	computed: {
      		totalProduct () {
      			return this.cartContain.length
      		}
      	},
      	mounted () {
      		this.checkLoggedIn ()
            this.username=localStorage.getItem('username')
      	},
      	components:{
      		'sidebar': Sidebar
      	},

        data: () => ({
        	cartItem: 0,
        	isLoggedIn: false,
          username:'arun',
          dateTime:'',
        	cartContain: [],
        	productList: [
        	  {
        	  	name: 'Hp Notebook', products:'https://media.hpshopping.in/wysiwyg/brand/ntb/hppro.png', description: 'This is best Notebook for student also for office very light weight and slim',specification:'Hp Notebook', id: 'lapy1'
        	  },
        	  {
        	  	name: 'Dell Gaming Laptop', products:'https://cf4.s3.souqcdn.com/item/2017/11/10/27/96/34/85/item_XL_27963485_68754256.jpg', description: 'Very good laptop for game lovers best in design',specification:'1TB Hdd 120GB SSD 8GB RAM i7 Processor 4Gb Nvida Graphics', id:'lapy2'
        	  },
        	  {
        	   name: 'Acer Laptop', products:'https://static-ecpa.acer.com/media/catalog/product/cache/7/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/p/r/predator-helios-300_main_1_5.png', description: 'Very good laptop for game lovers best in design and best cooling features available',specification:'1TB Hdd 120GB SSD 8GB RAM i7 Processor', id:'lapy3'	
        	  },
        	  {
        	  	name:'Dell Inspiron', products: 'https://icdn4.digitaltrends.com/image/dell-xps-13-screen-lid1-1500x1000.jpg', description: 'Very good and thin laptop',specification:'1TB Hdd 4GB RAM i5 Processor', id: 'lapy3'
        	  },
        	  {
        	  	name: 'Apple Air', products: 'https://images.techhive.com/images/article/2017/01/macbook_air_apple-100705225-large.jpg', description: 'Very good Laptop for Apple users',specification:'512 SSD' ,id: 'apple1'
        	  },
        	  {
        	  	name: 'Hard Drive', products:'https://brain-images-ssl.cdn.dixons.com/9/7/21534979/u_21534979.jpg', description: 'Internal HDD',specification:'SATA HADRDISK WITH 12000 RPM', id: 'hdd1'
        	  },
            {
              name: 'Sandisk Pendrive', products:'https://images-na.ssl-images-amazon.com/images/I/61fFVQlEB6L._SX425_.jpg', description: 'Very good 3.0 Support pendrive',specification:'USB 3.0 Support', id: 'pendrive1'
            },
            {
              name: 'Hp Pendrive', products: 'https://image2.pricedekho.com/p/124/0/0/2176900/8109560-hp-pen-drive-16-gb-v210w-with-free-1-year-norton-antivirus-subscription-white-picture-large.jpg', description: 'Very good 3.0 Support pendrive',specification:'USB 3.0 Support', id: 'pendrive2'
            },

            {
              name: 'Samsung Pendrive', products: 'https://bpon.lmitassets.com/img/pendrive/samsung-barmuf64ba-64gb-usb30-pendrive-price-1.jpg', description: 'Very good 3.0 Support pendrive',specification:'USB 3.0 Support', id:'pendrive3'
            }

        	]
          
        }),

        methods: {
        	addToCart (id) {
        		this.cartContain.push(id)
        	},
         checkLoggedIn () {
         	let logged = localStorage.getItem("userChecker")
      		if (logged === 'loggedin') {
      			this.isLoggedIn = true
      		} else {
      			this.isLoggedIn = false
      			this.$router.push('/')
      		}
      	  }
        },
        userGreet(){
          if(logged == 'loggedin'){
            localStorage.getItem("email")
            console.log('email')
          }
        },
        dateTime(){
          var datTime = new Date();
          var month = ('0' + (datTime.getMonth() + 1)).slice(-2);
          var date = ('0' + datTime.getDate()).slice(-2);
          var year = datTime.getFullYear();
          var formattedDate = year + '/' + month + '/' + date;
          document.getElementById("datTime").innerHTML = formattedDate;
          this.dateTime
        },

          props: ['id']
          
 }
</script>
